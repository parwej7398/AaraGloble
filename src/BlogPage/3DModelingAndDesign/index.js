import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/sem (1).webp";
import { IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const ModelingAndDesign = () => {
  useEffect(() => {
    document.title =
      "Best 3D Modeling & Design Company in India| 3D Designing Company in Noida|Aara Global";
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <div>
      <SideButton />
      <div>
        <img src={blogs} alt="" className="w-full h-96 max-lg:h-56 absolute" />
        <img
          src={"https://aaraglobal.com/assets/images/shapes/wave-bot.png"}
          alt=""
          className="relative top-80 h-20 w-full animate-ping"
        />
        <img
          src={"https://aaraglobal.com/assets/images/shapes/wave-mid.png"}
          alt=""
          className="relative top-60 h-20 w-full animate-ping"
        />
        <img
          src={"https://aaraglobal.com/assets/images/shapes/wave-top.png"}
          alt=""
          className="relative top-44 h-20 w-full animate-ping"
        />
      </div>
      <div className="flex relative -top-20  lg:left-40 max-lg:top-10 left-10 flex-col gap-4">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
        </div>
        <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
          3D Modeling & Design
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">3D Modeling & Design</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="lg:h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              3D MODELING & DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            3D Modeling & Design Company
          </p>
          <p>
            Aara Global provides a range of high-quality 3D modeling and design
            services at the cheapest rate.
          </p>
          <p>
            3D modeling has become more and more popular in the last few years.
            Those eye-catching 3D effects have always been attracting users with
            ease. With the help of 3D modeling design, one can have a complete
            website that will bring in more and more users.
          </p>
          <p>
            We design your logo or text in this classic 3D style. We express
            images fully designed in High Definition, high-quality, realistic 3D
            models. We do 3D modeling, texturing, lighting, and animation.
            Design low poly game characters, objects, and backgrounds.
          </p>
          <p className="font-bold text-2xl">We Have</p>
          <div className="flex flex-col gap-3">
            <p>
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Improve Search Rankings
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              24/7 Promotion.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Generate Leads
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Gain New Customers
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Targets the Entire Marketing Funnel
            </p>
          </div>
        </div>
      </div>
      <OurPatner />
    </div>
  );
};

export default ModelingAndDesign;
