import { TornEdge } from "./TornEdge";

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

export function WhyApocalypse() {
  return (
    <section className="vp relative bg-d0 pb-20 pt-16 text-cream sm:pb-28 sm:pt-20">
      <TornEdge fill="#141414" position="top" />

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
