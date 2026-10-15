import Image from "next/image";
import { WobbleButton } from "./WobbleButton";

export function Header() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-start justify-end px-4 pt-4 sm:px-6 sm:pt-5 md:px-8">
        <a
          href="#"
          className="pointer-events-auto absolute left-1/2 top-3 -translate-x-1/2 sm:top-4"
          aria-label="Apocalypse Coffee Roasters"
        >
          <Image
            src="/assets/logo.svg"
            alt="Apocalypse Coffee Roasters"
            width={72}
            height={72}
            className="h-14 w-14 sm:h-[72px] sm:w-[72px]"
            priority
          />
        </a>

        <WobbleButton href="#contact" className="pointer-events-auto site-header-cta">
          Contact
        </WobbleButton>
      </div>
    </header>
  );
}
