import React from "react";
import { Carousel, CarouselItem } from "./index";

export default {
	title: "checkbox",
	component: [Carousel, CarouselItem],
};
export const Demo = () => {
	return (
		<>
			<Carousel height="300" width="30%">
				<CarouselItem href="">1</CarouselItem>
				<CarouselItem>2</CarouselItem>
				{/* <CarouselItem>3</CarouselItem> */}
				{/* <CarouselItem>4</CarouselItem> */}
			</Carousel>
			<br />
			<Carousel height="300" loopable={false} gap="20" indicatorByHover>
				<CarouselItem>1</CarouselItem>
				<CarouselItem>2</CarouselItem>
				<CarouselItem>3</CarouselItem>
				<CarouselItem>4</CarouselItem>
			</Carousel>
		</>
	);
};
