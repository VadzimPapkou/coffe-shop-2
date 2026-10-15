"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

const ROASTS = [
  {
    id: "antidote",
    name: "The Antidote",
    rank: 1,
    meta: "Med / Dark · Robust · Caramel · Chocolate",
    img: "/assets/antidote.png",
    price: "From $12",
  },
  {
    id: "armageddon",
    name: "Armageddon",
    rank: 2,
    meta: "Medium · Rich · Robust · Dark Chocolate",
    img: "/assets/armageddon.png",
    price: "From $12",
  },
  {
    id: "uprising",
    name: "The Uprising",
    rank: 3,
    meta: "Medium · Bold · Bright · Citrus",
    img: "/assets/the-uprising.png",
    price: "From $12",
  },
  {
    id: "wanderer",
    name: "The Wanderer",
    rank: 4,
    meta: "Light · Floral · Honey · Tea-like",
    img: "/assets/the-wanderer.png",
    price: "From $12",
  },
  {
    id: "antimatter",
    name: "Anti-Matter",
    rank: 5,
    meta: "Dark · Smooth · Dark Choc. · Vanilla",
    img: "/assets/anti-matter.png",
    price: "From $12",
  },
];

const CHIPS = [
  { label: "Certified Organic", dot: "bg-green" },
  { label: "Small-batch", dot: "bg-ac" },
  { label: "Roasted in Melbourne, FL", dot: "bg-ink" },
];

const BEANS = [
  { src: "/assets/bean1.png", shadow: "#3aaae0", className: "left-[8%] bottom-[22%] w-14 sm:w-16", rot: "-18deg" },
  { src: "/assets/bean2.png", shadow: "#30a050", className: "left-[28%] bottom-[14%] w-16 sm:w-20", rot: "12deg" },
  { src: "/assets/bean3.png", shadow: "#9673b1", className: "right-[42%] bottom-[18%] w-12 sm:w-14", rot: "25deg" },
  { src: "/assets/bean1.png", shadow: "#e06d2d", className: "right-[48%] bottom-[8%] w-10 sm:w-12", rot: "-8deg" },
];

