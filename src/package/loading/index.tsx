import { BEM } from "../../util/bem";
import { fixUnit } from "../../util/unit";
import Icon from "../icon";
const bem = new BEM("icon");

export type LodingProps = Partial<{
  type: "circle-notch" | "cog" | "spinner" | "sync" | "pulse" | "clock";
  size: "1x" | "2x" | "3x" | "4x" | "5x";
  text: string;
}>;
export function Progress({ type = "pulse", text, size = "1x" }: LodingProps): JSX.Element {
  if (type === "pulse") type = ("spinner fa-pulse fa-" + size) as any;
  else type = `${type} fa-spin fa-${size}` as any;
  return <Icon name={type} size={size}></Icon>;
}

bem.displayName(Progress);
export default Progress;
