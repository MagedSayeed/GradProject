import SocialIcons from "../SocialIcons/SocialIcons";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
export default function ImageOverLay({ overLayImage,gameName }) {
  let nav = useNavigate();
  return (
    <>
      <div className="imageOverLay position-absolute d-none d-md-block start-10 top-0 bottom-0">
        <div className=" d-flex flex-column  justify-content-center">
          <h1 className="scaleUp  anton-regular txtShadow text-white">
            {overLayImage}
          </h1>
          {/* <img src={overLayImage} alt="" className="h-30 scaleUp" /> */}
          <h2 className="text-white fs-5 fst-italic">Available now!</h2>
          <Button
          component="a"
          href="https://github.com/mido8077/GameZone_Gradproject"
          target="_blank"
            sx={{
              backgroundColor: "#b2bbff",
              color: "#0d0f11",
              borderRadius: "5px",
              ":hover": {
                background: "linear-gradient(90deg,#9ca7fe,#c0c7ff)",
                boxShadow:
                  "0 0 27.901px #7b88ee,0 0 1.329px #7b88ee,0 0 .664px #7b88ee",
                color: "#4d578c",
              },
            }}
            className="mb-1"
          >
            Download Now
          </Button>
          <Button
            onClick={() => {
              nav(gameName);
            }}
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "5px",
              marginBottom: "5px",
              ":hover": {
                borderColor: "#ffe461",
                color: "#ffe461",
                backgroundColor: "transparent",
              },
            }}
          >
            Learn more
          </Button>
          <SocialIcons myColor="text-white" />
        </div>
      </div>
    </>
  );
}
