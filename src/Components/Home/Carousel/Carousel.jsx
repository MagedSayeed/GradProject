import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skrew from "../../../assets/images/Skrew1.jpg";
import skrew1 from "../../../assets/images/Skrew2.jpg";
import skrew2 from "../../../assets/images/Skrew3.jpg";
import dominos1 from "../../../assets/images/dominos1.jpg";
import ImageOverLay from "../../ImageOverLay/ImageOverLay";
import img2 from "../../../assets/survey-wordmark.png";
import { Padding } from "@mui/icons-material";
import { maxHeight } from "@mui/system";
export default function Carousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 8000,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 1000,
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
    { image: skrew, alt: "Skrew Game", overLayImage: img2 },
    { image: dominos1, alt: "Skrew Game", overLayImage: img2 },
    { image: skrew2, alt: "Skrew Game", overLayImage: img2 },
    { image: skrew, alt: "Skrew Game", overLayImage: img2 },
    { image: dominos1, alt: "Skrew Game", overLayImage: img2 },
    { image: skrew2, alt: "Skrew Game", overLayImage: img2 },
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
                    className="temp rounded-4 w-100 h-100"
                    src={singleImages.image}
                    alt={singleImages.alt}
                  />
                  <ImageOverLay overLayImage={singleImages.overLayImage} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
