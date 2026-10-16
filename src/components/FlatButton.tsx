import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
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
};

type FlatButtonAsButton = FlatButtonBase & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
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

  return (
    <button type={type} disabled={disabled} className={classes} style={style}>
      <span className="flat-button__text">{children}</span>
    </button>
  );
}
