const VALUES = [
  {
    title: "Certified Organic",
    desc: "Third-party certified beans. Nothing synthetic, ever.",
    icon: "/icons/certified-organic.svg",
  },
  {
    title: "Small-Batch Roasted",
    desc: "Roasted in micro-lots and hand-tuned every morning.",
    icon: "/icons/small-batch-roasted.svg",
  },
  {
    title: "Family Owned",
    desc: "Run by the same family since day one in Melbourne.",
    icon: "/icons/family-owned.svg",
  },
  {
    title: "Fair Trade",
    desc: "Farmers paid fairly for every harvest we buy.",
    icon: "/icons/fair-trade.svg",
  },
  {
    title: "Eco-Friendly",
    desc: "Compostable bags from a carbon-neutral roastery.",
    icon: "/icons/eco-friendly.svg",
  },
  {
    title: "Precision Roasted",
    desc: "Profiled to the degree for a repeatable cup.",
    icon: "/icons/precision-roasted.svg",
  },
];

function TornTop({ fill }: { fill: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 132"
      preserveAspectRatio="none"
      className="torn-edge absolute inset-x-0 top-0 -translate-y-[98%]"
      overflow="visible"
    >
      <g transform="rotate(180 600 66)" fill={fill}>
        <path d="M0 132 L0 58 Q22 63 31 59 Q40 55 54 63 Q68 71 80 66.5 Q92 62 106 70 Q120 78 135 74 Q150 70 166 68 Q182 66 196 70.5 Q210 75 225 71 Q240 67 253 73.5 Q266 80 279 69.5 Q292 59 306 56 Q320 53 336 57.5 Q352 62 366 55 Q380 48 395 51 Q410 54 424 48.5 Q438 43 452 52 Q466 61 480 55 Q494 49 510 54 Q526 59 540 52 Q554 45 570 50 Q586 55 600 48 Q614 41 630 47 Q646 53 660 46 Q674 39 690 45 Q706 51 720 44 Q734 37 750 43 Q766 49 780 42 Q794 35 810 41 Q826 47 840 40 Q854 33 870 39 Q886 45 900 38 Q914 31 930 37 Q946 43 960 36 Q974 29 990 35 Q1006 41 1020 34 Q1034 27 1050 33 Q1066 39 1080 32 Q1094 25 1110 31 Q1126 37 1140 30 Q1154 23 1170 29 Q1186 35 1200 28 L1200 132 Z" />
      </g>
    </svg>
  );
}

export function WhyApocalypse() {
  return (
    <section className="vp relative bg-d0 pb-20 pt-16 text-cream sm:pb-28 sm:pt-20">
      <TornTop fill="#141414" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <div className="section-label justify-center mb-3">Why Apocalypse</div>
          <h2 className="section-title text-[clamp(40px,4.8vw,72px)] leading-none">
            What Sets Us Apart
          </h2>
        </div>

        <div className="vp__grid mx-auto grid max-w-[1240px] grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((item) => (
            <article
              key={item.title}
              className="value-card flex flex-col items-center text-center"
            >
              <div className="value-icon-wrap mb-5 flex h-[72px] items-end justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt=""
                  width={56}
                  height={58}
                  className="h-[58px] w-auto"
                />
              </div>
              <h3 className="font-display mb-2.5 text-[clamp(22px,2vw,29px)] leading-none tracking-[0.03em] text-cream">
                {item.title}
              </h3>
              <p className="font-mono max-w-[280px] text-[14px] leading-[1.55] text-cream/50">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
