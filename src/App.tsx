import React from "react";
import { Carousel,CarouselItem  } from "./package/carousel";

function App() {
  return (
    <>
      <Carousel width="800" height="300">
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        {/* <CarouselItem>3</CarouselItem> */}
        {/* <CarouselItem>4</CarouselItem> */}
      </Carousel>
      <br />
      <Carousel width="800" height="300" loopable={false} indicatorTrigger="hover">
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
        <CarouselItem>4</CarouselItem>
      </Carousel>
    </>
  );
}

export default App;
