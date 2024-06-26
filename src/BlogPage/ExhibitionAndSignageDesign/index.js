import React, { useEffect } from "react";
import OurPatner from "../../Pages/OurPartners";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/sem (1).webp";
import SideButton from "../../Components/SideButton";

const ExhibitionAndSigngeDesign = () => {
  useEffect(() => {
    document.title = "Exhibition Graphics and Event Signage| AaraGlobal";
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
          Exhibition & Signage Design
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Exhibition & Signage Design</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              EXHIBITION & SIGNAGE DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Exhibition & Signage <br />
            <span className="lg:text-5xl  font-bold drop-shadow-2xl">
              Design Company
            </span>
          </p>
          <p>
            Aara Global is expert in Exhibition & Signage Design, offers the
            best solution to all of your Exhibition & Signage Design. Our
            experts will help to expand the visibility of a website in search
            engine results pages (SERPs) we understand the gravity of an honest
            web presence of a brand website and we have all the tools at our
            disposal to make sure that your brand comes out at the highest when
            an inquiry is formed in its category.
          </p>
          <p>
            When designing a sign or banner for exhibitions or any other event,
            we work closely with clients. All works are first approved by
            clients, banners, signage, etc are made as per their requirement.
          </p>
          <p>
            All the innovative work for exhibition stalls, signage, banners,
            etc. is done by our professional expert’s design team. We use the
            latest digital technology and production methods to tailor your
            creative design to the latest trends.
          </p>
          <p>
            Our innovative team facilitates you to build your exhibition stall
            without any hassle by proper manufacturing, printing, and executing
            it. Our professional’s design team creates interactive exhibition
            signage designs that add value to your experiential marketing space
            such as exhibitions, tradeshows, events, conferences, and brand
            activations.
          </p>
        </div>
      </div>
      <OurPatner />
    </div>
  );
};

export default ExhibitionAndSigngeDesign;
