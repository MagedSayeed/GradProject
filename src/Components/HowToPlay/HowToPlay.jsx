import HeaderTitle from "./../HeaderTitle/HeaderTitle";
import wizard from "../../assets/HowToPlay/wizard.png";
import Steps from "./Steps/Steps";
export default function HowToPlay() {
  const steps = [
    {
      title: "Creating a new account",
      ans: "Each player must visit game website and SignUp",
    },
    {
      title: "Download & install",
      ans: "Click Download Button then install.",
    },
    {
      title: `Launch the game,and hit "play" in the game`,
      ans: "Once you hit play,the game will open a game menu screen. This screen is where each player select the game.",
    },
    {
      title: `Each player directed to game lobby`,
      ans: "Players can join the lobby room. Two options given(hosting,joining). Only one player will select host and creates a game room, Other players will join this room by entering room ID.",
    },
  ];
  return (
    <>
      <div className="mainBg myPadding">
        <div className="container">
          <div className="First_Section mb-4">
            <h1 className="py-3 fs-2 fw-bolder">How to Play GameZone Games</h1>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/_T7fGTqezGo?si=p5KH20qEI0ajH21s"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="Second_Section">
            <HeaderTitle title="Step by Step Instructions" />
            <div className="row gy-1">
              <div className="col-md-6">
                <div className="Left">
                  <img src={wizard} alt="wizard" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Right">
                  {steps.map((step, idx) => (
                    <Steps
                      key={idx}
                      num={idx}
                      title={step.title}
                      ans={step.ans}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
