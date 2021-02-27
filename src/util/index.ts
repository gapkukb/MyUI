import { type } from "./type";
export const nope: any = function () {};
export function getLength(x: Iterable<any>): number {
	if (type.string(x) || type.arrayLike(x)) return x.length;
	if (type.set(x) || type.map(x)) return x.size;
	if (type.object(x)) return Object.keys(x).length;
	throw new Error("argument must be iterable!");
}

type CacheFuncReturn<T> = T & { clear: (x?: any) => void };

// 缓存函数，缓存计算结果，适合单参数高频调用的函数。
export function cacheFunc<T extends (x: any) => any>(f: T): CacheFuncReturn<T> {
	let cache = new Map();
	function func(x: any) {
		if (cache.get(x)) console.log(`cache`);
		cache.get(x) || cache.set(x, f(x));
		return cache.get(x);
	}
	func.clear = function (x?: "all" | any) {
		x === undefined ? cache.clear() : cache.delete(x);
	};
	return func as any;
}

/** 随机字符串 */
export const noncestr = (length?: number): string => (Math.random() + Math.random()).toString(36).slice(2, length);
/** 指定范围的随机数字,默认包含整数小数正负数 */
export const randomNumber = (min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER) =>
	Math.random() * (max - min) + min;
/** 指定范围的随机整数 */
export const randomInt = (max: number) => randomNumber(0, max);
