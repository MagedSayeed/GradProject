import Slider from "react-slick";

export default function GameSlider({ album }) {
  var settings = {
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 4,
    speed: 500,
    accessibility: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {album.map((im, id) => {
        return (
          <div key={id} className="pe-1 pe-md-3 outline-none  bg-transparent ">
            <img src={im} alt="" className=""  />
          </div>
        );
      })}
    </Slider>
  );
}
