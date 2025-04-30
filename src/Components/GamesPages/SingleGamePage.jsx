import checkers from "../../assets/games/testBg2.jpg";

export default function SingleGamePage({}) {
  return (
    <>
      <div className="GamepageContent">
        <div className="homeImg">
          <img src={checkers} alt="" className="vh-100 w-100" />
          
        </div>
      </div>
    </>
  );
}
