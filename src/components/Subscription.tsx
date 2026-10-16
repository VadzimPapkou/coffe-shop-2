import { TornEdge } from "./TornEdge";
import { WobbleButton } from "./WobbleButton";

const PERKS = [
  "Две пачки по 250 г каждый месяц",
  "Доставка по Минску бесплатно",
];

export function Subscription() {
  return (
    <section
      id="subscription"
      className="relative bg-[#141210] pb-20 pt-24 text-cream sm:pb-28 sm:pt-28"
    >
      <TornEdge fill="#1c1916" position="top" />

      <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div className="section-label mb-3">Подписка</div>
          <h2 className="section-title text-[clamp(36px,4.8vw,64px)] leading-[1.05]">
            Кофе каждый месяц
          </h2>
          <p className="font-mono mt-5 max-w-[440px] text-[14px] leading-[1.65] text-cream/45 sm:text-[15px]">
            Не надо каждый раз думать, что заказать. Жарим в четверг — и везём
            свежее зерно по графику.
          </p>

          <ul className="mt-8 flex list-none flex-col gap-3.5 p-0">
            {PERKS.map((perk) => (
              <li
                key={perk}
                className="font-mono flex items-start gap-3 text-[13px] leading-[1.5] text-cream/70 sm:text-[14px]"
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ac"
                />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        {/* Offer panel — like Duncan's subscribe CTA block, soft cream on dark */}
        <aside className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:justify-self-end">
          <div className="relative overflow-hidden rounded-[36px] bg-cream px-8 py-10 text-ink sm:px-10 sm:py-12">
            <p className="font-mono mb-2 text-[12px] uppercase tracking-[0.08em] text-paper-mut">
              Раз в месяц
            </p>
            <p className="font-display flex items-baseline gap-2 leading-none tracking-[0.02em]">
              <span className="text-[clamp(52px,8vw,72px)] text-ink">54</span>
              <span className="text-[22px] text-paper-mut">BYN / мес</span>
            </p>
            <p className="font-mono mt-4 text-[14px] leading-[1.55] text-paper-mut">
              2 × 250 г · доставка бесплатно
            </p>
            <div className="mt-8">
              <WobbleButton href="#contact">Оформить подписку</WobbleButton>
            </div>
            <p className="font-mono mt-5 text-[12px] leading-[1.5] text-paper-soft">
              Оставьте заявку — перезвоним и всё оформим
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
