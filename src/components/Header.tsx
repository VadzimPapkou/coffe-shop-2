import { FlatButton } from "./FlatButton";

export function Header() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-center xs:justify-between px-4 pt-4 sm:px-6 sm:pt-5 md:px-8">
        <a href="#" className="pointer-events-auto" aria-label="Кварта">
          <span className="font-display text-[28px] tracking-[0.04em] text-ink sm:text-[34px]">
            Кварта
          </span>
        </a>

        <a
          href="#contact"
          className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-mono text-[12px] tracking-[0.02em] text-ink/55 transition-colors hover:text-ink sm:block sm:text-[13px]"
        >
          Минск, ул. Короля, 9
        </a>

        <FlatButton href="#contact" className="pointer-events-auto xs:block hidden">
          Заявка
        </FlatButton>
      </div>
    </header>
  );
}
