export type ProgressProps = Partial<{
  type: "line" | "circle" | "dashborad";
}>;
export function Progress({ type }: ProgressProps): JSX.Element {
  return <div></div>;
}

export default Progress;
