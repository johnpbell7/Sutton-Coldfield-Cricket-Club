import { useEffect, useRef, useState } from "react";

/**
 * Fade sections in as they are scrolled to, without ever leaving one invisible.
 *
 * The observer on its own is not enough. It reports what is intersecting when
 * it samples, so a fast flick, a jump to an anchor or a restored scroll
 * position can carry a section past the viewport without it ever being seen as
 * intersecting - and because the hidden state is opacity 0, that section stays
 * blank for as long as the page is open.
 *
 * So the observer does the animation, and a scroll pass does the guaranteeing:
 * anything whose top has reached the bottom of the viewport is revealed whether
 * the observer reported it or not. Scrolled past means shown.
 *
 * Call sites keep their own markup; they take the ref callback and ask
 * `visible.has(i)` exactly as before.
 */
export function useReveal(deps: unknown[] = []) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const reveal = (i: number) =>
      setVisible((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));

    // Anyone who has asked not to be animated gets the content, immediately.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(new Set(refs.current.map((_, i) => i)));
      return;
    }

    const sweep = () => {
      const bottom = window.innerHeight;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < bottom) reveal(i);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = refs.current.indexOf(entry.target as HTMLElement);
          if (i !== -1) {
            reveal(i);
            observer.unobserve(entry.target);
          }
        });
      },
      // Start a little before the section arrives, and take any sliver of it.
      { threshold: 0, rootMargin: "0px 0px 10% 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        sweep();
      });
    };

    // Covers the first paint, including a page opened part-way down.
    sweep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { refs, visible };
}
