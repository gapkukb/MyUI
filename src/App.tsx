import React, { useRef } from "react";
import { Carousel, CarouselItem } from "./package/carousel";

function App() {
  function goto(index: number) {}
  const slider = useRef<HTMLDivElement>(null);
  return (
    <>
      <Carousel height="300">
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
}

export default App;
