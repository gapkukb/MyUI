import { reg_numeric } from "./regexp";

const to = Object.prototype.toString,
  call = (x: any) => to.call(x).slice(8, -1);
export const type = {
  null: (x: any): x is null => x === null,
  undefined: (x: any): x is undefined => x === undefined,
  nil: (x: any): x is null | undefined => type.null(x) || type.undefined(x),
  def: <T = any>(x: T): x is NonNullable<T> => !type.nil(x),
  number: (x: any): x is number => !isNaN(x) && !isFinite(x) && call(x) === "Number",
  numeric: (x: any): x is number | string => type.number(x) || reg_numeric.test(x),
  numericInt: (x: any): x is number | string => /^\d+$/.test(x),
  string: (x: any): x is string => typeof x === "string",
  function: (x: any): x is Function => call(x) === "Function",
  boolean: (x: any): x is boolean => call(x) === "Boolean",
  array: <T = any>(x: any): x is Array<T> => Array.isArray(x),
  arrayLike: <T = any>(x: any): x is ArrayLike<T> => typeof x === "object" && type.number(x.length),
  object: (x: any): x is Record<string, any> => call(x) === "Object",
  set: <T = any>(x: any): x is Set<T> => call(x) === "Set",
  map: <K = any, V = any>(x: any): x is Map<K, V> => call(x) === "Map",
  date: (x: any): x is Date => call(x) === "Date",
  // TODO:
  // datetimeString: (x: any): x is string => type.string(x) && Date.parse(x as string),
  // dateString: (x: any): x is Date => type.string(x) && Date.parse(x as string),
  // timeString: (x: any): x is string => type.string(x) && Date.parse(x as string),
  promise: <T = any>(x: any): x is Promise<T> => call(x) === "Promise",
  symbol: (x: any): x is Symbol => call(x) === "Symbol",
  regexp: (x: any): x is RegExp => call(x) === "RegExp",
  error: (x: any): x is Error => call(x) === "Error",
  element: (x: any): x is HTMLElement => x && x.nodeType === 1,
};
