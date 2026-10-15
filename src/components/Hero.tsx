"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { WobbleButton } from "./WobbleButton";
import { TornEdge } from "./TornEdge";

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

export function Hero() {
  const [index, setIndex] = useState(0);
  const n = ROASTS.length;
  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  const left = ROASTS[(index - 1 + n) % n];
  const center = ROASTS[index];
  const right = ROASTS[(index + 1) % n];

  return (
    <section className="hero relative overflow-hidden bg-cream pb-[72px] pt-20 sm:pb-[88px] sm:pt-24">
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
            <WobbleButton href="#shop">Shop Coffee</WobbleButton>
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

      <TornEdge fill="#141414" position="bottom" />
    </section>
  );
}
