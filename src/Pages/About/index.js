import { Forward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import about from "../../Assets/about_2.webp";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <div className="lg:flex gap-5 bg-[#ffffff] items-center lg:px-[15%] lg:p-10 p-2">
      <div className="">
        <img
          src={about}
          alt=""
          className="lg:h-[29rem] relative max-lg:mt-20 max-lg:h-[20rem] max-lg:pl-10"
        />
      </div>

      <div className="lg:w-[60%] flex flex-col lg:gap-4 gap-2">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">
            EXCLUSIVE DIGITAL MARKETING AGENCY
          </p>
        </div>
        <p className="text-[#262a2e] lg:text-4xl text-2xl font-bold drop-shadow-2xl">
          About Us
        </p>

        <p className=" font-semibold">
          Aara Global is a professional digital marketing agency in Lucknow
          offering SEO, SMO, PPC, Email marketing, and other digital marketing
          services to ventures to select the right methods for their digital
          presence. We are a Lucknow and Noida-based digital marketing agency
          with having overall 10 years of experience in the digital marketing IT
          Industry. Our goal is to satisfy client satisfaction and this is often
          what we thrive for. Our experienced and robust team always is there to
          form your project, into a successful mission.
        </p>
        <p className=" font-semibold">
          At Aara Global, you'll get complete solutions associated with Digital
          marketing & Internet marketing at budget-friendly charges. we provide
          a huge array of digital marketing services which include program
          optimization (SEO), pay-per-click (PPC) advertising, and social media
          marketing. Moreover, solutions are offered as per the precise need.
        </p>
        <Link to={"/about_us"}>
          <button className="border hover:bg-[#4d4949] hover:text-white bg-[#f9f7f7] w-fit rounded-full px-1">
            Read More
            <IconButton>
              <Forward className="!border !bg-[#d9d9d9] size-10 !rounded-full !p-1" />
            </IconButton>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
