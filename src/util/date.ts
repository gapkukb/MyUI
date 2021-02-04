import { type } from "./type";
function pad(n: number): string {
  return (n < 10 ? "0" : "") + n;
}
export function formatter(date: Date | number | string, input: string): string {
  date = type.date(date) ? date : new Date(date);
  const Y = date.getFullYear() + "",
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMonth(),
    s = date.getSeconds();

  return input
    .replace(/yyyy/gi, Y)
    .replace(/yy/gi, Y.slice(2))
    .replace("MM", pad(M))
    .replace("DD", pad(D))
    .replace("HH", pad(H))
    .replace("hh", pad(H))
    .replace("mm", pad(m))
    .replace("ss", pad(s));
}
