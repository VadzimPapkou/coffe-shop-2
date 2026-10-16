import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { Spinner } from "./Spinner";
import "./flat-button.css";

type FlatButtonBase = {
  children: ReactNode;
  className?: string;
  bg?: string;
  color?: string;
};

type FlatButtonAsLink = FlatButtonBase & {
  href: string;
  type?: never;
  disabled?: never;
  loading?: never;
};

type FlatButtonAsButton = FlatButtonBase & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  loading?: boolean;
};

type FlatButtonProps = FlatButtonAsLink | FlatButtonAsButton;

export function FlatButton({
  href,
  children,
  className = "",
  bg = "var(--ac)",
  color = "#f0ede8",
  type = "button",
  disabled,
  loading,
}: FlatButtonProps) {
  const style = {
    "--flat-button-bg": bg,
    "--flat-button-color": color,
  } as CSSProperties;

  const classes = `flat-button${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        <span className="flat-button__text">{children}</span>
      </a>
    );
  }

  const isLoading = Boolean(loading);

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={classes}
      style={style}
    >
      {isLoading ? (
        <span className="flat-button__loader" aria-hidden>
          <Spinner size={18} />
        </span>
      ) : null}
      <span className="flat-button__text">{children}</span>
    </button>
  );
}
