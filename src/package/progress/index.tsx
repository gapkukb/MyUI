import { fixUnit } from "../../util/unit";
import "./index.styl";

export type ProgressProps = Partial<{
  type: "line" | "circle" | "dashborad";
  max: Numeric;
  width: Numeric;
  height: Numeric;
  value: Numeric;
  lineWidth: Numeric;
  fontSize: Numeric;
  color: string;
  bgcolor: string;
  textColor: string;
}>;
export function Progress({
  type = "line",
  max = 100,
  width = 100,
  height = 20,
  value = 0,
  lineWidth = 10,
  fontSize = 12,
  color = "blue",
  bgcolor = "lightGray",
  textColor = "#000",
}: ProgressProps): JSX.Element {
  const style = {
    width: fixUnit(width),
    height: fixUnit(height),
    color,
    backgroundColor: bgcolor,
  };

  if (type === "line") return <progress className="progress" max={max} value={value} style={style}></progress>;
  const C = 251;
  const offset = C - (+value / +max) * C;

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <circle r="40" cx="50" cy="50" stroke={bgcolor} strokeWidth={lineWidth} fill="none" />
      <circle
        r="40"
        cx="50"
        cy="50"
        stroke={color}
        strokeWidth={lineWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform="rotate(-90,50,50)"
        className="progress__offset"
      />
      <text fontSize={fontSize} fill={textColor} x="50" y="50" dominantBaseline="central" textAnchor="middle">
        123
      </text>
    </svg>
  );
}

export default Progress;
