"use client";

import { WobbleButton } from "./WobbleButton";
import { TornEdge } from "./TornEdge";
import { SusanStage, type SusanItem } from "./SusanStage";

const ROASTS: SusanItem[] = [
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
          </div>
        </div>

        <SusanStage items={ROASTS} />
      </div>

      <TornEdge fill="#141414" position="bottom" />
    </section>
  );
}
