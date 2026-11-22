import { createContext, Fragment, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useNavigate } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { PhotoViewer } from "@/app/components/PhotoViewer";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/app/components/ui/sheet";
import { ArrowLeft, ArrowRight, BookOpen, Camera, ChevronDown, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { teamPhotos, type TeamPhoto } from "@/app/data/teamPhotos";
import { appPath, href } from "@/app/routing";
import heroImage from "@/assets/decades/1920s/1921_part1_image47.jpg";
import { roll as fcRoll, profiles as fcProfiles } from "@/app/data/firstClassCricketers";

/**
 * Club Members: everyone in Peter Bell's history of the club, 1837-2015.
 * The words are Peter's, exactly as he wrote them; this page only arranges them.
 * Data: public/members/data.json, made in the studio from his five parts.
 */

type ScoreKind = "hundreds" | "five" | "hat" | "part";
const SCORE_KINDS: [ScoreKind, string, string][] = [
  ["hundreds", "Hundreds", "Members who made a hundred"],
  ["five", "Five wickets or more", "Members who took five wickets or more"],
  ["hat", "Hat-tricks", "Members who took a hat-trick"],
  ["part", "Partnerships", "Members in a big partnership"],
];
const SCORE_TESTS: Record<ScoreKind, RegExp> = {
  hundreds: /\((?:1\d\d|2\d\d)(?:\s*not out)?\)|\b(?:1\d\d|2\d\d)\s*(?:not out|\*)|\b(?:scor\w*|made|hit|obtain\w*|innings of)\s+(?:1\d\d|2\d\d)\b(?!\s*(?:for\s+\d|runs? for))|(?<!half[-\s])\bcent(?:u|au)r(?:y|ies)\b/i,
  five: /\b(?:took|taking|figures of|had)\s+(?:all\s+)?(?:[5-9]|10)\s+(?:wickets\s+)?for\s+\d{1,3}\b|\ball ten wickets\b|\b(?:took|taking)\s+(?:five|six|seven|eight|nine|all ten)\s+wickets\b/i,
  hat: /hat[\s-]?trick(?!["'”’]*\s+of\b)/i, // not "a hat trick of achieving a thousand runs"
  part: /partnership|\bput on \d+|\bstand of \d+|for the (?:first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|last|\d+(?:st|nd|rd|th)) wicket/i,
};
/** For each kind of score, the first sentence of Peter's that names this member alongside it. */
function findScores(p: Person): Partial<Record<ScoreKind, string>> {
  const out: Partial<Record<ScoreKind, string>> = {};
  const re = selfPattern(p);
  for (const e of p.stories) {
    for (const para of e.paras) {
      if (para.includes("\t") || (para.match(/\b\d+\b/g) || []).length > 14) continue; // tables of figures
      for (const sent of para.split(/(?<=[.!?])\s+/)) {
        re.lastIndex = 0;
        const named = re.test(sent) || (p.profile.includes(e) && !/\b[A-Z]\.\s?[A-Z]/.test(sent));
        if (!named) continue;
        for (const [k] of SCORE_KINDS) if (!out[k] && SCORE_TESTS[k].test(sent)) out[k] = sent.trim();
      }
    }
  }
  return out;
}

type Entry = { id: number; part: number; kind: string; year: number | null; span: [number, number] | null; heading: string; paras: string[] };
type RawPerson = { id: string; name: string; aka: string[]; roles: string[]; about: number[]; mentions: number[]; unsure?: 1; checked?: 1; fromText?: 1 };
type Person = RawPerson & {
  sur: string; letter: string; first: number | null; last: number | null;
  stories: Entry[]; profile: Entry[]; photos: TeamPhoto[]; portrait?: string; searchName: string; tok: string[];
  fc?: { teams: string; years: string; order: number };
  scores: Partial<Record<ScoreKind, string>>;
  fcStory?: { paragraphs: string[]; image?: string; imageCaption?: string };
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
          ...p, stories, profile: stories.filter((e) => e.kind === "profile" && p.about.includes(e.id)),
          first: ys.length ? Math.min(...ys) : null, last: ys.length ? Math.max(...ys) : null,
          sur: sur.toLowerCase(), letter: (sur[0] || "#").toUpperCase(), photos: [],
          portrait: PORTRAITS[p.id], searchName: [p.name, ...p.aka].join(" ").toLowerCase(), tok: tokens([p.name, ...p.aka].join(" ")), scores: {},
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
      // The First-Class Cricketers list (the club's records, not Peter's): each player joined to their member, or added.
      const pick = (name: string) => {
        const clean = name.replace(/[“”"][^“”"]*[“”"]\s*/g, "").replace(/\s+/g, " ").trim();
        const unique = (k: string) => {
          const ids = [...new Set(keyIndex.get(k) || [])].filter((id) => !byId.get(id)!.name.startsWith("Mrs"));
          return ids.length === 1 ? byId.get(ids[0])! : null;
        };
        for (const k of keysOf(clean)) { const p = unique(k); if (p) return p; }
        // "A. D. Thomason" and "Aaron Thomason": the first initial and surname, when only one member fits
        const k = keysOf(clean).find((x) => x.startsWith("i:"));
        if (k) { const [ini, sur] = k.slice(2).split("|"); return unique(`i:${ini[0]}|${sur}`); }
        return null;
      };
      fcRoll.forEach((r, order) => {
        let p = pick(r.name);
        if (!p) {
          const [a, b] = r.years.split("-");
          const first = parseInt(a, 10);
          const last = !b ? first : b.length === 2 ? parseInt(a.slice(0, 2) + b, 10) : parseInt(b, 10);
          const sur = r.name.replace(/^(Rev\.|Sir)\s+/, "").split(/\s+/).pop()!;
          p = {
            id: "fc-" + r.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), name: r.name, aka: [], roles: [], about: [], mentions: [],
            stories: [], profile: [], photos: [], first, last, sur: sur.toLowerCase(), letter: sur[0].toUpperCase(),
            searchName: r.name.toLowerCase(), tok: tokens(r.name), scores: {},
          } as Person;
          people.push(p); byId.set(p.id, p);
        }
        p.fc = { teams: r.teams, years: r.years, order };
      });
      fcProfiles.forEach((pr) => {
        const p = pick(pr.name);
        if (p) p.fcStory = { paragraphs: pr.paragraphs, image: pr.image, imageCaption: pr.imageCaption };
      });
      people.forEach((p) => { p.scores = findScores(p); });
      people.sort((a, b) => a.sur.localeCompare(b.sur) || a.name.localeCompare(b.name));
      return { people, byId, entries, peopleOf };
    });
  loading.catch(() => { loading = null; });
  return loading;
}

/* ---------- smart search ---------- */

function tokens(s: string): string[] {
  return [...new Set(s.toLowerCase().replace(/[^a-z’'\s-]/g, " ").split(/[\s-]+/).map((t) => t.replace(/[’']/g, "")).filter(Boolean))];
}
/** Letters different between two words, giving up once past the limit. */
function distance(a: string, b: string, limit: number): number {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]; let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      best = Math.min(best, cur[j]);
    }
    if (best > limit) return limit + 1;
    prev = cur;
  }
  return prev[b.length];
}
/** How well a member's names fit what was typed: whole words, starts of words, then near spellings. 0 means no match. */
function nameScore(p: Person, q: string[]): number {
  let total = 0;
  for (const w of q) {
    let best = 0;
    for (const t of p.tok) {
      if (t === w) best = Math.max(best, 4);
      else if (t.startsWith(w)) best = Math.max(best, 3);
      else if (w.length >= 4) {
        const limit = w.length >= 7 ? 2 : 1;
        if (distance(w, t.slice(0, w.length + limit), limit) <= limit || distance(w, t, limit) <= limit) best = Math.max(best, 1.5);
      }
    }
    if (!best) return 0;
    total += best;
  }
  const sur = p.sur;
  if (q.some((w) => sur.startsWith(w))) total += 1;
  return total + Math.log10(1 + p.stories.length) * 0.6;
}

