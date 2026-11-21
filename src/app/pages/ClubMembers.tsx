import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { PhotoViewer } from "@/app/components/PhotoViewer";
import { ArrowLeft, ArrowRight, BookOpen, Camera, ChevronDown, Search, X } from "lucide-react";
import { teamPhotos, type TeamPhoto } from "@/app/data/teamPhotos";
import { appPath, href } from "@/app/routing";
import heroImage from "@/assets/decades/1920s/1921_part1_image47.jpg";

/**
 * Club Members: everyone in Peter Bell's history of the club, 1837-2015.
 * The words are Peter's, exactly as he wrote them; this page only arranges them.
 * Data: public/members/data.json, made in the studio from his five parts.
 */

type Entry = { id: number; part: number; kind: string; year: number | null; span: [number, number] | null; heading: string; paras: string[] };
type RawPerson = { id: string; name: string; aka: string[]; roles: string[]; about: number[]; mentions: number[]; unsure?: 1; checked?: 1; fromText?: 1 };
type Person = RawPerson & {
  sur: string; letter: string; first: number | null; last: number | null;
  stories: Entry[]; profile: Entry[]; photos: TeamPhoto[]; portrait?: string; searchName: string;
};
type Data = { people: Person[]; byId: Map<string, Person>; entries: Entry[]; peopleOf: Map<number, string[]> };

const START = 1837, END = 2015;
const DECADES = Array.from({ length: 19 }, (_, i) => 1830 + i * 10);
const PORTRAITS: Record<string, string> = { "pat-bowerbank": "members/pat-bowerbank.jpg" };

const display = "font-['Archivo_Black',sans-serif]";
const serif = "font-['Georgia',serif]";
const ui = "font-['Helvetica',sans-serif]";

/* ---------- data ---------- */

