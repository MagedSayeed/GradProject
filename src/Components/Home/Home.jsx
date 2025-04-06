import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import IntroSection from "./IntroSection/IntroSection";
import GatherFriend from "./GatherFriend/GatherFriend";
import FAQ from './FAQ/FAQ';

export default function Home() {
  return (
    <>
      <div className="home">
          <Carousel />
          <IntroSection/>
          <FAQ/>
          <GatherFriend/>
      </div>
    </>
  );
}
