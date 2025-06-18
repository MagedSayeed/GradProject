import * as React from "react";
import Input from "@mui/joy/Input";
import { Search } from "@mui/icons-material";
import Button from "@mui/joy/Button";

import skrew from "./../../assets/gamesLogo/SkrewLogo.png";
import oldmaid from "./../../assets/gamesLogo/oldmaidlogo.jpg";
import doubt from "./../../assets/gamesLogo/doubt.png";
import domino from "./../../assets/gamesLogo/domino.jpg";
import chess from "./../../assets/gamesLogo/chess.jpg";
import checkers from "./../../assets/gamesLogo/checkers.png";
import SingleGameIcon from "./../Home/IntroSection/SingleGameIcon/SingleGameIcon";
import uno from "./../../assets/gamesLogo/UNO.avif";

const gamesIcons = [
  { image: skrew, alt: "Skrew Game", gameLink: "/skrew" },
  { image: domino, alt: "Domino Game", gameLink: "/domino" },
  { image: doubt, alt: "Idoubt Game", gameLink: "/idoubt" },
  { image: chess, alt: "Chess Game", gameLink: "/chess" },
  { image: oldmaid, alt: "Oldmaid Game", gameLink: "/oldmaid" },
  { image: uno, alt: "UNO Game", gameLink: "/Uno" },
  { image: checkers, alt: "Checkers Game", gameLink: "/checkers" },
];

export default function Games() {
  
  const [data, setData] = React.useState("");

  return (
    <>
      <div className="mainBg min-vh-100 myPadding">
        <div className="container">
          <div className="search d-flex  mb-5 pt-3">
            <Input
              sx={{
                "--Input-decoratorChildHeight": "35px",
                backgroundColor: "#3a3c43",
                color: "#b8c0cc",
                border: "none",
                maxWidth: "400px",
                borderBottom: "2px solid #8c99fe",
                borderRadius: "4px 4px 0 0",
                ":before": {
                  boxShadow: "none !important",
                },
              }}
              placeholder="Game"
              type="text"
              value={data}
              required
              startDecorator={<Search />}
              onChange={(e) => setData(e.target.value)}
            />
            <Button
              variant="solid"
              type="submit"
              sx={{
                backgroundColor: "#b2bbff",
                color: "#0d0f11",
                borderRadius: "5px",
                marginLeft: "20px",
                ":hover": {
                  backgroundColor: "#e0e4fd",
                  color: "#4d578c",
                },
              }}
              onClick={() => setData("")}
            >
              Clear
            </Button>
          </div>

          <div className="allGamesIcons">
            <div className="row gy-3">
              {gamesIcons.map((game, id) => {
                if (game.alt.toLowerCase().includes(data.toLowerCase()))
                  return (
                    <SingleGameIcon
                      key={id}
                      gameLink={game.gameLink}
                      icon={game.image}
                      altern={game.alt}
                    />
                  );
                else return "";
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