function keysOf(form: string): string[] {
  const f = form.replace(/\b(Mrs?|Rev|REV|Dr|Ald|Major Gen|Major General|Brevet Colonel|Colonel|Capt|Sir)\.?\s+/g, "")
    .replace(/\(.*?\)|“.*?”|".*?"/g, "").trim();
  const w = f.split(/\s+/);
  if (w.length < 2) return [];
  const sur = w[w.length - 1].toLowerCase().replace(/[^a-z’'-]/g, "");
  const given = w.slice(0, -1);
  if (given.every((g) => /^([A-Z]\.?)+$/.test(g))) {
    const ini = given.join("").replace(/[^A-Z]/g, "").toLowerCase();
    return ini ? [`i:${ini}|${sur}`] : [];
  }
  const fn = given.find((g) => !/^([A-Z]\.?)+$/.test(g))!;
  return [`f:${fn.toLowerCase()}|${sur}`, `i:${fn[0].toLowerCase()}|${sur}`];
}

let loading: Promise<Data> | null = null;
function loadData(): Promise<Data> {
  if (loading) return loading;
  loading = fetch(href("/members/data.json"))
    .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
    .then((raw: { people: RawPerson[]; entries: Entry[] }) => {
      const entries = raw.entries;
      const keyIndex = new Map<string, string[]>();
      const people: Person[] = raw.people.map((p) => {
        const ids = [...p.about, ...p.mentions];
        const stories = ids.map((i) => entries[i]).filter(Boolean).sort((a, b) => (a.year ?? 9999) - (b.year ?? 9999) || a.id - b.id);
        const ys: number[] = [];
        stories.forEach((e) => { if (e.year) ys.push(e.year); if (e.kind === "profile" && e.span) ys.push(...e.span); });
        const clean = p.name.replace(/^Mrs?\s+/, "");
        const sur = clean.split(/\s+/).pop()!.replace(/[^A-Za-z’'-]/g, "");
        const person: Person = {
          ...p, stories, profile: stories.filter((e) => e.kind === "profile"),
          first: ys.length ? Math.min(...ys) : null, last: ys.length ? Math.max(...ys) : null,
          sur: sur.toLowerCase(), letter: (sur[0] || "#").toUpperCase(), photos: [],
          portrait: PORTRAITS[p.id], searchName: [p.name, ...p.aka].join(" ").toLowerCase(),
        };
        if (!p.unsure) [p.name, ...p.aka].forEach((f) => keysOf(f).forEach((k) => keyIndex.set(k, [...(keyIndex.get(k) || []), p.id])));
        return person;
      });
      const byId = new Map(people.map((p) => [p.id, p]));
      teamPhotos.forEach((photo) => photo.players.forEach((pl) => {
        for (const k of keysOf(pl.name)) {
          const ids = [...new Set(keyIndex.get(k) || [])];
          if (ids.length === 1) { const p = byId.get(ids[0])!; if (!p.photos.includes(photo)) p.photos.push(photo); break; }
        }
      }));
      const peopleOf = new Map<number, string[]>();
      people.forEach((p) => [...p.about, ...p.mentions].forEach((i) => peopleOf.set(i, [...(peopleOf.get(i) || []), p.id])));
      people.sort((a, b) => a.sur.localeCompare(b.sur) || a.name.localeCompare(b.name));
      return { people, byId, entries, peopleOf };
    });
  loading.catch(() => { loading = null; });
  return loading;
}

/* ---------- text helpers ---------- */

const reEsc = (w: string) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wordStart = (w: string) => new RegExp(`(^|[^a-z0-9’'])${reEsc(w)}`, "i");
const SCORE = /(\b\d{1,3}\s+not out\b|\b\d{1,2}\s+(?:wickets\s+)?for\s+\d{1,3}(?:\s+runs)?\b|\b\d{2,4}\s+runs\b|\bhat[\s-]?tricks?\b|"hat trick"|“hat trick”)/gi;

/** Peter's text, with scores picked out in bold and any search words marked. Nothing is reworded. */
function Rich({ text, words }: { text: string; words: string[] }) {
  const marked = words.length ? new RegExp(`(^|[^A-Za-z0-9’'])(${words.map(reEsc).join("|")})`, "gi") : null;
  const withMarks = (s: string, key: string): ReactNode[] => {
    if (!marked) return [s];
    const out: ReactNode[] = []; let last = 0; let m: RegExpExecArray | null; marked.lastIndex = 0;
    while ((m = marked.exec(s))) {
      const at = m.index + m[1].length;
      out.push(s.slice(last, at), <mark key={key + at} className="bg-[#f3dd8c] text-inherit rounded-sm px-0.5">{m[2]}</mark>);
      last = at + m[2].length;
    }
    out.push(s.slice(last));
    return out;
  };
  const parts = text.split(SCORE);
  return <>{parts.map((s, i) => i % 2 ? <strong key={i} className="font-bold text-[#6B0F2A]">{withMarks(s, `s${i}`)}</strong> : <Fragment key={i}>{withMarks(s, `t${i}`)}</Fragment>)}</>;
}

function yearsOf(p: Person) {
  if (p.first === null) return "Year not given";
  return p.first === p.last ? `${p.first}` : `${p.first}–${p.last}`;
}

function Span({ p, dark = false }: { p: Person; dark?: boolean }) {
  if (p.first === null) return null;
  const w = END - START;
  return (
    <span aria-hidden="true" className={`block h-1.5 rounded-full relative ${dark ? "bg-white/15" : "bg-[#e7e0d6]"}`}>
      <span className="absolute inset-y-0 rounded-full bg-[#1a472a]"
        style={{ left: `${((p.first - START) / w) * 100}%`, width: `${Math.max(0.8, ((p.last! - p.first) / w) * 100)}%`, minWidth: 5 }} />
    </span>
  );
}

const WHITE = "#ffffff", CREAM = "#f8f6f3", GREEN = "#1a472a";

/** The site's angled band edge: the colour above slants into the colour below, the bottom edge always full. */
function Slope({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  if (from === to) return null;
  return (
    <div aria-hidden="true" className="relative h-[60px] md:h-[100px] -my-px" style={{ background: from }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
        <path d={flip ? "M0 0L1920 120H0Z" : "M0 120H1920V0Z"} fill={to} />
      </svg>
    </div>
  );
}

/* ---------- index ---------- */

function MemberRow({ p, words }: { p: Person; words: string[] }) {
  const n = p.stories.length;
  return (
    <li>
      <Link to={`/members/${p.id}`}
        className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 py-4 px-3 -mx-3 rounded-md border-b border-[#e7e0d6] hover:bg-[#f8f6f3] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B1538]/40 transition-colors">
        <span className="min-w-0">
          <span className={`${display} text-lg md:text-xl leading-tight ${p.unsure ? "text-[#6b6264]" : "text-[#8B1538]"} group-hover:text-[#6B0F2A]`}>
            <Rich text={p.name} words={words} />
          </span>
          <span className={`${ui} flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-[#5d5658]`}>
            <span>{n} {n === 1 ? "story" : "stories"}</span>
            {p.roles.length > 0 && <span>{p.roles.join(", ")}</span>}
            {p.profile.length > 0 && <span className="inline-flex items-center gap-1 text-[#1a472a] font-semibold"><BookOpen className="w-3.5 h-3.5" aria-hidden="true" />Peter’s profile</span>}
            {p.photos.length > 0 && <span className="inline-flex items-center gap-1 text-[#1a472a] font-semibold"><Camera className="w-3.5 h-3.5" aria-hidden="true" />In {p.photos.length} team {p.photos.length === 1 ? "photo" : "photos"}</span>}
          </span>
        </span>
        <span className={`${ui} font-bold tabular-nums text-[#1d1a1b] self-start pt-1 text-right`}>{yearsOf(p)}</span>
        <span className="col-span-2"><Span p={p} /></span>
      </Link>
    </li>
  );
}

function StoryItem({ e, data, words, defaultOpen = false }: { e: Entry; data: Data; words: string[]; defaultOpen?: boolean }) {
  const who = (data.peopleOf.get(e.id) || []).map((id) => data.byId.get(id)!).filter(Boolean);
  return (
    <li className="border-b border-[#d9cfc2]">
      <details open={defaultOpen} className="group">
        <summary className="grid grid-cols-[64px_minmax(0,1fr)_20px] gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-white/60 rounded-md px-2 -mx-2">
          <span className={`${display} text-[#8B1538] tabular-nums`}>{e.year ?? "–"}</span>
          <span className="min-w-0">
            <span className={`${ui} font-bold text-[#1d1a1b] block`}><Rich text={e.heading || "The year opens"} words={words} /></span>
            {who.length > 0 && <span className={`${ui} text-sm text-[#5d5658]`}>{who.slice(0, 4).map((p) => p.name).join(", ")}{who.length > 4 ? ` and ${who.length - 4} more` : ""}</span>}
          </span>
          <ChevronDown className="w-5 h-5 text-[#8B1538] transition-transform group-open:rotate-180 mt-0.5" aria-hidden="true" />
        </summary>
        <div className="pb-6 pl-0 md:pl-[80px]">
          <StoryBody e={e} data={data} words={words} />
        </div>
      </details>
    </li>
  );
}

function StoryBody({ e, data, words, self, hideHeading = true }: { e: Entry; data: Data; words: string[]; self?: Person; hideHeading?: boolean }) {
  const others = (data.peopleOf.get(e.id) || []).filter((id) => id !== self?.id).map((id) => data.byId.get(id)!).filter(Boolean);
  return (
    <div className="max-w-3xl">
      {(!hideHeading || !e.paras.length) && e.heading && <h4 className={`${ui} font-bold text-lg text-[#1d1a1b] mb-2`}><Rich text={e.heading} words={words} /></h4>}
      {e.paras.map((t, i) => (
        <p key={i} className={`${serif} text-lg leading-relaxed text-gray-800 mb-4 whitespace-pre-line`}><Rich text={t} words={words} /></p>
      ))}
      <div className={`${ui} flex flex-wrap items-center gap-2 text-sm`}>
        {others.length > 0 && <span className="text-[#5d5658]">Also in this story:</span>}
        {others.slice(0, 12).map((o) => (
          <Link key={o.id} to={`/members/${o.id}`} className="px-2.5 py-1 rounded-full bg-[#f6e9ed] text-[#8B1538] font-semibold hover:bg-[#8B1538] hover:text-white transition-colors">{o.name}</Link>
        ))}
        <span className="ml-auto text-xs uppercase tracking-wider text-[#8a8183]">Peter Bell, Part {e.part}{e.kind === "profile" ? " · profile" : ""}</span>
      </div>
    </div>
  );
}

function Scoreboard({ data, dec, setDec }: { data: Data; dec: number | null; setDec: (d: number | null) => void }) {
  const counts = DECADES.map((d) => data.people.filter((p) => p.first !== null && p.first <= d + 9 && p.last! >= d).length);
  const max = Math.max(...counts);
  const top = [...data.people].filter((p) => !p.unsure).sort((a, b) => b.stories.length - a.stories.length).slice(0, 6);
  return (
    <section className="relative bg-[#1a472a] text-white -mt-px">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
        <div className="min-w-0">
          <h2 className={`${display} text-2xl md:text-3xl`}>Members by decade</h2>
          <p className={`${serif} text-white/80 mt-2 mb-6`}>How many members Peter writes about in each decade. Pick one to see who was at the club, and what happened.</p>
          <div className="overflow-x-auto -mx-2 px-2 pb-2">
            <div className="min-w-[520px] md:min-w-0">
              <div className="flex items-end gap-1 md:gap-1.5 h-[190px]" role="group" aria-label="Pick a decade">
                {DECADES.map((d, i) => {
                  const on = dec === d;
                  return (
                    <button key={d} onClick={() => setDec(on ? null : d)} aria-pressed={on} aria-label={`The ${d}s, ${counts[i]} members`}
                      className="group flex-1 min-w-0 h-full flex flex-col justify-end items-center gap-1.5 focus-visible:outline-none">
                      <span className={`${ui} text-[11px] font-bold tabular-nums ${on ? "text-[#f3dd8c]" : "text-white/70"}`}>{counts[i]}</span>
                      <span className={`w-full rounded-t-sm transition-all duration-300 ${on ? "bg-[#f3dd8c]" : "bg-white/25 group-hover:bg-white/50 group-focus-visible:bg-white/60"}`}
                        style={{ height: `${Math.max(3, (counts[i] / max) * 130)}px` }} />
                      <span className={`${ui} text-[11px] md:text-xs font-bold tabular-nums ${on ? "text-[#f3dd8c]" : "text-white/80"}`}>’{String(d).slice(2)}</span>
                    </button>
                  );
                })}
              </div>
              <div className={`${ui} grid mt-2 text-[11px] uppercase tracking-[0.14em] text-white/60`} style={{ gridTemplateColumns: "7fr 10fr 2fr" }}>
                <span className="border-t border-white/30 pt-1.5">1800s</span>
                <span className="border-t border-white/30 pt-1.5 ml-1">1900s</span>
                <span className="border-t border-white/30 pt-1.5 ml-1">2000s</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0f2c19] rounded-md p-5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)]">
          <h2 className={`${ui} text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-4`}>Most written about</h2>
          <ol className="space-y-2">
            {top.map((p) => (
              <li key={p.id}>
                <Link to={`/members/${p.id}`} className="flex items-center justify-between gap-3 group">
                  <span className={`${display} text-base text-white group-hover:text-[#f3dd8c] truncate`}>{p.name}</span>
                  <span className={`${display} tabular-nums text-[#1d1a1b] bg-[#f4efe6] rounded-sm min-w-[2.6rem] text-center px-1.5 py-0.5`}>{p.stories.length}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className={`${ui} text-xs text-white/60 mt-4`}>Stories in Peter’s history that name them.</p>
        </div>
      </div>
    </section>
  );
}

function MembersIndex({ data }: { data: Data }) {
  const [q, setQ] = useState("");
  const [dec, setDecState] = useState<number | null>(null);
  const [shown, setShown] = useState(40);
  const words = useMemo(() => q.trim().toLowerCase().split(/\s+/).filter((w) => w.length > 1), [q]);
  const setDec = (d: number | null) => { setDecState(d); setShown(40); requestAnimationFrame(() => document.getElementById("members-results")?.scrollIntoView({ behavior: "smooth", block: "start" })); };
  const inDec = (p: Person) => dec === null || (p.first !== null && p.first <= dec + 9 && p.last! >= dec);
  const entryInDec = (e: Entry) => dec === null || (e.year !== null && e.year >= dec && e.year <= dec + 9);
  const decLabel = dec === null ? "" : ` in the ${dec}s`;

  const res = useMemo(() => {
    if (words.length) {
      const res = words.map(wordStart);
      const named = data.people.filter((p) => res.every((r) => r.test(p.searchName)));
      const stories = data.entries.filter((e) => entryInDec(e) && res.every((r) => r.test(e.heading + " " + e.paras.join(" "))));
      return { named, here: named.filter(inDec), elsewhere: named.filter((p) => !inDec(p)), stories };
    }
    const list = data.people.filter(inDec);
    const club = dec === null ? [] : data.entries.filter((e) => entryInDec(e) && e.year && !(data.peopleOf.get(e.id) || []).length);
    return { list, club };
  }, [words, dec, data]);

  const groups = useMemo(() => {
    if (!("list" in res) || !res.list) return [];
    const m = new Map<string, Person[]>();
    res.list.forEach((p) => m.set(p.letter, [...(m.get(p.letter) || []), p]));
    return [...m];
  }, [res]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[560px] md:min-h-[680px] overflow-hidden mt-[73px] flex">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-[#1c1c1c]" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center 35%" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[90px] md:h-[150px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180"><path d="M0 180H1920V0L0 180Z" fill="#1a472a" /></svg>
        </div>
        <div className="relative w-full flex flex-col justify-end pb-28 md:pb-40 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <p className={`${serif} text-lg md:text-xl text-white/90 mb-2`}>From Peter Bell’s history of the club, 1837–2015</p>
            <h1 className={`${display} text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none`}>Club Members</h1>
            <p className={`${serif} text-xl md:text-2xl text-white/95 max-w-3xl mb-8`}>
              Captains and groundsmen, umpires and tea ladies, county players and Test cricketers: {data.people.length} people from the club’s story, and what Peter wrote about each of them.
            </p>
            <label htmlFor="member-search" className="sr-only">Find a member, or any word in the history</label>
            <div className="relative max-w-2xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#8B1538]" aria-hidden="true" />
              <input id="member-search" type="search" value={q} autoComplete="off"
                onChange={(e) => { setQ(e.target.value); setShown(40); }}
                placeholder="Find a member, or search the history"
                className={`${ui} w-full text-lg md:text-xl pl-14 pr-12 py-4 md:py-5 rounded-md bg-white text-[#1d1a1b] placeholder:text-[#7a7072] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] focus:outline-none focus:ring-4 focus:ring-[#f3dd8c] [&::-webkit-search-cancel-button]:hidden`} />
              {q && <button onClick={() => setQ("")} aria-label="Clear the search" className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-[#5d5658] hover:text-[#8B1538]"><X className="w-5 h-5" /></button>}
            </div>
          </div>
        </div>
      </section>

      <Scoreboard data={data} dec={dec} setDec={setDec} />

      {/* Results */}
      <div className="relative h-[60px] md:h-[100px] -mb-px bg-[#1a472a]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120"><path d="M0 0H1920V120L0 0Z" fill="#1a472a" /><path d="M0 0L1920 120H0Z" fill="white" /></svg>
      </div>
      <section id="members-results" className="bg-white pb-20 scroll-mt-[73px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`${ui} flex flex-wrap items-baseline justify-between gap-3 py-4 border-b-2 border-[#1d1a1b]`}>
            <h2 className={`${display} text-2xl md:text-4xl text-[#1d1a1b]`}>
              {words.length ? <>Results for “{q.trim()}”{decLabel}</> : dec === null ? "All members, A to Z" : <>Members in the {dec}s</>}
            </h2>
            {dec !== null && <button onClick={() => setDecState(null)} className="inline-flex items-center gap-1.5 text-[#8B1538] font-semibold hover:underline"><X className="w-4 h-4" />Show all years</button>}
          </div>

          {"list" in res && res.list && (
            <>
              <nav aria-label="Jump to a letter" className="sticky top-[73px] z-20 bg-white/95 backdrop-blur border-b border-[#e7e0d6] -mx-6 px-6 py-2 flex gap-1 overflow-x-auto">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => {
                  const has = groups.some(([k]) => k === l);
                  return <button key={l} disabled={!has} onClick={() => document.getElementById(`letter-${l}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className={`${ui} shrink-0 w-8 h-9 rounded font-bold ${has ? "text-[#8B1538] hover:bg-[#f6e9ed]" : "text-[#d9cfc2] cursor-default"}`}>{l}</button>;
                })}
              </nav>
              <p className={`${ui} text-[#5d5658] mt-4`}>{res.list.length} members{decLabel}{res.club && res.club.length > 0 && <> · <a href="#club-notes" className="text-[#8B1538] font-semibold hover:underline">{res.club.length} club stories from the {dec}s ↓</a></>}</p>
              {groups.map(([letter, ps]) => (
                <section key={letter} id={`letter-${letter}`} className="scroll-mt-[130px] pt-8">
                  <h3 className={`${display} text-5xl md:text-6xl text-[#1a472a] leading-none mb-2`}>{letter}</h3>
                  <ul className="grid md:grid-cols-2 gap-x-12">{ps.map((p) => <MemberRow key={p.id} p={p} words={[]} />)}</ul>
                </section>
              ))}
            </>
          )}

          {"named" in res && res.named && (
            <div className="pt-6">
              {res.here.length > 0 && <>
                <h3 className={`${ui} text-sm font-bold uppercase tracking-[0.14em] text-[#5d5658] mt-4`}>{dec === null ? "Members" : `Members${decLabel}`}</h3>
                <ul className="grid md:grid-cols-2 gap-x-12">{res.here.map((p) => <MemberRow key={p.id} p={p} words={words} />)}</ul>
              </>}
              {res.elsewhere.length > 0 && <>
                <h3 className={`${ui} text-sm font-bold uppercase tracking-[0.14em] text-[#5d5658] mt-8`}>{res.here.length ? "In other years" : `Not in the ${dec}s. In other years:`}</h3>
                <ul className="grid md:grid-cols-2 gap-x-12">{res.elsewhere.map((p) => <MemberRow key={p.id} p={p} words={words} />)}</ul>
              </>}
              {res.stories.length > 0 && <>
                <h3 className={`${ui} text-sm font-bold uppercase tracking-[0.14em] text-[#5d5658] mt-10`}>{res.stories.length} {res.stories.length === 1 ? "story mentions" : "stories mention"} “{q.trim()}”{decLabel}</h3>
                <ul>{res.stories.slice(0, shown).map((e) => <StoryItem key={e.id} e={e} data={data} words={words} />)}</ul>
                {res.stories.length > shown && <button onClick={() => setShown(shown + 40)} className={`${ui} mt-6 px-5 py-3 rounded-md border border-[#d9cfc2] font-semibold hover:border-[#8B1538] hover:text-[#8B1538]`}>Show more stories ({res.stories.length - shown} left)</button>}
              </>}
              {!res.named.length && !res.stories.length && (
                <div className={`${ui} py-16 text-center text-[#5d5658]`}>
                  <p className="text-lg">Nothing found for “{q.trim()}”{decLabel}.</p>
                  {dec !== null ? <button onClick={() => setDecState(null)} className="mt-3 text-[#8B1538] font-semibold hover:underline">Search all years</button> : <p className="mt-2">Try part of a surname, or another spelling.</p>}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {"club" in res && res.club && res.club.length > 0 && (
        <>
          <div className="relative h-[60px] md:h-[100px] -mb-px"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120"><path d="M0 120H1920V0L0 120Z" fill="#f8f6f3" /></svg></div>
          <section id="club-notes" className="bg-[#f8f6f3] py-14 md:py-20 -mt-px scroll-mt-[73px]">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className={`${display} text-3xl md:text-5xl text-[#8B1538] mb-3`}>Club stories, {dec}s</h2>
              <p className={`${serif} text-lg md:text-xl text-gray-700 mb-8 max-w-3xl`}>The parts of Peter’s history that belong to the whole club: meetings, matches, the ground and the pavilion.</p>
              <ul>{res.club.slice(0, shown).map((e) => <StoryItem key={e.id} e={e} data={data} words={[]} />)}</ul>
              {res.club.length > shown && <button onClick={() => setShown(shown + 40)} className={`${ui} mt-6 px-5 py-3 rounded-md border border-[#d9cfc2] bg-white font-semibold hover:border-[#8B1538] hover:text-[#8B1538]`}>Show more ({res.club.length - shown} left)</button>}
            </div>
          </section>
        </>
      )}
    </>
  );
}

/* ---------- a member's page ---------- */

function MemberPage({ p, data }: { p: Person; data: Data }) {
  const [viewing, setViewing] = useState<TeamPhoto | null>(null);
  const dated = p.stories.filter((e) => e.year && e.kind !== "profile");
  const undated = p.stories.filter((e) => !e.year && e.kind !== "profile");
  const decades = useMemo(() => {
    const m = new Map<number, Map<number, Entry[]>>();
    dated.forEach((e) => {
      const d = Math.floor(e.year! / 10) * 10;
      if (!m.has(d)) m.set(d, new Map());
      const y = m.get(d)!; y.set(e.year!, [...(y.get(e.year!) || []), e]);
    });
    return [...m];
  }, [p]);
  const years = [...new Set(dated.map((e) => e.year!))];
  const hero = p.photos[0]?.image || heroImage;
  const isOwn = (h: string) => [p.name, ...p.aka].some((f) => f.replace(/[^a-z]/gi, "").toLowerCase() === h.replace(/^(Obituary( to)?|Tribute to)\s+/i, "").replace(/\s*[-–].*$/, "").replace(/[^a-z]/gi, "").toLowerCase());
  const w = END - START;
  const firstFrom = p.profile.length ? WHITE : GREEN;
  const bandColour = (i: number) => ((firstFrom === WHITE ? i % 2 === 0 : i % 2 === 1) ? CREAM : WHITE);
  const afterDecades = decades.length ? bandColour(decades.length - 1) : firstFrom;
  const beforePhotos = undated.length ? WHITE : afterDecades;

  return (
    <>
      <section className="relative min-h-[460px] md:min-h-[560px] overflow-hidden mt-[73px] flex">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-[#1c1c1c]" style={{ backgroundImage: `url(${hero})`, backgroundPosition: "center 30%" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[80px] md:h-[130px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180"><path d="M0 180H1920V0L0 180Z" fill="#1a472a" /></svg>
        </div>
        <div className="relative w-full flex flex-col justify-end pb-24 md:pb-32 px-6">
          <div className="max-w-6xl mx-auto w-full flex items-end gap-6 md:gap-10">
            {p.portrait && <img src={href("/" + p.portrait)} alt={`${p.name}, from Peter Bell’s history`} className="hidden sm:block w-32 md:w-44 rounded-sm shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] border-4 border-[#f4efe6]" />}
            <div className="min-w-0">
              <Link to="/members" className={`${ui} inline-flex items-center gap-2 text-white/85 hover:text-white font-semibold mb-5`}><ArrowLeft className="w-4 h-4" />All club members</Link>
              <h1 className={`${display} text-4xl md:text-6xl lg:text-7xl text-white leading-[1.02] mb-3 break-words`}>{p.name}</h1>
              <p className={`${serif} text-xl md:text-2xl text-white/90`}>
                {p.first !== null ? <>At the club in Peter’s history {yearsOf(p)}</> : "Year not given"}{p.roles.length > 0 && <> · {p.roles.join(" · ")}</>}
              </p>
              {p.aka.length > 0 && <p className={`${ui} text-sm text-white/70 mt-2`}>Also written as {p.aka.join(" · ")}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* The scoreboard */}
      <section className="bg-[#1a472a] -mt-px pb-10 md:pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/15 rounded-md overflow-hidden shadow-[0_16px_36px_-18px_rgba(0,0,0,0.7)]">
            {[
              ["First mentioned", p.first ?? "–"],
              ["Last mentioned", p.last ?? "–"],
              ["Stories", p.stories.length],
              [p.photos.length ? "Team photos" : "Decades", p.photos.length || decades.length],
            ].map(([label, value]) => (
              <div key={String(label)} className="bg-[#0f2c19] px-4 py-5 text-center">
                <div className={`${display} text-3xl md:text-5xl text-[#f4efe6] tabular-nums`}>{value}</div>
                <div className={`${ui} text-[11px] md:text-xs uppercase tracking-[0.16em] text-white/65 mt-2`}>{label}</div>
              </div>
            ))}
          </div>
          {p.first !== null && (
            <div className="mt-8">
              <div className="relative h-8" aria-label={`Stories from ${years.join(", ")}`}>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30" />
                <div className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-[#f3dd8c]/35"
                  style={{ left: `${((p.first - START) / w) * 100}%`, width: `${Math.max(0.8, ((p.last! - p.first) / w) * 100)}%` }} />
                {years.map((y) => (
                  <button key={y} onClick={() => document.getElementById(`year-${y}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    title={`${y}`} aria-label={`Go to ${y}`}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f3dd8c] ring-2 ring-[#1a472a] hover:scale-150 transition-transform"
                    style={{ left: `${((y - START) / w) * 100}%` }} />
                ))}
              </div>
              <div className={`${ui} relative h-5 text-xs text-white/65 tabular-nums mt-1`}>
                {[1837, 1900, 1950, 2015].map((y, i, all) => (
                  <span key={y} className={`absolute ${i === 0 ? "" : i === all.length - 1 ? "-translate-x-full" : "-translate-x-1/2"}`} style={{ left: `${((y - START) / w) * 100}%` }}>{y}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Peter's profile */}
      {p.profile.length > 0 && <Slope from={GREEN} to={WHITE} flip />}
      {p.profile.length > 0 && (
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className={`${display} text-3xl md:text-5xl text-[#8B1538] mb-8`}>Peter’s profile</h2>
            {p.profile.map((e) => (
              <div key={e.id} className="mb-10 [&_p:first-of-type]:first-letter:font-['Archivo_Black',sans-serif] [&_p:first-of-type]:first-letter:text-6xl [&_p:first-of-type]:first-letter:float-left [&_p:first-of-type]:first-letter:mr-3 [&_p:first-of-type]:first-letter:leading-[0.8] [&_p:first-of-type]:first-letter:text-[#8B1538]">
                {!isOwn(e.heading) && <h3 className={`${ui} font-bold text-lg mb-3`}>{e.heading}</h3>}
                <StoryBody e={e} data={data} words={[]} self={p} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Stories, decade by decade */}
      {decades.map(([d, ys], i) => {
        const bg = bandColour(i);
        return (
          <Fragment key={d}>
            <Slope from={i === 0 ? firstFrom : bandColour(i - 1)} to={bg} flip={i % 2 === 1} />
            <section style={{ background: bg }} className="py-10 md:py-14">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                  <h2 className={`${display} text-4xl md:text-6xl text-[#1a472a]`}>The {d}s</h2>
                  {d >= 1840 && <Link to={`/decades/${d}`} className={`${ui} inline-flex items-center gap-2 font-semibold text-[#8B1538] hover:text-[#6B0F2A]`}>The club in the {d}s<ArrowRight className="w-4 h-4" /></Link>}
                </div>
                {[...ys].map(([y, es]) => (
                  <div key={y} id={`year-${y}`} className="grid md:grid-cols-[120px_minmax(0,1fr)] gap-2 md:gap-8 py-8 border-t border-[#d9cfc2] scroll-mt-[90px]">
                    <div className={`${display} text-3xl md:text-4xl text-[#8B1538] tabular-nums md:sticky md:top-[96px] self-start`}>{y}</div>
                    <div className="space-y-10 min-w-0">
                      {es.map((e) => (
                        <article key={e.id}>
                          {e.heading && !isOwn(e.heading) && <h3 className={`${ui} font-bold text-lg md:text-xl text-[#1d1a1b] mb-3`}>{e.heading}</h3>}
                          {!e.heading && <h3 className={`${ui} text-xs uppercase tracking-[0.16em] text-[#5d5658] mb-3`}>The year opens</h3>}
                          <StoryBody e={e} data={data} words={[]} self={p} />
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Fragment>
        );
      })}

      {undated.length > 0 && (
        <>
          <Slope from={afterDecades} to={WHITE} flip={decades.length % 2 === 1} />
          <section className="bg-white py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className={`${display} text-3xl md:text-4xl text-[#1a472a] mb-6`}>No year given</h2>
              <div className="space-y-10">{undated.map((e) => <article key={e.id}>{e.heading && !isOwn(e.heading) && <h3 className={`${ui} font-bold text-lg mb-3`}>{e.heading}</h3>}<StoryBody e={e} data={data} words={[]} self={p} /></article>)}</div>
            </div>
          </section>
        </>
      )}

      {/* Team photographs */}
      {p.photos.length > 0 && (
        <>
          <Slope from={beforePhotos} to={GREEN} />
          <section className="bg-[#1a472a] py-14 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className={`${display} text-3xl md:text-5xl text-white mb-8`}>In the team photographs</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {p.photos.map((ph) => (
                  <button key={ph.title + ph.year} onClick={() => setViewing(ph)} className="text-left group focus-visible:outline-none">
                    <img src={ph.image} alt={ph.title} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm group-hover:opacity-90 group-focus-visible:ring-4 group-focus-visible:ring-[#f3dd8c] transition" />
                    <span className={`${display} block text-white text-lg mt-3`}>{ph.title}</span>
                    <span className={`${ui} block text-sm text-white/70`}>{ph.year} · click to enlarge</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {viewing && <PhotoViewer src={viewing.image} alt={viewing.title} caption={`${viewing.title}. ${viewing.players.map((x) => x.name).join(", ")}`} onClose={() => setViewing(null)} />}

      <Slope from={p.photos.length ? GREEN : beforePhotos} to={WHITE} flip />
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link to="/members" className={`${ui} inline-flex items-center gap-2 font-semibold text-[#8B1538] hover:text-[#6B0F2A]`}><ArrowLeft className="w-4 h-4" />All club members</Link>
          <p className={`${ui} text-sm text-[#5d5658]`}>Every word above is Peter Bell’s, from his history of the club.</p>
        </div>
      </section>
    </>
  );
}

/* ---------- the page ---------- */

export default function ClubMembers() {
  const [data, setData] = useState<Data | null>(null);
  const [failed, setFailed] = useState(false);
  const path = appPath(window.location.pathname);
  const id = path.startsWith("/members/") ? path.slice("/members/".length) : null;

  useEffect(() => { loadData().then(setData).catch(() => setFailed(true)); }, []);
  useEffect(() => {
    const p = id && data?.byId.get(id);
    document.title = p ? `${p.name} · Club Members · Sutton Coldfield Cricket Club` : "Club Members · Sutton Coldfield Cricket Club";
  }, [id, data]);

  const person = id && data ? data.byId.get(id) : null;

  return (
    <div className="min-h-screen bg-white selection:bg-[#8B1538] selection:text-white">
      <MenuBar />
      {!data && (
        <div className="mt-[73px] min-h-[70vh] flex items-center justify-center px-6">
          <p className={`${serif} text-xl text-[#5d5658]`}>
            {failed ? <>The members list didn’t load. <button onClick={() => { setFailed(false); loadData().then(setData).catch(() => setFailed(true)); }} className="text-[#8B1538] underline">Try again</button></> : "Opening the club’s records…"}
          </p>
        </div>
      )}
      {data && id && !person && (
        <div className="mt-[73px] min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className={`${serif} text-2xl`}>We couldn’t find that member.</p>
          <Link to="/members" className={`${ui} font-semibold text-[#8B1538]`}>See all club members</Link>
        </div>
      )}
      {data && person && <MemberPage key={person.id} p={person} data={data} />}
      {data && !id && <MembersIndex data={data} />}
      <Footer />
    </div>
  );
}
