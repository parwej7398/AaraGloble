import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { axiosInstence } from "../../axios.config.js";

const OurPatner = () => {
  const [data, setData] = useState();
  const HandleClick = async () => {
    const respose = await axiosInstence.get("/client-api/", {
      headers: {
        Authorization: "Token 357f714a4169a6749f299f2d8d4acecee2ad87cd",
      },
    });
    setData(respose.data.data);
  };
  useEffect(() => {
    HandleClick();
  }, []);
  console.log(data);

  const settings = {
    dots: false,
    autoplaySpeed: 2000,
    autoplay: false,
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
                className="border overflow-hidden p-6 rounded-2xl shadow lg:h-36"
              >
                <img
                  src={i.logo}
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
