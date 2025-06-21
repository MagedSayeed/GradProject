import avater1 from "../../../assets/IntroSection.png";
import SingleGameIcon from "./SingleGameIcon/SingleGameIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import skrew from "../../../assets/gamesLogo/SkrewLogo.png";
import oldmaid from "../../../assets/gamesLogo/oldmaidlogo.jpg";
import doubt from "../../../assets/gamesLogo/doubt.png";
import domino from "../../../assets/gamesLogo/domino.jpg";
import chess from "../../../assets/gamesLogo/chess.jpg";
import checkers from "../../../assets/gamesLogo/checkers.png";
import uno from "../../../assets/gamesLogo/UNO.avif";

const gamesIcons = [
  { image: skrew, alt: "Skrew Game", gameLink: "/skrew" },
  { image: oldmaid, alt: "Oldmaid Game", gameLink: "/oldmaid" },
  { image: doubt, alt: "Idoubt Game", gameLink: "/idoubt" },
  { image: domino, alt: "Domino Game", gameLink: "/domino" },
  { image: chess, alt: "Chess Game", gameLink: "/chess" },
  { image: checkers, alt: "Checkers Game", gameLink: "/checkers" },
  { image: uno, alt: "UNO Game", gameLink: "/Uno" },
];

export default function IntroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
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
                  GameZone has seven exciting mini-games, each with unique
                  challenges. Enjoy fast-paced action, tricky puzzles, and
                  reflex-based fun.
                </p>
                <p>
                  Play, score, win! Challenge friends or go solo. Non-stop fun!
                </p>
              </div>
            </div>
            <div className="allGamesIcons">
              <div className="row gy-3 justify-content-center">
                {gamesIcons.map((game, id) => {
                  return (
                    <SingleGameIcon
                      key={id}
                      gameLink={game.gameLink}
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