/* ---------- text helpers ---------- */

const reEsc = (w: string) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wordStart = (w: string) => new RegExp(`(^|[^a-z0-9’'])${reEsc(w)}`, "i");
const SCORE = /(\b\d{1,3}\s+not out\b|\b\d{1,2}\s+(?:wickets\s+)?for\s+\d{1,3}(?:\s+runs)?\b|\b\d{2,4}\s+runs\b|\bhat[\s-]?tricks?\b|"hat trick"|“hat trick”)/gi;

/** Peter's text, with scores picked out in bold and any search words marked. Nothing is reworded. */
/** The ways a member's name is written, as one pattern: full forms first, then the surname on its own. */
function selfPattern(p: Person): RegExp {
  const forms = [p.name, ...p.aka].filter((f) => f.length > 2).sort((a, b) => b.length - a.length).map((f) => reEsc(f).replace(/\\\.\s?/g, "\\.?\\s?"));
  if (p.sur.length >= 4) forms.push(reEsc(p.name.replace(/^Mrs?\s+/, "").split(/\s+/).pop()!));
  return new RegExp(`(?<![A-Za-z])(${forms.join("|")})(?![a-z])`, "g");
}

function Rich({ text, words, self }: { text: string; words: string[]; self?: RegExp }) {
  if (self) {
    const bits = text.split(self);
    if (bits.length > 1) return <>{bits.map((b, i) => i % 2
      ? <span key={i} className="font-semibold text-[#8B1538] bg-[#f6e9ed] rounded-sm px-0.5">{b}</span>
      : <Rich key={i} text={b} words={words} />)}</>;
  }
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

/** A member with one or two stories and no profile opens in a pop-up, like the timeline; anyone else has a page. */
const isSmall = (_p: Person) => true; // every member opens in the pop-up (John, 21 Nov)
type Opener = { open: (p: Person) => void; go: (p: Person) => void };
const OpenCtx = createContext<Opener | null>(null);

/** A link to a member: the pop-up for a short entry, their page otherwise. */
function MemberLink({ p, className, children }: { p: Person; className: string; children: ReactNode }) {
  const o = useContext(OpenCtx);
  if (o) return <button type="button" onClick={() => (isSmall(p) ? o.open(p) : o.go(p))} className={`${className} text-left w-full`}>{children}</button>;
  return <Link to={`/members/${p.id}`} className={className}>{children}</Link>;
}

function initials(p: Person) {
  const n = p.name.replace(/^(Mrs?|Miss|Rev|Dr|Sir)\.?\s+/, "").replace(/\(.*?\)/g, "").trim();
  const parts = n.split(/\s+/);
  const sur = parts.pop() || "";
  const first = parts.join("").replace(/[^A-Z]/g, "").slice(0, 1);
  return (first + sur.slice(0, 1)).toUpperCase() || "?";
}

/** The opening line for a member's card: Peter's profile first, then a story headed with them, then any story naming them. */
function excerpt(p: Person): string {
  const about = p.stories.filter((e) => e.kind !== "profile" && p.about.includes(e.id));
  const e = p.profile[0] || about[0] || p.stories[0];
  if (!e) return "";
  const re = selfPattern(p);
  const sentences = e.paras.join(" ").split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter(Boolean);
  const listy = (x: string) => (x.match(/;/g) || []).length >= 2 || x.length < 30;
  const named = sentences.filter((x) => { re.lastIndex = 0; return re.test(x) && !listy(x); });
  const hit = (e === p.profile[0] ? sentences.find((x) => !listy(x)) : named[0]) || named[0] || sentences.find((x) => !listy(x)) || "";
  if (!hit) return "";
  return hit.length > 160 ? hit.slice(0, hit.lastIndexOf(" ", 155)) + "…" : hit;
}

function MemberRow({ p, words, fc = false, kind = null }: { p: Person; words: string[]; fc?: boolean; kind?: ScoreKind | null }) {
  const line = useMemo(() => {
    if (kind && p.scores[kind]) { const t = p.scores[kind]!; return t.length > 240 ? t.slice(0, t.lastIndexOf(" ", 235)) + "…" : t; }
    return fc && p.fcStory ? p.fcStory.paragraphs[0].split(/(?<=[.!?])\s+/)[0] : excerpt(p);
  }, [p, fc, kind]);
  const n = p.stories.length;
  return (
    <li>
      <MemberLink p={p} className="group h-full flex flex-col p-5 rounded-md bg-[#f8f6f3] border border-transparent hover:bg-white hover:border-[#e7e0d6] hover:shadow-[0_14px_30px_-18px_rgba(60,20,30,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8B1538]/30 transition">
        <span className={`${ui} text-xs font-bold uppercase tracking-[0.14em] text-[#1a472a] tabular-nums`}>{fc && p.fc ? p.fc.years : yearsOf(p)}</span>
        <span className={`${display} text-xl leading-snug mt-1 ${p.unsure ? "text-[#6b6264]" : "text-[#8B1538]"}`}><Rich text={p.name} words={words} /></span>
        {fc && p.fc && <span className={`${ui} text-sm font-semibold text-[#1a472a] mt-1`}>{p.fc.teams}</span>}
        {line ? <span className={`${serif} text-[17px] leading-relaxed text-[#3a3435] mt-2 ${kind ? "line-clamp-5" : "line-clamp-3"}`}>{kind ? <Rich text={line} words={[]} /> : line}</span>
          : p.fc && <span className={`${serif} text-[17px] leading-relaxed text-[#3a3435] mt-2`}>First-class cricket for {p.fc.teams}, {p.fc.years}.</span>}
        <span className={`${ui} mt-auto pt-4 text-sm font-semibold text-[#8B1538] flex flex-wrap items-center gap-x-3 gap-y-1`}>
          <span className="inline-flex items-center gap-1">{n ? `${n} ${n === 1 ? "story" : "stories"}` : "Read more"}<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" /></span>
          {p.profile.length > 0 && <span className="inline-flex items-center gap-1 text-[#1a472a]"><BookOpen className="w-3.5 h-3.5" aria-hidden="true" />Profile</span>}
          {p.photos.length > 0 && <span className="inline-flex items-center gap-1 text-[#1a472a]"><Camera className="w-3.5 h-3.5" aria-hidden="true" />Team photo</span>}
        </span>
      </MemberLink>
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
  const selfRe = useMemo(() => (self ? selfPattern(self) : undefined), [self]);
  const blocks = useMemo(() => {
    const out: string[][] = []; let run: string[] = [];
    const flush = () => { if (run.length >= 3) out.push(run); else run.forEach((t) => out.push([t])); run = []; };
    for (const t of e.paras) {
      if (t.length <= 90 && !t.includes("\n")) run.push(t);
      else { flush(); out.push([t]); }
    }
    flush();
    return out;
  }, [e]);
  const others = (data.peopleOf.get(e.id) || []).filter((id) => id !== self?.id).map((id) => data.byId.get(id)!).filter(Boolean);
  const [all, setAll] = useState(false);
  // A run of names copied from the club's records (new members, a team) reads oddly on its own.
  const isList = e.paras.join(" ").split(";").length >= 6;
  const shownOthers = all ? others : others.slice(0, 6);
  return (
    <div className="max-w-3xl">
      {isList && <p className={`${ui} text-xs font-bold uppercase tracking-[0.14em] text-[#1a472a] mb-2`}>A list of names from the club’s records{e.year ? `, ${e.year}` : ""}</p>}
      {(!hideHeading || !e.paras.length) && e.heading && <h4 className={`${ui} font-bold text-lg text-[#1d1a1b] mb-2`}><Rich text={e.heading} words={words} /></h4>}
      {blocks.map((b, i) => b.length === 1 ? (
        <p key={i} className={`${serif} text-lg leading-relaxed text-gray-800 mb-4 whitespace-pre-line`}><Rich text={b[0]} words={words} self={selfRe} /></p>
      ) : (
        // A run of short lines (awards, a team, officers): set close together as a list, nothing reworded.
        <div key={i} className={`${serif} text-[17px] leading-snug text-gray-800 mb-5 space-y-1.5`}>
          {b.map((t, j) => <p key={j}><Rich text={t} words={words} self={selfRe} /></p>)}
        </div>
      ))}
      {!isList && others.length > 0 && <div className={`${ui} flex flex-wrap items-center gap-2 text-sm`}>
        <span className="text-[#5d5658]">Also in this story:</span>
        {shownOthers.map((o) => (
          <span key={o.id} className="inline-block"><MemberLink p={o} className="px-2.5 py-1 rounded-full bg-[#f6e9ed] text-[#8B1538] font-semibold hover:bg-[#8B1538] hover:text-white transition-colors">{o.name}</MemberLink></span>
        ))}
        {others.length > 6 && <button type="button" onClick={() => setAll(!all)} className="px-2.5 py-1 rounded-full border border-[#d9cfc2] text-[#5d5658] font-semibold hover:border-[#8B1538] hover:text-[#8B1538]">{all ? "Show fewer" : `+ ${others.length - 6} more`}</button>}
      </div>}
    </div>
  );
}

const NAMEISH = /^(?:(?:Mr|Mrs|Miss|Dr|Rev|The Rev|Ald|Sir)\.?\s+)?(?:[A-Z]\.\s?)*(?:[A-Z][a-z’'\-]+\.?\s?)*[A-Z][A-Za-z’'\-]+\.?$/;
/** Peter's heading, unless it is only names (those are shown as links under the story instead). */
function topicOf(h: string) {
  const t = h.replace(/\(.*?\)|“.*?”|".*?"/g, "").replace(/\s*[-–]\s*(Life Member|The Administrator).*$/i, "").replace(/^(Obituary( to)?|Tribute to)\s+/i, "").trim();
  const bits = t.split(/\s*(?:,|;|&|\band\b)\s*/).map((b) => b.trim()).filter(Boolean);
  return bits.length && bits.every((b) => b.split(/\s+/).length <= 4 && NAMEISH.test(b) && !/^The\s(?!Rev)/.test(b)) ? "" : h; // "The Last Safe" is a title, not a name
}

function MemberSheet({ p, data, onClose, onStep }: { p: Person | null; data: Data; onClose: () => void; onStep: (dir: -1 | 1) => void }) {
  const [viewing, setViewing] = useState<TeamPhoto | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => { scroller.current?.closest('[role="dialog"]')?.scrollTo({ top: 0 }); }, [p?.id]);
  const parts = useMemo(() => {
    if (!p) return null;
    const own = p.profile;
    const inOthers = p.stories.filter((e) => e.kind === "profile" && !own.includes(e));
    const undated = p.stories.filter((e) => !e.year && e.kind !== "profile");
    const decades = new Map<number, Map<number, Entry[]>>();
    p.stories.filter((e) => e.year && e.kind !== "profile").forEach((e) => {
      const d = Math.floor(e.year! / 10) * 10;
      if (!decades.has(d)) decades.set(d, new Map());
      const y = decades.get(d)!; y.set(e.year!, [...(y.get(e.year!) || []), e]);
    });
    return { own, inOthers, undated, decades: [...decades] };
  }, [p]);
  const subjectOf = (e: Entry) => data.people.find((x) => x.id !== p?.id && x.profile.includes(e));
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Sheet open={!!p} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="bottom" onEscapeKeyDown={(e) => { if (viewing) e.preventDefault(); }}
        className="h-screen w-screen max-w-none p-0 border-none bg-gradient-to-b from-[rgba(255,255,255,0)] via-white to-white overflow-y-auto">
        {p && parts && (
          <>
            {viewing && <PhotoViewer src={viewing.image} alt={viewing.title} caption={`${viewing.title}. ${viewing.players.map((x) => x.name).join(", ")}`} onClose={() => setViewing(null)} />}
            <SheetTitle className="sr-only">{p.name}</SheetTitle>
            <SheetDescription className="sr-only">What Peter Bell’s history of the club says about {p.name}</SheetDescription>
            <button onClick={onClose} aria-label="Close"
              className="fixed top-0 right-0 w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[#4a4a4a] flex items-center justify-center z-50 hover:bg-[#3a3a3a] transition-colors"
              style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}>
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <div className="absolute top-0 left-0 right-0 h-[140px] md:h-[240px] pointer-events-none">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 336"><path d="M0 336H1920V0L0 336Z" fill="white" /></svg>
            </div>
            <div ref={scroller} className="absolute bg-white left-0 right-0 top-[140px] md:top-[240px] min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-240px)] pb-24">
              <div className="flex absolute right-4 top-[-20px] items-start justify-between w-[180px] border-b border-[rgba(34,34,34,0.3)] pb-px md:right-[60px] md:top-[-25px] md:w-[240px]">
                <button onClick={() => onStep(-1)} className="flex items-center opacity-50 hover:opacity-100 transition-opacity">
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /><span className={`${serif} px-1 text-sm md:text-base text-[#222]`}>previous</span>
                </button>
                <button onClick={() => onStep(1)} className="flex items-center opacity-50 hover:opacity-100 transition-opacity">
                  <span className={`${serif} px-1 text-sm md:text-base text-[#222]`}>next</span><ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              <div className="max-w-[900px] mx-auto px-6 pt-[30px] md:pt-[50px]">
                <div className="flex items-start gap-6">
                  {p.portrait && <img src={href("/" + p.portrait)} alt={`${p.name}, from Peter Bell’s history`} className="w-24 md:w-32 rounded-sm shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)] shrink-0" />}
                  <div className="min-w-0">
                    <h2 className={`${display} text-4xl md:text-6xl leading-tight text-[#8B1538] mb-3 break-words`}>{p.name}</h2>
                    <p className={`${serif} text-base md:text-lg text-[#222]/65`}>
                      {p.stories.length ? (p.first !== null ? `At the club ${yearsOf(p)}` : "Year not given") : ""}{p.stories.length > 0 && p.roles.length > 0 && <> · {p.roles.join(" · ")}</>}
                    </p>
                    {p.aka.length > 0 && <p className={`${ui} text-sm text-[#5d5658] mt-1`}>Also written as {p.aka.join(" · ")}</p>}
                    {p.fc && (
                      <p className={`${ui} mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm`}>
                        <span className="text-xs font-bold uppercase tracking-[0.12em] text-white bg-[#1a472a] rounded px-2 py-1">First-class cricket</span>
                        <span className="font-semibold text-[#1d1a1b]">{p.fc.teams}</span>
                        <span className="text-[#5d5658] tabular-nums">{p.fc.years}</span>
                      </p>
                    )}
                  </div>
                </div>

                {p.fc && !p.fcStory && !p.stories.length && (() => {
                  const d = Math.floor(parseInt(p.fc.years, 10) / 10) * 10;
                  return (
                    <section className="mt-8 bg-[#f8f6f3] rounded-md p-5 md:p-7">
                      <p className={`${ui} text-xs font-bold uppercase tracking-[0.14em] text-[#5d5658] mb-3`}>From the club’s records</p>
                      <p className={`${serif} text-lg leading-relaxed text-[#2a2526]`}>
                        {p.name} is one of the forty-five players the club’s records name as having played for Sutton Coldfield and also played first-class or List A cricket: {p.fc.teams}, {p.fc.years}.
                      </p>
                      {d >= 1840 && d <= 2020 && <Link to={`/decades/${d}`} className={`${ui} inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#8B1538] hover:text-[#6B0F2A]`}>The club in the {d}s<ArrowRight className="w-4 h-4" /></Link>}
                    </section>
                  );
                })()}

                {p.fcStory && (
                  <section className="mt-8 bg-[#f8f6f3] rounded-md p-5 md:p-7">
                    <p className={`${ui} text-xs font-bold uppercase tracking-[0.14em] text-[#5d5658] mb-3`}>From the club’s records</p>
                    {p.fcStory.image && (
                      <figure className="mb-5">
                        <img src={p.fcStory.image} alt={p.fcStory.imageCaption || p.name} loading="lazy" className="w-full max-h-[420px] object-contain bg-[#efe9df] rounded-sm" />
                        {p.fcStory.imageCaption && <figcaption className={`${serif} text-sm text-[#5d5658] mt-2`}>{p.fcStory.imageCaption}</figcaption>}
                      </figure>
                    )}
                    {p.fcStory.paragraphs.map((t, i) => <p key={i} className={`${serif} text-lg leading-relaxed text-[#2a2526] mb-4 last:mb-0`}>{t}</p>)}
                  </section>
                )}

                {parts.decades.length >= 3 && (
                  <nav aria-label="Jump to a decade" className={`${ui} flex flex-wrap items-center gap-2 mt-6`}>
                    <span className="text-sm text-[#5d5658] mr-1">Jump to</span>
                    {parts.decades.map(([d]) => (
                      <button key={d} onClick={() => jump(`sheet-${d}`)} className="px-3 py-1 rounded-full border border-[#d9cfc2] text-sm font-semibold hover:border-[#8B1538] hover:text-[#8B1538] transition-colors">{d}s</button>
                    ))}
                  </nav>
                )}

                {parts.own.length > 0 && (
                  <div className="mt-8 space-y-6 [&_p]:text-xl [&_p]:leading-relaxed [&_p]:text-[#2a2526]">
                    {parts.own.map((e) => <StoryBody key={e.id} e={e} data={data} words={[]} self={p} />)}
                  </div>
                )}

                {parts.decades.map(([d, ys]) => (
                  <section key={d} id={`sheet-${d}`} className="mt-12 scroll-mt-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-[#1a472a] pb-2 mb-2">
                      <h3 className={`${display} text-3xl md:text-4xl text-[#1a472a]`}>The {d}s</h3>
                      {d >= 1840 && <Link to={`/decades/${d}`} className={`${ui} inline-flex items-center gap-2 text-sm font-semibold text-[#8B1538] hover:text-[#6B0F2A]`}>The club in the {d}s<ArrowRight className="w-4 h-4" /></Link>}
                    </div>
                    {[...ys].map(([y, es]) => (
                      <div key={y} className="grid md:grid-cols-[90px_minmax(0,1fr)] gap-1 md:gap-6 py-6 border-b border-[#e7e0d6] last:border-b-0">
                        <p className={`${display} text-2xl text-[#8B1538] tabular-nums`}>{y}</p>
                        <div className="space-y-8 min-w-0">
                          {es.map((e) => (
                            <article key={e.id}>
                              {topicOf(e.heading) && <h4 className={`${ui} font-bold text-lg text-[#1d1a1b] mb-2`}>{e.heading}</h4>}
                              <StoryBody e={e} data={data} words={[]} self={p} />
                            </article>
                          ))}
                        </div>
                      </div>
                    ))}
                  </section>
                ))}

                {parts.inOthers.length > 0 && (
                  <section className="mt-12">
                    <h3 className={`${display} text-2xl md:text-3xl text-[#1a472a] border-b-2 border-[#1a472a] pb-2 mb-4`}>In other members’ profiles</h3>
                    <div className="space-y-8">
                      {parts.inOthers.map((e) => {
                        const who = subjectOf(e);
                        return (
                          <article key={e.id}>
                            <h4 className={`${ui} font-bold text-lg mb-2`}>
                              {who ? <>From <MemberLink p={who} className="inline text-[#8B1538] hover:underline !w-auto">{who.name}</MemberLink>’s profile</> : e.heading}
                            </h4>
                            <StoryBody e={e} data={data} words={[]} self={p} />
                          </article>
                        );
                      })}
                    </div>
                  </section>
                )}

                {parts.undated.length > 0 && (
                  <section className="mt-12">
                    <h3 className={`${display} text-2xl md:text-3xl text-[#1a472a] border-b-2 border-[#1a472a] pb-2 mb-4`}>No year given</h3>
                    <div className="space-y-8">
                      {parts.undated.map((e) => <article key={e.id}>{topicOf(e.heading) && <h4 className={`${ui} font-bold text-lg mb-2`}>{e.heading}</h4>}<StoryBody e={e} data={data} words={[]} self={p} /></article>)}
                    </div>
                  </section>
                )}

                {p.photos.length > 0 && (
                  <section className="mt-12">
                    <h3 className={`${display} text-2xl md:text-3xl text-[#1a472a] border-b-2 border-[#1a472a] pb-2 mb-5`}>In the team photographs</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {p.photos.map((ph) => (
                        <button key={ph.title + ph.year} onClick={() => setViewing(ph)} className="text-left group">
                          <img src={ph.image} alt={ph.title} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm group-hover:opacity-90 transition" />
                          <span className={`${ui} block font-bold mt-2`}>{ph.title}</span>
                          <span className={`${ui} block text-sm text-[#5d5658]`}>Click to enlarge</span>
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                <div className="mt-14 pb-12 flex flex-col md:flex-row gap-4">
                  <button onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white hover:bg-[#8B1538] text-[#8B1538] hover:text-white border-2 border-[#8B1538] px-6 md:px-10 py-3 md:py-4 font-['Helvetica',sans-serif] font-semibold text-base md:text-lg transition-colors w-full md:w-auto">
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />Back to Club Members
                  </button>
                  <button onClick={() => onStep(1)}
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#8B1538] hover:bg-[#6d0f2a] text-white px-6 md:px-10 py-3 md:py-4 font-['Helvetica',sans-serif] font-semibold text-base md:text-lg transition-colors w-full md:w-auto">
                    Next member<ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function MembersIndex({ data, sheetOpen = false }: { data: Data; sheetOpen?: boolean }) {
  const [q, setQ] = useState("");
  const [dec, setDecState] = useState<number | null>(null);
  const [shown, setShown] = useState(40);
  const [applied, setApplied] = useState("");
  const [kind, setKindState] = useState<ScoreKind | null>(null);
  const [open, setOpen] = useState<false | string>(false);
  const [active, setActive] = useState(-1);
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);
  const typed = useMemo(() => q.trim().toLowerCase().split(/\s+/).filter((w) => w.length > 1), [q]);
  const words = useMemo(() => applied.trim().toLowerCase().split(/\s+/).filter((w) => w.length > 1), [applied]);
  const setDec = (d: number | null) => { setDecState(d); setShown(40); requestAnimationFrame(() => document.getElementById("members-results")?.scrollIntoView({ behavior: "smooth", block: "start" })); };
  const inDec = (p: Person) => dec === null || (p.first !== null && p.first <= dec + 9 && p.last! >= dec);
  const entryInDec = (e: Entry) => dec === null || (e.year !== null && e.year >= dec && e.year <= dec + 9);
  const decLabel = dec === null ? "" : ` in the ${dec}s`;
  const setKind = (k: ScoreKind | null) => { setKindState(k); setApplied(""); setShown(40); requestAnimationFrame(() => document.getElementById("members-results")?.scrollIntoView({ behavior: "smooth", block: "start" })); };

  const res = useMemo(() => {
    if (words.length) {
      const res = words.map(wordStart);
      const q = tokens(words.join(" "));
      const named = data.people.map((p) => [p, nameScore(p, q)] as const).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]).map(([p]) => p);
      const stories = data.entries.filter((e) => entryInDec(e) && res.every((r) => r.test(e.heading + " " + e.paras.join(" "))));
      return { named, here: named.filter(inDec), elsewhere: named.filter((p) => !inDec(p)), stories };
    }
    const list = data.people.filter((p) => inDec(p) && (!kind || !!p.scores[kind]));
    const club = dec === null ? [] : data.entries.filter((e) => entryInDec(e) && e.year && !(data.peopleOf.get(e.id) || []).length);
    return { list, club };
  }, [words, dec, data, kind]);

  const suggestions = useMemo(() => {
    if (!typed.length) return [];
    const t = tokens(typed.join(" "));
    return data.people.map((p) => [p, nameScore(p, t)] as const).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([p]) => p);
  }, [typed, data]);
  const typedStories = useMemo(() => {
    if (!typed.length) return 0;
    const r = typed.map(wordStart);
    return data.entries.filter((e) => entryInDec(e) && r.every((x) => x.test(e.heading + " " + e.paras.join(" ")))).length;
  }, [typed, dec, data]);
  const opener = useContext(OpenCtx);
  const heroControls = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);
  useEffect(() => {
    const el = heroControls.current; if (!el) return;
    const io = new IntersectionObserver(([en]) => setDocked(!en.isIntersecting && en.boundingClientRect.top < 0), { rootMargin: "-73px 0px 0px 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  const controls = (dock: boolean) => {
    const where = dock ? "dock" : "hero";
    return (
            <div ref={dock ? undefined : heroControls} className={dock ? "grid grid-cols-2 sm:flex gap-2 relative" : "max-w-4xl flex flex-col sm:flex-row gap-3 relative z-30"}>
            <div className={`relative flex-1 min-w-0 ${dock ? "col-span-2" : ""}`}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false); }}>
              <Search className={dock ? "absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B1538]" : "absolute left-5 top-[30px] md:top-[34px] -translate-y-1/2 w-6 h-6 text-[#8B1538]"} aria-hidden="true" />
              <input id={dock ? "member-search-dock" : "member-search"} aria-label="Find a member, or search the history" type="search" value={q} autoComplete="off" role="combobox"
                aria-expanded={open === where && suggestions.length > 0} aria-controls={`member-suggestions-${where}`}
                aria-activedescendant={active >= 0 ? `sugg-${where}-${active}` : undefined}
                onFocus={() => setOpen(where)}
                onChange={(e) => { setQ(e.target.value); if (!e.target.value.trim()) setApplied(""); setShown(40); setOpen(where); setActive(-1); }}
                onKeyDown={(e) => {
                  const n = suggestions.length + 1;
                  if (e.key === "ArrowDown") { e.preventDefault(); setOpen(where); setActive((a) => (a + 1) % n); }
                  else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a <= 0 ? n - 1 : a - 1)); }
                  else if (e.key === "Escape") { setOpen(false); setActive(-1); }
                  else if (e.key === "Enter") {
                    e.preventDefault();
                    if (active >= 0 && active < suggestions.length) { const s = suggestions[active]; setOpen(false); if (opener && isSmall(s)) opener.open(s); else navigate(`/members/${s.id}`); }
                    else showAll();
                  }
                }}
                placeholder="Find a member, or search the history"
                className={`${ui} w-full rounded-md bg-white text-[#1d1a1b] placeholder:text-[#7a7072] focus:outline-none focus:ring-4 focus:ring-[#f3dd8c] [&::-webkit-search-cancel-button]:hidden ${dock ? "text-base pl-11 pr-10 py-2.5 border border-[#d9cfc2]" : "text-lg md:text-xl pl-14 pr-12 py-4 md:py-5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)]"}`} />
              {q && <button onClick={() => { setQ(""); setApplied(""); setActive(-1); }} aria-label="Clear the search" className={`absolute -translate-y-1/2 p-1 text-[#5d5658] hover:text-[#8B1538] ${dock ? "right-2.5 top-1/2" : "right-4 top-[30px] md:top-[34px]"}`}><X className="w-5 h-5" /></button>}
              {open === where && typed.length > 0 && (
                <ul id={`member-suggestions-${where}`} role="listbox" className="absolute left-0 right-0 top-full mt-2 bg-white rounded-md overflow-hidden shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)] border border-[#e7e0d6]">
                  {suggestions.map((p, i) => (
                    <li key={p.id} id={`sugg-${where}-${i}`} role="option" aria-selected={active === i}>
                      <MemberLink p={p} className={`grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-baseline px-5 py-3 border-b border-[#f0ebe3] ${active === i ? "bg-[#f6e9ed]" : "hover:bg-[#f8f6f3]"}`}>
                        <span className="min-w-0">
                          <span className={`${display} text-[#8B1538] text-lg block truncate`}>{p.name}</span>
                          <span className={`${ui} text-sm text-[#5d5658]`}>{p.stories.length} {p.stories.length === 1 ? "story" : "stories"}{p.profile.length ? " · profile" : ""}{p.photos.length ? ` · in ${p.photos.length} team ${p.photos.length === 1 ? "photo" : "photos"}` : ""}</span>
                        </span>
                        <span className={`${ui} font-bold tabular-nums text-[#1d1a1b]`}>{yearsOf(p)}</span>
                      </MemberLink>
                    </li>
                  ))}
                  {suggestions.length === 0 && <li className={`${ui} px-5 py-3 text-[#5d5658]`}>No member by that name.</li>}
                  <li id={`sugg-${where}-${suggestions.length}`} role="option" aria-selected={active === suggestions.length}>
                    <button onMouseDown={(e) => e.preventDefault()} onClick={showAll}
                      className={`${ui} w-full text-left px-5 py-3.5 font-semibold text-[#1a472a] flex items-center gap-2 ${active === suggestions.length ? "bg-[#e6eee8]" : "hover:bg-[#f8f6f3]"}`}>
                      <Search className="w-4 h-4" aria-hidden="true" />Search all of Peter’s history for “{q.trim()}” ({typedStories} {typedStories === 1 ? "story" : "stories"})
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div className={dock ? "relative sm:w-[150px] shrink-0" : "relative sm:w-[170px] shrink-0"}>
              <label htmlFor={dock ? "member-decade-dock" : "member-decade"} className="sr-only">Decade</label>
              <select id={dock ? "member-decade-dock" : "member-decade"} value={dec ?? ""} onChange={(e) => setDec(e.target.value ? Number(e.target.value) : null)}
                className={`${ui} appearance-none w-full h-full font-semibold rounded-md bg-white text-[#1d1a1b] focus:outline-none focus:ring-4 focus:ring-[#f3dd8c] cursor-pointer ${dock ? "text-base pl-3.5 pr-9 py-2.5 border border-[#d9cfc2]" : "text-lg pl-5 pr-11 py-4 md:py-5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)]"}`}>
                <option value="">All years</option>
                {DECADES.filter((d) => data.people.some((p) => p.first !== null && p.first <= d + 9 && p.last! >= d)).map((d) => <option key={d} value={d}>{d}s</option>)}
              </select>
              <ChevronDown className={`absolute ${dock ? "right-3" : "right-4"} top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B1538] pointer-events-none`} aria-hidden="true" />
            </div>
            <div className={dock ? "relative sm:w-[200px] shrink-0" : "relative sm:w-[230px] shrink-0"}>
              <label htmlFor={dock ? "member-scores-dock" : "member-scores"} className="sr-only">Scores</label>
              <select id={dock ? "member-scores-dock" : "member-scores"} value={kind ?? ""} onChange={(e) => setKind((e.target.value || null) as ScoreKind | null)}
                className={`${ui} appearance-none w-full h-full font-semibold rounded-md bg-white text-[#1d1a1b] focus:outline-none focus:ring-4 focus:ring-[#f3dd8c] cursor-pointer ${dock ? "text-base pl-3.5 pr-9 py-2.5 border border-[#d9cfc2]" : "text-lg pl-5 pr-11 py-4 md:py-5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)]"}`}>
                <option value="">All scores</option>
                {SCORE_KINDS.map(([k, label]) => <option key={k} value={k}>{label}</option>)}
              </select>
              <ChevronDown className={`absolute ${dock ? "right-3" : "right-4"} top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B1538] pointer-events-none`} aria-hidden="true" />
            </div>
            </div>
    );
  };
  const showAll = () => { setApplied(q); setOpen(false); setActive(-1); requestAnimationFrame(() => document.getElementById("members-results")?.scrollIntoView({ behavior: "smooth", block: "start" })); };

  const groups = useMemo(() => {
    if (!("list" in res) || !res.list) return [];
    const m = new Map<string, Person[]>();
    res.list.forEach((p) => m.set(p.letter, [...(m.get(p.letter) || []), p]));
    return [...m];
  }, [res]);

  return (
    <>
      {/* The slim search bar that stays at the top once the big one has scrolled away */}
      {!sheetOpen && <div aria-hidden={!docked} className={`fixed top-[73px] inset-x-0 z-[45] bg-white shadow-[0_14px_24px_-16px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-300 ${docked ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-1 pb-2">{docked && controls(true)}</div>
        {docked && "list" in res && res.list && (
          <nav aria-label="Jump to a letter" className="max-w-6xl mx-auto px-2 sm:px-4 pb-1.5 flex gap-0.5 overflow-x-auto">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => {
              const has = groups.some(([k]) => k === l);
              return <button key={l} disabled={!has} onClick={() => document.getElementById(`letter-${l}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className={`${ui} shrink-0 w-8 h-8 rounded font-bold text-[15px] ${has ? "text-[#8B1538] hover:bg-[#f6e9ed]" : "text-[#d9cfc2] cursor-default"}`}>{l}</button>;
            })}
          </nav>
        )}
      </div>}

      {/* Hero */}
      <section className="relative min-h-[560px] md:min-h-[680px] mt-[73px] flex">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-[#1c1c1c]" style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center 35%" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[90px] md:h-[150px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180"><path d="M0 180H1920V0L0 180Z" fill="white" /></svg>
        </div>
        <div className="relative w-full flex flex-col justify-end pb-28 md:pb-40 px-6">
          <div className="max-w-6xl mx-auto w-full">
              <p className={`${serif} text-lg md:text-xl text-white/90 mb-2`}>From Peter Bell’s history of the club, 1837–2015</p>
              <h1 className={`${display} text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none`}>Club Members</h1>
              <p className={`${serif} text-xl md:text-2xl text-white/95 max-w-3xl mb-8`}>
                Captains and groundsmen, umpires and tea ladies, county players and Test cricketers: {data.people.length} people from the club’s story, and what Peter wrote about each of them.
              </p>
            <label htmlFor="member-search" className="sr-only">Find a member, or any word in the history</label>
            {controls(false)}
          </div>
        </div>
      </section>


      {/* Results */}
      <section id="members-results" className="bg-white pb-20 scroll-mt-[136px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`${ui} flex flex-wrap items-baseline justify-between gap-3 py-4 border-b-2 border-[#1d1a1b]`}>
            <h2 className={`${display} text-2xl md:text-4xl text-[#1d1a1b]`}>
              {words.length ? <>Results for “{applied.trim()}”{decLabel}</> : kind ? <>{SCORE_KINDS.find(([k]) => k === kind)![2]}{decLabel}</> : dec === null ? "All members, A to Z" : <>Members in the {dec}s</>}
            </h2>
            {kind && !words.length && <button onClick={() => setKind(null)} className="inline-flex items-center gap-1.5 text-[#8B1538] font-semibold hover:underline"><X className="w-4 h-4" />All members</button>}
            {dec !== null && <button onClick={() => setDecState(null)} className="inline-flex items-center gap-1.5 text-[#8B1538] font-semibold hover:underline"><X className="w-4 h-4" />Show all years</button>}
          </div>

          {"list" in res && res.list && (
            <>
              <nav aria-label="Letters" className="border-b border-[#e7e0d6] -mx-6 px-6 py-2 flex gap-1 overflow-x-auto">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => {
                  const has = groups.some(([k]) => k === l);
                  return <button key={l} disabled={!has} onClick={() => document.getElementById(`letter-${l}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className={`${ui} shrink-0 w-8 h-9 rounded font-bold ${has ? "text-[#8B1538] hover:bg-[#f6e9ed]" : "text-[#d9cfc2] cursor-default"}`}>{l}</button>;
                })}
              </nav>
              <p className={`${ui} text-[#5d5658] mt-4`}>{res.list.length} members{decLabel}{kind ? ` · ${SCORE_KINDS.find(([k]) => k === kind)![1].toLowerCase()} from Peter’s history` : ""}{res.club && res.club.length > 0 && <> · <a href="#club-notes" className="text-[#8B1538] font-semibold hover:underline">{res.club.length} club stories from the {dec}s ↓</a></>}</p>
              {groups.map(([letter, ps]) => (
                <section key={letter} id={`letter-${letter}`} className="scroll-mt-[190px] pt-8">
                  <h3 className={`${display} text-5xl md:text-6xl text-[#1a472a] leading-none mb-2`}>{letter}</h3>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-3">{ps.map((p) => <MemberRow key={p.id} p={p} words={[]} kind={kind} />)}</ul>
                </section>
              ))}
            </>
          )}

          {"named" in res && res.named && (
            <div className="pt-6">
              {res.here.length > 0 && <>
                <h3 className={`${ui} text-sm font-bold uppercase tracking-[0.14em] text-[#5d5658] mt-4`}>{dec === null ? "Members" : `Members${decLabel}`}</h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-3">{res.here.map((p) => <MemberRow key={p.id} p={p} words={words} />)}</ul>
              </>}
              {res.elsewhere.length > 0 && <>
                <h3 className={`${ui} text-sm font-bold uppercase tracking-[0.14em] text-[#5d5658] mt-8`}>{res.here.length ? "In other years" : `Not in the ${dec}s. In other years:`}</h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-3">{res.elsewhere.map((p) => <MemberRow key={p.id} p={p} words={words} />)}</ul>
              </>}
              {res.stories.length > 0 && <>
                <h3 className={`${ui} text-sm font-bold uppercase tracking-[0.14em] text-[#5d5658] mt-10`}>{res.stories.length} {res.stories.length === 1 ? "story mentions" : "stories mention"} “{applied.trim()}”{decLabel}</h3>
                <ul>{res.stories.slice(0, shown).map((e) => <StoryItem key={e.id} e={e} data={data} words={words} />)}</ul>
                {res.stories.length > shown && <button onClick={() => setShown(shown + 40)} className={`${ui} mt-6 px-5 py-3 rounded-md border border-[#d9cfc2] font-semibold hover:border-[#8B1538] hover:text-[#8B1538]`}>Show more stories ({res.stories.length - shown} left)</button>}
              </>}
              {!res.named.length && !res.stories.length && (
                <div className={`${ui} py-16 text-center text-[#5d5658]`}>
                  <p className="text-lg">Nothing found for “{applied.trim()}”{decLabel}.</p>
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
          <section id="club-notes" className="bg-[#f8f6f3] py-14 md:py-20 -mt-px scroll-mt-[136px]">
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

/* ---------- the page ---------- */

export default function ClubMembers({ view = "all" }: { view?: "all" | "fc" }) {
  const [data, setData] = useState<Data | null>(null);
  const [failed, setFailed] = useState(false);
  const [sheet, setSheet] = useState<{ id: string; base: string } | null>(null);
  const navigate = useNavigate();
  const winPath = appPath(window.location.pathname);
  const routePath = sheet ? sheet.base : winPath;
  const id = routePath.startsWith("/members/") ? routePath.slice("/members/".length) : null;

  useEffect(() => { loadData().then(setData).catch(() => setFailed(true)); }, []);
  // The old First-Class Cricketers address now opens Club Members, where those players are listed with everyone.
  useEffect(() => { if (view === "fc") try { window.history.replaceState(null, "", href("/members")); } catch { /* address bar only */ } }, [view]);
  // A short member's own address opens the list with their pop-up showing.
  useEffect(() => {
    const p = data && id ? data.byId.get(id) : null;
    if (p && isSmall(p) && !sheet) setSheet({ id: p.id, base: "/members" });
  }, [data]);
  useEffect(() => { const back = () => setSheet(null); window.addEventListener("popstate", back); return () => window.removeEventListener("popstate", back); }, []);

  const person = id && data ? data.byId.get(id) : null;
  const sheetPerson = sheet && data ? data.byId.get(sheet.id) ?? null : null;
  useEffect(() => {
    const p = sheetPerson || person;
    document.title = p ? `${p.name} · Club Members · Sutton Coldfield Cricket Club` : "Club Members · Sutton Coldfield Cricket Club";
  }, [sheetPerson, person]);

  const opener: Opener = {
    open: (p) => { setSheet((s) => ({ id: p.id, base: s ? s.base : winPath })); window.history.replaceState({}, "", href(`/members/${p.id}`)); },
    go: (p) => { setSheet(null); navigate(`/members/${p.id}`); },
  };
  const close = () => { if (sheet) window.history.replaceState({}, "", href(sheet.base)); setSheet(null); };
  const step = (dir: -1 | 1) => {
    if (!data || !sheetPerson) return;
    const all = data.people;
    const i = all.indexOf(sheetPerson);
    opener.open(all[(i + dir + all.length) % all.length]);
  };

  return (
    <OpenCtx.Provider value={opener}>
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
      {data && (!id || person) && <MembersIndex data={data} sheetOpen={!!sheetPerson} />}
      {data && <MemberSheet p={sheetPerson} data={data} onClose={close} onStep={step} />}
      <Footer />
    </div>
    </OpenCtx.Provider>
  );
}
