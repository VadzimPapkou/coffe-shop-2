"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

export type SusanItem = {
  id: string;
  name: string;
  rank: number;
  meta: string;
  img: string;
  price: string;
};

type DragState = {
  x: number;
  lx: number;
  lt: number;
  v: number;
  dx?: number;
};

function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const bx = (t: number) =>
    3 * x1 * t * (1 - t) * (1 - t) + 3 * x2 * t * t * (1 - t) + t * t * t;
  const by = (t: number) =>
    3 * y1 * t * (1 - t) * (1 - t) + 3 * y2 * t * t * (1 - t) + t * t * t;
  return (x: number) => {
    let lo = 0;
    let hi = 1;
    let t = x;
    for (let i = 0; i < 22; i++) {
      t = (lo + hi) / 2;
      if (bx(t) < x) lo = t;
      else hi = t;
    }
    return by(t);
  };
}

const depthEase = cubicBezier(0.6, 0, 0, 1);
const MOVE = 1500;
const USER_MOVE = 900;
const REST = 3000;
const HOLD = 2500;
const BACK = 0.5;
const ROT_Y = 5;

export function SusanStage({ items }: { items: SusanItem[] }) {
  const n = items.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const bagRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const userSpinRef = useRef<(target: number) => void>(() => {});

  const posRef = useRef(0);
  const frontRef = useRef(-1);
  const rafRef = useRef(0);
  const loopRef = useRef(0);
  const holdRef = useRef(0);
  const dragRef = useRef<DragState | null>(null);
  const draggedRef = useRef(false);
  const hoverRef = useRef(false);
  const onScreenRef = useRef(true);
  const bwRef = useRef(0);
  const xMultRef = useRef(0.55);
  const dropRef = useRef(5);
  const reducedRef = useRef(false);

  const [front, setFront] = useState(0);
  const active = items[front] ?? items[0];

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage || !n) return;

    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const readSpread = () => {
      const cs = getComputedStyle(root);
      const x = parseFloat(cs.getPropertyValue("--susan-x"));
      xMultRef.current = Number.isFinite(x) && x > 0 ? x : 0.55;
      const d = parseFloat(cs.getPropertyValue("--susan-drop"));
      dropRef.current = Number.isFinite(d) ? d : 0;
    };

    const caption = (k: number) => {
      frontRef.current = k;
      setFront(k);
    };

    const render = () => {
      const bags = bagRefs.current;
      if (!bags[0]) return;
      if (!bwRef.current) {
        bwRef.current = bags[0].offsetWidth || 128;
        readSpread();
      }

      const pos = posRef.current;
      const rx = bwRef.current * xMultRef.current;
      const drop = dropRef.current;
      const f = (((Math.round(pos) % n) + n) % n);

      bags.forEach((el, k) => {
        if (!el) return;
        let rel = k - pos;
        rel = ((((rel + n / 2) % n) + n) % n) - n / 2;
        rel = Math.max(-2, Math.min(2, rel));
        const angle = (rel / 2) * Math.PI;
        const depth = (Math.cos(angle) + 1) / 2;
        const x = rel <= -2 || rel >= 2 ? 0 : Math.sin(angle) * rx;
        const s = BACK + (1 - BACK) * depth;
        const op = Math.max(
          0,
          Math.min(1, (Math.min(2, n / 2) - Math.abs(rel)) * 2),
        );
        const y = drop ? drop * Math.max(0, 2 * depth - 1) : 0;
        el.style.transform =
          `translateX(calc(-50% + ${x.toFixed(2)}px))` +
          (drop ? ` translateY(${y.toFixed(2)}px)` : "") +
          ` perspective(1200px) rotateY(${(Math.sin(angle) * -ROT_Y).toFixed(2)}deg) scale(${s.toFixed(4)})`;
        el.style.opacity = op.toFixed(3);
        el.style.zIndex = String(Math.round(1 + 999 * depth));
        el.style.pointerEvents = op > 0.5 ? "auto" : "none";
        el.setAttribute("aria-hidden", k === f ? "false" : "true");
        el.tabIndex = k === f ? 0 : -1;
      });

      if (f !== frontRef.current) caption(f);

      const cap = capRef.current;
      if (cap) {
        const c = Math.max(0, 1 - Math.abs(pos - Math.round(pos)) * 3);
        cap.style.opacity = c.toFixed(3);
        cap.style.transform =
          c < 1 ? `translateY(${((1 - c) * 6).toFixed(1)}px)` : "";
      }
    };

    const spinTo = (
      target: number,
      dur: number,
      ease: (t: number) => number,
      done?: () => void,
    ) => {
      cancelAnimationFrame(rafRef.current);
      const from = posRef.current;
      if (reducedRef.current || from === target) {
        posRef.current = target;
        render();
        done?.();
        return;
      }
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / dur);
        posRef.current = from + (target - from) * ease(t);
        render();
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
        else done?.();
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const scheduleStep = (ms: number) => {
      clearTimeout(loopRef.current);
      loopRef.current = window.setTimeout(step, ms);
    };

    const step = () => {
      clearTimeout(loopRef.current);
      if (
        reducedRef.current ||
        dragRef.current ||
        hoverRef.current ||
        !onScreenRef.current ||
        document.hidden ||
        Date.now() < holdRef.current ||
        !root.offsetWidth
      ) {
        scheduleStep(500);
        return;
      }
      spinTo(Math.round(posRef.current) + 1, MOVE, depthEase, () => {
        scheduleStep(REST);
      });
    };

    const userSpin = (target: number) => {
      holdRef.current = Date.now() + HOLD;
      clearTimeout(loopRef.current);
      spinTo(target, USER_MOVE, depthEase, () => {
        scheduleStep(HOLD);
      });
    };
    userSpinRef.current = userSpin;

    const goTo = (k: number) => {
      const base = Math.round(posRef.current);
      let d = (((k - base) % n) + n) % n;
      if (d > n / 2) d -= n;
      if (d) userSpin(base + d);
    };

    const onHoverEnter = () => {
      hoverRef.current = true;
      clearTimeout(loopRef.current);
    };
    const onHoverLeave = () => {
      hoverRef.current = false;
      if (!dragRef.current) scheduleStep(REST);
    };
    root.addEventListener("pointerenter", onHoverEnter);
    root.addEventListener("pointerleave", onHoverLeave);

    const clickCleanups: (() => void)[] = [];
    bagRefs.current.forEach((el, k) => {
      if (!el) return;
      const handler = (e: MouseEvent) => {
        if (draggedRef.current) {
          e.preventDefault();
          draggedRef.current = false;
          return;
        }
        if (k !== frontRef.current) goTo(k);
      };
      el.addEventListener("click", handler);
      clickCleanups.push(() => el.removeEventListener("click", handler));
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        userSpin(Math.round(posRef.current) - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        userSpin(Math.round(posRef.current) + 1);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as Element).closest("[data-susan-prev],[data-susan-next]"))
        return;
      clearTimeout(loopRef.current);
      draggedRef.current = false;
      dragRef.current = {
        x: e.clientX,
        lx: e.clientX,
        lt: performance.now(),
        v: 0,
      };
      holdRef.current = Date.now() + HOLD;
    };

    const onPointerMove = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (Math.abs(dx) > 6) draggedRef.current = true;
      const now = performance.now();
      if (now > drag.lt) {
        drag.v = (e.clientX - drag.lx) / (now - drag.lt);
        drag.lx = e.clientX;
        drag.lt = now;
      }
      drag.dx = dx;
    };

    const release = (e: PointerEvent) => {
      const g = dragRef.current;
      if (!g) return;
      dragRef.current = null;
      holdRef.current = Date.now() + HOLD;
      const dx = g.dx || 0;
      let dir = 0;
      if (
        draggedRef.current &&
        e.type !== "pointercancel" &&
        (Math.abs(dx) > 30 || Math.abs(g.v) > 0.35)
      ) {
        dir = (dx || -g.v) < 0 ? 1 : -1;
      }
      if (dir) userSpin(Math.round(posRef.current) + dir);
      else scheduleStep(HOLD);
      if (e.type !== "pointerup") draggedRef.current = false;
    };

    stage.addEventListener("keydown", onKeyDown);
    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", release);
    stage.addEventListener("pointercancel", release);
    stage.addEventListener("pointerleave", release);

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver((es) => {
            onScreenRef.current = es[0]?.isIntersecting ?? true;
          })
        : null;
    io?.observe(stage);

    const onResize = () => {
      bwRef.current = 0;
      render();
    };
    window.addEventListener("resize", onResize);

    render();
    scheduleStep(REST);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(loopRef.current);
      clickCleanups.forEach((fn) => fn());
      root.removeEventListener("pointerenter", onHoverEnter);
      root.removeEventListener("pointerleave", onHoverLeave);
      stage.removeEventListener("keydown", onKeyDown);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", release);
      stage.removeEventListener("pointercancel", release);
      stage.removeEventListener("pointerleave", release);
      io?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [n]);

  const spin = (dir: -1 | 1) => {
    userSpinRef.current(Math.round(posRef.current) + dir);
  };

  return (
    <div
      ref={rootRef}
      className="susan relative z-10 mx-auto w-full max-w-[640px] select-none lg:max-w-none"
      data-hero-susan=""
    >
      <div
        ref={stageRef}
        className="susan__stage relative touch-pan-y"
        style={{ height: "calc(var(--bag-w) * 1.911 + 18px)" }}
        data-susan-stage=""
        role="region"
        aria-roledescription="carousel"
        aria-label="Ассортимент"
        tabIndex={0}
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            ref={(el) => {
              bagRefs.current[i] = el;
            }}
            className="susan__bag absolute bottom-1 left-1/2 block w-[var(--bag-w)] origin-[50%_100%] cursor-pointer border-0 bg-transparent p-0 will-change-transform"
            data-susan-item=""
            data-name={item.name}
            data-meta={item.meta}
            data-price={item.price}
            tabIndex={-1}
            aria-label={item.name}
            aria-hidden={i === 0 ? "false" : "true"}
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={item.img}
              alt=""
              height={1000}
              width={200}
              priority={i < 3}
              draggable={false}
              className="pointer-events-none block h-auto w-full select-none"
              sizes="400px"
            />
          </button>
        ))}

        <button
          type="button"
          aria-label="Предыдущий"
          data-susan-prev=""
          onClick={() => spin(-1)}
          className="absolute left-0 z-[1100] grid h-[var(--arrow)] w-[var(--arrow)] place-items-center rounded-[12.8px] bg-[#ddd7cc] text-ink transition-[background,transform] duration-[180ms] hover:bg-[#d2cbbe] active:scale-95"
          style={{
            bottom: "calc(4px + var(--bag-w) * 0.955 - var(--arrow) / 2)",
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            style={{ transform: "scaleX(-1)" }}
          >
            <path
              d="M14 19L21 12L14 5"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M21 12H2"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Следующий"
          data-susan-next=""
          onClick={() => spin(1)}
          className="absolute right-0 z-[1100] grid h-[var(--arrow)] w-[var(--arrow)] place-items-center rounded-[12.8px] bg-[#ddd7cc] text-ink transition-[background,transform] duration-[180ms] hover:bg-[#d2cbbe] active:scale-95"
          style={{
            bottom: "calc(4px + var(--bag-w) * 0.955 - var(--arrow) / 2)",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M14 19L21 12L14 5"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              d="M21 12H2"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <div
        ref={capRef}
        className="mt-2.5 flex flex-col items-center px-10 text-center"
        data-susan-cap=""
      >
        <div className="flex max-w-full items-center justify-center gap-2.5">
          <span
            className="grid h-8 min-w-8 shrink-0 place-items-center rounded-full bg-ink px-2 font-mono text-[13px] font-medium text-cream"
            aria-label={`Позиция ${active.rank}`}
          >
            #{active.rank}
          </span>
          <h2 className="font-display min-w-0 truncate text-[clamp(28px,3vw,44px)] leading-none tracking-[0.01em] text-ink">
            {active.name}
          </h2>
        </div>
        <div className="mt-1.5 flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="font-mono min-w-0 truncate text-[12px] tracking-[-0.01em] text-paper-mut sm:text-[13px]">
            {active.meta}
          </span>
          <span className="font-body inline-flex shrink-0 items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.04em] text-ink sm:text-[13px]">
            {active.price}
          </span>
        </div>
      </div>
    </div>
  );
}
