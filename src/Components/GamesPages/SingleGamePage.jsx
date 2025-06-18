import checkers from "../../assets/games/Skrew.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HeaderTitle from "./../HeaderTitle/HeaderTitle";
import GameSlider from "./GameSlider/GameSlider";
import Steps from "./../HowToPlay/Steps/Steps";

export default function SingleGamePage({ game, album, paragraphs, QA, Rules }) {

  return (
    <>
      <div className="GamepageContent">
        <div className="position-relative vh-100">
          {/* background image */}
          <img src={game.BG} alt="" className="w-100 h-100" />
          <div className="position-absolute d-flex align-items-center justify-content left-5 top-0 bottom-5 right-5 md:left-45">
            <div className="">
              <h1 className="d-flex anton-regular txtShadow text-white  ">
                {/* game name */}
                <div className="scaleUp">{game.name}</div>
              </h1>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-3 ">
                <span className="gameHint">
                  <span className="me-1">
                    <AccessTimeIcon />
                  </span>
                  {/* game type */}
                  {game.type}
                </span>
                <span className="gameHint">
                  <span className="me-1">
                    <GroupIcon />
                  </span>
                  {/* player count*/}
                  {game.playerCount}
                </span>
                <span className="gameHint">
                  <span className="me-1">
                    <EmojiObjectsIcon />
                  </span>
                  {/* game time*/}
                  {game.time}
                </span>
              </div>
              {/* small brief about the game */}
              <p className="gameOverLayP">{game.brief}</p>
            </div>
          </div>
        </div>
        <div className="below py-5">
          <div className="container">
            <HeaderTitle title="Screenshots" />
            <div className="container">
              {/* all slider images */}
              <GameSlider album={album} />
            </div>

            <HeaderTitle title="Rules & Instructions" />
            <div className="container">
              {Rules.map((Rule, idx) => (
                <Steps key={idx} num={idx} title={Rule.rule} ans="" />
              ))}
            </div>

            <HeaderTitle title="About the Game" />
            <div className="row container">
              <div className="col-md-6">
                <div className="content1">
                  {/* all paragraphs here */}

                  {paragraphs.map((pp, id) => {
                    return <p key={id}>{pp}</p>;
                  })}
                </div>
              </div>
              <div className="col-md-6">
                <div className="gameDetails">
                  {/* map div with Q&A Here*/}
                  {QA.map((qa, id) => {
                    return (
                      <div key={id} className="detail">
                        <p>{qa.q}</p>
                        <p>{qa.a}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
