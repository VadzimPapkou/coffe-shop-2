import { WobbleButton } from "./WobbleButton";

export function Header() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 pt-4 sm:px-6 sm:pt-5 md:px-8">
        <a href="#" className="pointer-events-auto" aria-label="Кварта">
          <span className="font-display text-[28px] tracking-[0.04em] text-ink sm:text-[34px]">
            Кварта
          </span>
        </a>

        <WobbleButton href="#contact" className="pointer-events-auto site-header-cta">
          Заявка
        </WobbleButton>
      </div>
    </header>
  );
}
