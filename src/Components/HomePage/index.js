import { Forward, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import images from "../../Assets/rocket.webp";
import About from "../../Pages/About";
import WhyUs from "../../Pages/WhyUs";
import OurServices from "../../Pages/OurServices";
import OurPatner from "../../Pages/OurPartners";
import Testimonials from "../../Pages/Testimonials";

const HomePage = () => {
  useEffect(() => {
    document.title =
      "Best Digital Marketing Agency | Best SEO, SMO, SMM Company | Aara Global.";
  }, []);
  return (
    <>
      <div className="lg:flex gap-5 lg:pt-40 lg:px-[15%] bg-[#f4f2fa] h-screen lg:p-10 p-2">
        <div className="flex flex-col gap-4 lg:w-[50%] justify-center ">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] max-lg:text-sm font-semibold">
              DIGITAL MARKETING AGENCY
            </p>
          </div>
          <p className="text-[#343a40] text lg:text-5xl text-3xl font-serif font-extrabold drop-shadow-2xl">
            Digital Marketing <br />
            Business Solution
          </p>
          <p className="text-lg text-[#343a40] font-semibold">
            Aara Global team of dedicated go-getters in the field of SEO &
            Digital Marketing.
          </p>
          <div className="flex items-center gap-2">
            <button className="border bg-[#fafbfb] px-1 h-fit rounded-full">
              GetQoute Now
              <IconButton>
                <Forward className="!border !rounded-full !p-1" />
              </IconButton>
            </button>
            <div className="border p-4 rounded-full bg-white w-fit">
              <IconButton>
                <PlayArrow />
              </IconButton>
            </div>
            <button>Intro Video</button>
          </div>
        </div>
        <div>
          <img src={images} alt="" className="animate-bounce" />
        </div>
      </div>
      <About />
      <WhyUs />
      <OurServices />
      <Testimonials />
      <OurPatner />
    </>
  );
};

export default HomePage;
