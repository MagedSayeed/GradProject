import HeaderTitle from "./../HeaderTitle/HeaderTitle";
import wizard from "../../assets/HowToPlay/wizard.png";
import Steps from "./Steps/Steps";
export default function HowToPlay() {
  const steps = [
    {
      title: "Download & install",
      ans: "Click Download Button then install.",
    },
    {
      title: "Access the Main Menu",
      ans: "After launching the game, the user is directed to the Main Menu. This interface serves as the central hub where players can choose to create or join game rooms.",
    },
    {
      title: `Create a Room (Become the Host)`,
      ans: "By selecting the “Create Room” option, the user becomes the Host of a new game session. This allows them to control the game setup and invite others.",
    },
    {
      title: `Share the Room Code with Friends`,
      ans: "Once the room is created, the host receives a unique Room Code. They can share this code with other players, who will enter it to join the session as Clients.",
    },
    {
      title: `Choose a Game`,
      ans: "After all clients have joined, the host selects one of the available games from the list. This step finalizes the game settings before starting.",
    },
    {
      title: `Start the Game`,
      ans: "Once the game is chosen, the system transitions all players into the gameplay environment, and the match officially begins.",
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
