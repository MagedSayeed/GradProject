import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import IntroSection from "./IntroSection/IntroSection";

export default function Home() {
  return (
    <>
      <div className="home">
          <Carousel />
          <IntroSection/>
      </div>
    </>
  );
}
