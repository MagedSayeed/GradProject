import { Gradient } from "@mui/icons-material";
import SocialIcons from "../SocialIcons/SocialIcons";
import Button from "@mui/joy/Button";
export default function ImageOverLay({ overLayImage }) {
  return (
    <>
      <div className="imageOverLay position-absolute start-10 top-0 bottom-0">
        <div className=" d-flex flex-column  justify-content-center">
          <img src={overLayImage} alt="" className="h-30 scaleUp" />
          <h2 className="text-white mx-auto fst-italic">Available now!</h2>
          <Button
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
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "5px",
              marginBottom:"5px",
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
