"use client";

import { WobbleButton } from "./WobbleButton";
import { TornEdge } from "./TornEdge";
import { SusanStage, type SusanItem } from "./SusanStage";

const ROASTS: SusanItem[] = [
  {
    id: "ethiopia",
    name: "Эфиопия Иргачеффе",
    rank: 1,
    meta: "Цветочный · Бергамот · Светлая · 250 г",
    img: "/assets/antidote.png",
    price: "32 BYN",
  },
  {
    id: "colombia",
    name: "Колумбия Уила",
    rank: 2,
    meta: "Карамель · Красное яблоко · 250 г",
    img: "/assets/armageddon.png",
    price: "29 BYN",
  },
  {
    id: "brazil",
    name: "Бразилия Серрадо",
    rank: 3,
    meta: "Орех · Шоколад · Под эспрессо · 250 г",
    img: "/assets/the-uprising.png",
    price: "26 BYN",
  },
  {
    id: "drips",
    name: "Дрип-пакеты",
    rank: 4,
    meta: "Ассорти · 10 штук",
    img: "/assets/the-wanderer.png",
    price: "18 BYN",
  },
  {
    id: "subscription",
    name: "Подписка",
    rank: 5,
    meta: "2 × 250 г в месяц · Доставка бесплатно",
    img: "/assets/anti-matter.png",
    price: "54 BYN / мес",
  },
];

const CHIPS = [
  { label: "Партии по 5 кг", dot: "bg-green" },
  { label: "С 2019", dot: "bg-ac" },
  { label: "Минск, Короля 9", dot: "bg-ink" },
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

          <h1 className="font-display mb-5 text-[clamp(52px,8vw,64px)] leading-[0.92] text-ink">
            <span className="font-script block text-[clamp(42px,6.5vw,78px)] leading-[0.95] text-ac">
              Свежая обжарка
            </span>
            <span>из Минска</span>
          </h1>

          <p className="font-mono mb-8 max-w-[540px] text-[15px] leading-[1.65] text-paper-mut sm:text-base">
            «Кварта» — маленькая мастерская Ани и Дмитрия. Обжариваем по четвергам
            партиями по 5 кг, по пятницам развозим по Минску. Зерно приходит к вам
            на 1–3 день после обжарки — свежесть и есть то, что мы продаём.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <WobbleButton href="#contact">Оставить заявку</WobbleButton>
          </div>
        </div>

        <SusanStage items={ROASTS} />
      </div>

      <TornEdge fill="#141414" position="bottom" />
    </section>
  );
}
