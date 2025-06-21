import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import IntroSection from "./IntroSection/IntroSection";
import GatherFriend from "./GatherFriend/GatherFriend";
import FAQ from './FAQ/FAQ';

export default function Home() {
  useEffect(() => {
      scrollTo({ top: 0, behavior: "smooth" });
    });
  return (
    <>
      <div className="mainBg myPadding">
          <Carousel />
          <IntroSection/>
          <FAQ/>
          <GatherFriend/>
      </div>
    </>
  );
}
