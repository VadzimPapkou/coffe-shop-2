import { TornEdge } from "./TornEdge";

const VALUES = [
  {
    title: "Партии по 5 кг",
    desc: "Обжариваем небольшими партиями — так проще попасть в профиль и не держать зерно на складе.",
    icon: "/icons/small-batch-roasted.svg",
  },
  {
    title: "1–3 дня до вас",
    desc: "Четверг — обжарка, пятница — развоз по Минску. Свежесть — главное, что мы продаём.",
    icon: "/icons/precision-roasted.svg",
  },
  {
    title: "Аня и Дмитрий",
    desc: "Основатели раньше работали бариста. С 2019 ведут мастерскую сами.",
    icon: "/icons/family-owned.svg",
  },
  {
    title: "Подписка",
    desc: "Две пачки по 250 г раз в месяц, доставка бесплатно — 54 BYN.",
    icon: "/icons/certified-organic.svg",
  },
  {
    title: "Доставка и самовывоз",
    desc: "Пятница по Минску, от 50 BYN бесплатно. Или заберите на Короля, 9.",
    icon: "/icons/eco-friendly.svg",
  },
  {
    title: "Без пафоса",
    desc: "Тёплый простой кофе для дома и офиса. Без глянца и лишних слов.",
    icon: "/icons/fair-trade.svg",
  },
];

export function WhyApocalypse() {
  return (
    <section className="vp relative bg-d0 pb-20 pt-16 text-cream sm:pb-28 sm:pt-20">
      <TornEdge fill="#141414" position="top" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <div className="section-label justify-center mb-3">Почему Кварта</div>
          <h2 className="section-title text-[clamp(40px,4.8vw,72px)] leading-none">
            Что важно знать
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
