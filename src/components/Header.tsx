"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-start justify-between px-4 pt-4 sm:px-6 sm:pt-5 md:px-8">
        <button
          type="button"
          aria-label="Open menu"
          className="pointer-events-auto inline-flex items-center gap-2.5 rounded-[14px] border-[2.5px] border-ink bg-ac px-3.5 py-2.5 font-display text-[15px] tracking-[0.06em] text-ink hard-shadow-sm transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]"
        >
          <span className="flex flex-col gap-[3.5px]" aria-hidden>
            <span className="block h-[2.5px] w-[18px] rounded-full bg-ink" />
            <span className="block h-[2.5px] w-[18px] rounded-full bg-ink" />
            <span className="block h-[2.5px] w-[18px] rounded-full bg-ink" />
          </span>
          <span className="hidden sm:inline">MENU</span>
        </button>

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

        <button
          type="button"
          aria-label="Open cart"
          className="pointer-events-auto relative inline-flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border-[2.5px] border-ink bg-cream hard-shadow-sm transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_#000]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden
          >
            <path d="M6 7h12l-1 12H7L6 7Z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
          <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ac px-1 font-mono text-[10px] font-medium text-ink">
            0
          </span>
        </button>
      </div>
    </header>
  );
}
