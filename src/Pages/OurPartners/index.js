import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fusion from "../../Assets/fusion.webp";
import csir from "../../Assets/csir.webp";
import nabeel from "../../Assets/nabeel.webp";
import irctc from "../../Assets/irctc.webp";
import lawtrend from "../../Assets/lawtrend.webp";
import easybuk from "../../Assets/easybuk.webp";
import momentous from "../../Assets/momentous.webp";
import olykefoods from "../../Assets/olykefoods.webp";
import taru from "../../Assets/taru.webp";
import rajsoundwave_studio from "../../Assets/rajsoundwave_studio.webp";
import Slider from "react-slick";

const OurPatner = () => {
  const data = [
    {
      id: 1,
      images: fusion,
    },
    {
      id: 2,
      images: csir,
    },
    {
      id: 3,
      images: nabeel,
    },
    {
      id: 4,
      images: irctc,
    },
    {
      id: 5,
      images: lawtrend,
    },
    {
      id: 6,
      images: easybuk,
    },
    {
      id: 7,
      images: momentous,
    },
    {
      id: 8,
      images: olykefoods,
    },
    {
      id: 9,
      images: taru,
    },
    {
      id: 10,
      images: rajsoundwave_studio,
    },
  ];
  const settings = {
    dots: false,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="lg:p-20 flex flex-col lg:gap-10 gap-4">
      <div className="text-center flex-col flex items-center">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">PARTNERS</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] text-4xl font-bold drop-shadow-2xl">
          Our Partners
        </p>
      </div>
      <div className="slider-container max-lg:p-4 lg:px-[8%]">
        <Slider {...settings}>
          {data?.map((i, index) => {
            return (
              <div
                key={index}
                className="border overflow-hidden p-5 rounded-2xl shadow lg:h-36"
              >
                <img
                  src={i.images}
                  className="lg:opacity-20 lg:hover:opacity-100 lg:h-24 hover:scale-110 duration-700 transition-all lg:pl-10"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default OurPatner;
