import SocialIcons from "./../../SocialIcons/SocialIcons";
import InputSubscription from "./../../InputSubscription/InputSubscription";
import otherChars from "./../../../assets/GatherFriend/other-characters.svg";
import greenChar from "./../../../assets/GatherFriend/yellowguy.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function GatherFriend() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className="GatherSection overflow-hidden">
        <div className="container py-5 ">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 mb-3">
              <div>
                <h1 className="fw-bold">Gather Friends Near or Far</h1>
                <div className="">
                  <h3 className="fs-5 fw-bolder">
                    GameZone Games are for Pals
                  </h3>
                  <p>
                    Your other players don't need to buy anything to join your
                    game - just make sure everybody can see the host screen and
                    you're in for a good time.
                  </p>
                </div>
                <div className="SocialMedia">
                  <h3 className="fs-5 ">Follow us on Social Media</h3>
                  <SocialIcons myColor={"text-white"} />
                </div>
                <div className="news">
                  <h3 className="fs-5 ">Join our Newsletter</h3>
                  <p>
                    Stay up to date on all things GameZone Games, including
                    news, updates, teasers, and exclusives.
                  </p>
                  <InputSubscription buttonPlace={true} />
                </div>
              </div>
            </div>
            <div className=" col-md-7 ">
              <div className="row">
                <div className="col-5 ">
                  <img src={greenChar} alt="friends" />
                </div>
                <div className="col-7 " data-aos="fade-left">
                  <img src={otherChars} alt="friends" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
