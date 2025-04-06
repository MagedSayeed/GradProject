import { Link } from "react-router-dom";
import avater1 from "../../../assets/IntroSection.png";
// import skrew from "../../../assets/images/Skrew1.jpg";
import SingleGameIcon from "./SingleGameIcon/SingleGameIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import skrew from "../../../assets/gamesLogo/skrew.png"
import oldmaid from "../../../assets/gamesLogo/oldmaid.png"
import doubt from "../../../assets/gamesLogo/doubt.png"
import domino from "../../../assets/gamesLogo/domino.jpg"
import chess from "../../../assets/gamesLogo/chess.jpg"
import checkers from "../../../assets/gamesLogo/checkers.png"


const gamesIcons = [
  { image: skrew, alt: "Skrew Game" },
  { image: oldmaid, alt: "oldmaid Game" },
  { image: doubt, alt: "doubt Game" },
  { image: domino, alt: "domino Game" },
  { image: chess, alt: "chess Game" },
  { image: checkers, alt: "checkers Game" },
];

export default function IntroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset:400,
      
    });
  }, []);
  return (
    <>
      <div className="container py-5  ">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 ">
            <img
              data-aos="fade-up"
              className="object-fit-cover"
              src={avater1}
              alt=""
            />
          </div>
          <div className="col-md-7">
            <div>
              <h1 className="fs-6 fst-italic mb-0">
                Gamezone Games Official Website
              </h1>
              <p className="fw-bold fs-1">What's Gamezone Games?</p>
              <div className="content">
                <p>
                  GameZone has six exciting mini-games, each with unique
                  challenges. Enjoy fast-paced action, tricky puzzles, and
                  reflex-based fun.
                </p>
                <p>
                  Play, score, win! Challenge friends or go solo. Non-stop fun!
                </p>
              </div>
            </div>
            <div className="allGamesIcons">
              <div className="row gy-3">
                {gamesIcons.map((game, id) => {
                  return (
                    <SingleGameIcon
                      key={id}
                      icon={game.image}
                      altern={game.alt}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
