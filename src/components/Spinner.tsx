import "./spinner.css";

type SpinnerProps = {
  size?: number;
  className?: string;
};

/** Minimal SVG spinner — ring + arc, CSS rotate (frontendchecklist / Tailwind-style). */
export function Spinner({ size = 18, className = "" }: SpinnerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`spinner${className ? ` ${className}` : ""}`}
      role="status"
      aria-label="Загрузка"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        opacity="0.25"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        opacity="0.9"
      />
    </svg>
  );
}
