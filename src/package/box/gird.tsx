import { fixUnit } from "../../util/unit";
import "./index.styl";

export type GirdProps = Partial<{
  type: "line" | "circle";
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
export function Gird({
  type = "line",
  max = 100,
  width = 100,
  height = 20,
  value = 0,
  lineWidth = 10,
  fontSize = 12,
  color = "blue",
  bgcolor = "lightGray",
  textColor = "#fff",
}: GirdProps): JSX.Element {
  const style = {
    width: fixUnit(width),
    height: fixUnit(height),
    color,
    backgroundColor: bgcolor,
  };

  if (type === "line")
    return (
      <svg width={width} height={width} viewBox="0 0 100 20">
        <rect x="0" y="0" rx="10" ry="10" width="100" height="20" fill={bgcolor} />
        <rect x="0" y="0" rx="10" ry="10" width="80" height="20" fill={color} />
        <text fontSize={fontSize} fill={textColor} x="50" y="10" dominantBaseline="central" textAnchor="middle">
          123%
        </text>
      </svg>
    );
  const C = 251;
  const offset = C - (+value / +max) * C;

  return <div className="gird"></div>;
}

export default Gird;
