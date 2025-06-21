import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gameworld from "../../../assets/games/skrew/gameworld.png";
import skrew from "../../../assets/games/skrew/skrew1.png";
import dominos from "../../../assets/games/domino/Dominos3.png";
import idoubt from "../../../assets/games/idoubt/Idoubt.png";
import GameMenu from "../../../assets/games/GameMenu.jpg";
import ImageOverLay from "../../ImageOverLay/ImageOverLay";

export default function Carousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: false,
    accessibility:true,
    autoplay: true,
    autoplaySpeed: 10000,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  const images = [
    { image: gameworld, alt: "GAMEZONE",game:'howtoplay' },
    { image: GameMenu, alt: "Game Menu",game:'games' },
    { image: skrew, alt: "Skrew",game:'skrew' },
    { image: dominos, alt: "Domino",game:'domino' },
    { image: idoubt, alt: "I Doubt",game:'idoubt' },
  ];
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((singleImages, idx) => {
            return (
              <div
                key={idx}
                className="px-1 px-md-3 outline-none  card opacity-25  bg-transparent "
              >
                <div className=" imageCover position-relative">
                  <img
                    className="temp rounded-4 w-100 h-100 min-h-80  xl:max-h-125 max-h-110"
                    src={singleImages.image}
                    alt={singleImages.alt}
                  />
                  <ImageOverLay overLayImage={singleImages.alt} gameName={singleImages.game} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
