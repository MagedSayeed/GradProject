import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import IntroSection from "./IntroSection/IntroSection";
import GatherFriend from "./GatherFriend/GatherFriend";

export default function Home() {
  return (
    <>
      <div className="home">
          <Carousel />
          <IntroSection/>
          <GatherFriend/>
      </div>
    </>
  );
}
