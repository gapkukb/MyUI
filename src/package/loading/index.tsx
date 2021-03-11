import { ReactNode } from "react";

export type LoadingProps = Partial<{
	type: string;
	text: ReactNode;
	size: number;
}>;
export const Loading: CFC<LoadingProps> = ({ type, text, size = "1x" }) => {
	return <div className="loading"></div>;
};

export default Loading;