function TornEdge({ fill }: { fill: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 132"
      preserveAspectRatio="none"
      className="torn-edge"
      overflow="visible"
    >
      <g transform="rotate(180 600 66)" fill={fill}>
        <path d="M0 132 L0 58 Q22 63 31 59 Q40 55 54 63 Q68 71 80 66.5 Q92 62 106 70 Q120 78 135 74 Q150 70 166 68 Q182 66 196 70.5 Q210 75 225 71 Q240 67 253 73.5 Q266 80 279 69.5 Q292 59 306 56 Q320 53 336 57.5 Q352 62 366 55 Q380 48 395 51 Q410 54 424 48.5 Q438 43 452 52 Q466 61 480 55 Q494 49 510 54 Q526 59 540 52 Q554 45 570 50 Q586 55 600 48 Q614 41 630 47 Q646 53 660 46 Q674 39 690 45 Q706 51 720 44 Q734 37 750 43 Q766 49 780 42 Q794 35 810 41 Q826 47 840 40 Q854 33 870 39 Q886 45 900 38 Q914 31 930 37 Q946 43 960 36 Q974 29 990 35 Q1006 41 1020 34 Q1034 27 1050 33 Q1066 39 1080 32 Q1094 25 1110 31 Q1126 37 1140 30 Q1154 23 1170 29 Q1186 35 1200 28 L1200 132 Z" />
      </g>
    </svg>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const n = ROASTS.length;
  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  const left = ROASTS[(index - 1 + n) % n];
  const center = ROASTS[index];
  const right = ROASTS[(index + 1) % n];

  return (
    <section className="hero relative overflow-hidden bg-cream pt-20 sm:pt-24">
      {/* soft diagonal orange sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 38%, rgba(224,109,45,0.28) 52%, rgba(224,109,45,0.18) 68%, transparent 82%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-5 pb-8 lg:grid-cols-2 lg:gap-6 lg:px-8 xl:px-12">
        {/* Copy */}
        <div className="relative z-10 max-w-xl pt-2 lg:pt-6">
          <div className="hero__chips mb-6 flex flex-wrap gap-2.5">
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="chip font-mono inline-flex items-center gap-2 rounded-full border border-ink bg-cream px-3.5 py-[7px] text-[11px] uppercase tracking-[0.04em] text-ink"
              >
                <span className={`chip__dot h-2 w-2 rounded-full ${chip.dot}`} />
                {chip.label}
              </span>
            ))}
          </div>

          <h1 className="font-display mb-5 text-[clamp(52px,8vw,95px)] leading-[0.92] text-ink">
            <span className="font-script block text-[clamp(42px,6.5vw,78px)] leading-[0.95] text-ac">
              It&apos;s the end…
            </span>
            <span>of bad coffee.</span>
          </h1>

          <p className="font-mono mb-8 max-w-[540px] text-[15px] leading-[1.65] text-paper-mut sm:text-base">
            Roasted for the ones who don&apos;t follow the herd. We&apos;re putting an end
            to burnt corporate coffee and pretentious coffee culture, with organic,
            small-batch coffee roasted with precision, without the ego, the jargon, or
            the cover-up. It&apos;s time to wake up to something better.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-[16px] border-[2.5px] border-ink bg-ac px-7 py-3.5 font-display text-[17px] tracking-[0.06em] text-cream hard-shadow transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_#000]"
            >
              Shop Coffee
            </a>
            <a
              href="#cafes"
              className="font-body text-[15px] font-semibold uppercase tracking-[0.04em] text-ink underline decoration-2 underline-offset-4"
            >
              Visit Our Cafes →
            </a>
          </div>
        </div>

        {/* Roast stage */}
        <div className="relative z-10 mx-auto w-full max-w-[640px] select-none lg:max-w-none">
          <div className="relative flex h-[340px] items-end justify-center sm:h-[420px] lg:h-[520px]">
            <button
              type="button"
              aria-label="Previous roast"
              onClick={prev}
              className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink/20 bg-cream/80 text-ink backdrop-blur-sm transition hover:border-ink"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next roast"
              onClick={next}
              className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink/20 bg-cream/80 text-ink backdrop-blur-sm transition hover:border-ink"
            >
              ›
            </button>

            <Image
              src={left.img}
              alt={left.name}
              width={200}
              height={380}
              className="absolute bottom-6 left-[8%] w-[28%] max-w-[180px] scale-90 opacity-55 brightness-[0.85] transition-all duration-500"
            />
            <Image
              src={center.img}
              alt={center.name}
              width={320}
              height={600}
              priority
              className="relative z-10 w-[46%] max-w-[280px] drop-shadow-[0_28px_40px_rgba(0,0,0,0.35)] transition-all duration-500"
            />
            <Image
              src={right.img}
              alt={right.name}
              width={200}
              height={380}
              className="absolute bottom-6 right-[8%] w-[28%] max-w-[180px] scale-90 opacity-55 brightness-[0.85] transition-all duration-500"
            />
          </div>

          <div className="mt-2 flex flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-sm text-cream">
                #{center.rank}
              </span>
              <h2 className="font-display text-[clamp(28px,3vw,40px)] leading-none text-ink">
                {center.name}
              </h2>
            </div>
            <div className="font-mono flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] text-paper-mut sm:text-[13px]">
              <span>{center.meta}</span>
              <a href="#shop" className="font-semibold uppercase text-ink underline underline-offset-2">
                {center.price} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating beans */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden>
        {BEANS.map((bean, i) => (
          <div
            key={i}
            className={`bean absolute ${bean.className}`}
            style={
              {
                "--rot": bean.rot,
                filter: `drop-shadow(6px 8px 0 ${bean.shadow})`,
              } as CSSProperties
            }
          >
            <Image src={bean.src} alt="" width={80} height={80} className="h-auto w-full" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-4">
        <TornEdge fill="#141414" />
      </div>
    </section>
  );
}
