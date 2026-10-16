import { TornEdge } from "./TornEdge";

const REVIEWS = [
  {
    text: "Заказала Эфиопию — правда цветочная, как писали. Привезли в пятницу, зерно ещё тёплое от обжарки. Теперь на подписке.",
    author: "Катя М.",
  },
  {
    text: "Брали Бразилию под эспрессо в офис. Нормальный вкус, без горечи. Дмитрий перезвонил сам и подсказал помол.",
    author: "Игорь Р.",
  },
  {
    text: "Самовывоз на Короля — быстро. Дрип-пакеты удобно в дорогу, ассорти нормальное.",
    author: "Оля С.",
  },
  {
    text: "Колумбия Уила стала домашним кофе. Карамель чувствуется, яблоко тоже. Не «премиум», просто вкусно.",
    author: "Андрей К.",
  },
  {
    text: "Подписка раз в месяц — две пачки, доставка бесплатно. Не надо каждый раз думать, что заказать.",
    author: "Маша Л.",
  },
  {
    text: "Обжаривают по четвергам — это чувствуется. После магазинного зерна разница заметная.",
    author: "Сергей В.",
  },
  {
    text: "Пришли с рекламы в Инсте, оставили заявку — перезвонили в тот же день. Без лишнего пафоса, всё по делу.",
    author: "Настя Б.",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1 text-ac" role="img" aria-label="5 из 5 звёзд">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 3.2l2.62 5.31 5.86.85-4.24 4.13 1 5.84L12 16.58l-5.24 2.75 1-5.84-4.24-4.13 5.86-.85z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <article className="relative w-[min(460px,78vw)] shrink-0 px-10 py-[42px] pb-[38px]">
      <span className="pill-shape" style={{ background: "#f0ede8" }} />
      <div className="relative z-10">
        <Stars />
        <p className="font-mono mb-6 line-clamp-6 text-[14px] leading-[1.55] text-ink">
          {text}
        </p>
        <p className="font-display text-[18px] tracking-[0.04em] text-ink">{author}</p>
      </div>
    </article>
  );
}

export function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section className="rvm relative bg-[#0d0d0d] pb-16 pt-20 text-cream sm:pb-20 sm:pt-24">
      <TornEdge fill="#141210" position="top" />

      <div className="mb-8 px-5 text-center sm:mb-10 sm:px-8">
        <div className="section-label mb-3 justify-center">Отзывы</div>
        <h2 className="section-title text-[clamp(36px,4.5vw,64px)] leading-none">
          Что говорят
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="reviews-track px-4">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} {...review} />
          ))}
        </div>
      </div>

      <p className="font-display mt-10 px-5 text-center text-[clamp(18px,2.2vw,28px)] tracking-[0.04em] text-cream">
        И ещё многие{" "}
        <span className="scribble-underline">пишут похожее</span>
      </p>
    </section>
  );
}
