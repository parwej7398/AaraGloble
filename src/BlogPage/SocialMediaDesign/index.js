import React, { useEffect } from "react";
import OurPatner from "../../Pages/OurPartners";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/sem (1).webp";
import SideButton from "../../Components/SideButton";

const SocialMediaDesign = () => {
  useEffect(() => {
    document.title = "Best Social Media Design Company in India| AaraGlobal";
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          Social Media Design
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Social Media Design</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              PROVIDING RESULT DRIVEN SOCIAL MEDIA DESIGN SERVICES
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Social Media <br />
            <span className="text-5xl font-bold drop-shadow-2xl">
              Design Company
            </span>
          </p>
          <p>
            In today's digital world is the best way to promote your business or
            product online.
          </p>
          <p>
            Aara Global provides social media design services that help you grow
            your business presence on social media. Our professional designers
            understand that everything you do online drives your company's
            growth and creates marketing materials that will work for you.
          </p>
          <p>
            As the best social media marketing agency in India, we create
            professional social media branding designs for all social media
            platforms like Facebook, Twitter, Linked In, Instagram, Pinterest,
            Google+, or any other. Our promotional designs help large, medium or
            small businesses grow.
          </p>
          <p>
            Our talented social media designers can create some professional and
            eye-catching designs while ensuring your brand standards.
          </p>
        </div>
      </div>
      <OurPatner />
    </div>
  );
};

export default SocialMediaDesign;
