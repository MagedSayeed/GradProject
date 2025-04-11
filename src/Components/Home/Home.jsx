import { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import IntroSection from "./IntroSection/IntroSection";
import GatherFriend from "./GatherFriend/GatherFriend";
import FAQ from './FAQ/FAQ';
import Support from './../Support/Support';

export default function Home() {
  return (
    <>
      <div className="mainBg">
          <Carousel />
          <IntroSection/>
          <FAQ/>
          <GatherFriend/>
      </div>
    </>
  );
}
