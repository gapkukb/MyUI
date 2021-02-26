import "react";

declare module "react" {
	interface HTMLAttributes<T> {
		loading?: "lazy" | "eager" | "auto";
	}
}
