const TORN_PATH =
  "M0 132 L0 58 Q22 63 31.0 59.0 Q40 55 54.0 63.0 Q68 71 80.0 66.5 Q92 62 106.0 70.0 Q120 78 135.0 74.0 Q150 70 166.0 68.0 Q182 66 196.0 70.5 Q210 75 225.0 71.0 Q240 67 253.0 73.5 Q266 80 279.0 69.5 Q292 59 306.0 56.0 Q320 53 336.0 57.5 Q352 62 366.0 55.0 Q380 48 395.0 51.0 Q410 54 423.0 50.0 Q436 46 451.0 52.5 Q466 59 479.0 64.5 Q492 70 506.0 73.0 Q520 76 534.0 79.5 Q548 83 562.0 87.0 Q576 91 590.0 88.0 Q604 85 618.0 89.0 Q632 93 646.0 88.0 Q660 83 675.0 81.0 Q690 79 703.0 72.0 Q716 65 729.0 68.5 Q742 72 756.0 64.5 Q770 57 784.0 60.5 Q798 64 812.0 57.0 Q826 50 840.0 54.0 Q854 58 868.0 53.0 Q882 48 896.0 52.0 Q910 56 925.0 62.0 Q940 68 954.0 70.5 Q968 73 982.0 69.0 Q996 65 1010.0 72.5 Q1024 80 1038.0 76.0 Q1052 72 1066.0 77.5 Q1080 83 1095.0 79.0 Q1110 75 1125.0 71.5 Q1140 68 1154.0 71.5 Q1168 75 1179.0 68.5 Q1190 62 1195.0 64.0 L1200 66 L1200 132 Z";

type TornEdgeProps = {
  fill: string;
  /** bottom = jagged edge facing up into next section; top = rotated, facing down */
  position?: "bottom" | "top";
  className?: string;
};

export function TornEdge({
  fill,
  position = "bottom",
  className = "",
}: TornEdgeProps) {
  const isTop = position === "top";

  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 132"
      preserveAspectRatio="none"
      className={`torn-edge torn-edge--${position}${className ? ` ${className}` : ""}`}
      overflow="visible"
    >
      <g
        fill={fill}
        transform={isTop ? "rotate(180 600 66)" : undefined}
      >
        <path d={TORN_PATH} />
      </g>
    </svg>
  );
}
