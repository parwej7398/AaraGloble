import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { axiosInstence } from "../../axios.config.js";
import { Rating } from "@mui/material";
import profile from "../../Assets/profile.png";

const Testimonials = () => {
  const [value, setValue] = React.useState(4);
  const [data, setData] = useState();
  const HandleClick = async () => {
    const response = await axiosInstence.get("/client-feedback-api/", {
      headers: {
        Authorization: "Token 357f714a4169a6749f299f2d8d4acecee2ad87cd",
      },
    });
    console.log(response);
    setData(response.data.data);
  };

  const settings = {
    dots: false,
    autoplaySpeed: 2000,
    autoplay: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  useEffect(() => {
    HandleClick();
  }, []);
  console.log(data);
  return (
    <div className="max-lg:hidden">
      <div className="text-center flex-col p-20 flex items-center">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">FEEDBACK</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] text-4xl font-bold drop-shadow-2xl">
          Testimonials
        </p>
        <p>WHAT CLIENTS SAYS?</p>
      </div>
      <div className="slider-container  p-4 lg:px-[8%]">
        <Slider {...settings}>
          {data?.map((i, index) => {
            return (
              <div
                key={index}
                className=" border relative z-50 bg-[#e8e8e8] py-7 px-2 rounded-2xl shadow"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={profile} alt="" className="h-12" />
                    <div>
                      <p className="font-semibold text-lg font-serif">
                        {i.client}
                      </p>
                      <p className="text-slate-600">{i.designation}</p>
                    </div>
                  </div>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <p className="text-xs font-semibold">{i.comment}</p>
                </div>
                <img
                  src={"https://aaraglobal.com/assets/images/quote.webp"}
                  alt=""
                  className="absolute top-5 h-16 opacity-30  right-0"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div>
        <Carousel>
          <div>
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png"
              className="h-20"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png"
              className="h-20"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png"
              className="h-20"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div> */}
    </div>
  );
};

export default Testimonials;
