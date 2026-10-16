import { TornEdge } from "./TornEdge";

const STEPS = [
  {
    day: "Чт",
    title: "Жарим",
    desc: "Партиями по 5 кг — столько, сколько нужно на неделю",
  },
  {
    day: "Пт",
    title: "Везём",
    desc: "По городу или самовывоз на Короля, 9",
  },
  {
    day: "Сб–Пн",
    title: "Пьёте",
    desc: "Зерно у вас через 1‑3 дня после обжарки",
  },
];

export function WhyApocalypse() {
  return (
    <section className="vp relative bg-d0 pb-20 pt-16 text-cream sm:pb-28 sm:pt-20">
      <TornEdge fill="#141414" position="top" />

      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <div className="section-label mb-3 justify-center">Почему Кварта</div>
          <h2 className="section-title text-[clamp(36px,4.8vw,64px)] leading-[1.05]">
            Свежий кофе{" "}
            просто вкуснее
          </h2>
          <p className="font-mono mx-auto mt-5 max-w-[420px] text-[14px] leading-[1.6] text-cream/45">
            Обжариваем в четверг, в пятницу <br /> развозим по Минску.
          </p>
        </div>

        {/* Horizontal connected process — sparse steps, thin rail, soft dots */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[11px] z-0 hidden h-px bg-cream/15 md:block"
          />

          <ol className="relative z-10 m-0 grid list-none gap-10 p-0 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, i) => (
              <li
                key={step.day}
                className="relative flex gap-4 md:flex-col md:items-center md:text-center"
              >
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[10px] top-[28px] h-[calc(100%+12px)] w-px bg-cream/15 md:hidden"
                  />
                )}

                <span className="relative z-10 flex h-[22px] w-[22px] shrink-0 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-ac/20" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-ac" />
                </span>

                <div className="min-w-0 flex-1 pt-0.5 md:pt-5">
                  <p className="font-script mb-1 text-[28px] leading-none text-ac md:text-[32px]">
                    {step.day}
                  </p>
                  <h3 className="font-display mb-2 text-[22px] tracking-[0.04em] text-cream md:text-[26px]">
                    {step.title}
                  </h3>
                  <p className="font-mono max-w-[280px] text-[13px] leading-[1.55] text-cream/45 md:mx-auto text-balance">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
