import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import smm from "../../Assets/social media marketing.webp";
import smm2 from "../../Assets/social media marketing2.webp";
import { ArrowDropDown } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const SocialMediaMarketing = () => {
  useEffect(() => {
    document.title = "Social Media Marketing Company in India | Aara Global";
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const data = [
    {
      id: 1,
      title: "Facebook Marketing Services",
      para: "Aara Global delivers Facebook marketing services which are to assist any sort of business with their Facebook account management. Facebook advertising services help to urge more recognition, reach more targeted audiences, determine potential customers, build a brand, and increase profits.",
    },
    {
      id: 2,
      title: "LinkedIn Marketing Services",
      para: "LinkedIn is that the world’s hottest platform for the B2B market and brand building. you'll grow your business to attach with potential people supported industry and interest. We deliver the simplest LinkedIn Advertising Services to extend an outsized number of leads and sales.",
    },
    {
      id: 3,
      title: "Instagram Marketing Services",
      para: "Instagram is that the best social media platform to interact with high audiences. we provide Instagram marketing services to draw in and increase more followers to form your Instagram account more visible.",
    },
    {
      id: 4,
      title: "Twitter Marketing Services",
      para: "Twitter Marketing Services for little, medium, and enormous businesses. Our Twitter Advertising services help to create a relationship together with your audience and convert them into sales. Also, we boost your business by using Twitter marketing policies.",
    },
    {
      id: 5,
      title: "YouTube Marketing services",
      para: "YouTube is that the largest video platform, program, and largest social media channel. we provide full services of YouTube Marketing like YouTube channel management, Video SEO Promotion, and YouTube Ads. Our social media managers deliver complete YouTube management services that include creating a YouTube channel, developing a technique to enhance key performance metrics like impressions, reach, and engagements.",
    },
    {
      id: 6,
      title: "Pinterest Marketing Services",
      para: "Pinterest may be a fast-growing online platform that permits users to upload and share images and videos for marketing purposes. we provide complete Pinterest management services to spice up your sales by attracting people, increase website traffic and conversion rates.",
    },
  ];
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
          Social Media Marketing (SMM)
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Social Media Marketing (SMM)</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-44 lg:px-[15%] lg:p-10 p-2 items-center">
        <img src={smm} alt="" className="h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              SOCIAL MEDIA MARKETING
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            We will Help the Growth <br />
            <span className="text-5xl font-bold drop-shadow-2xl">
              Of Your Business
            </span>
          </p>
          <p>
            Aara Global is a professional social media marketing, offers the
            best solution to all of your social media marketing needs. Our
            experts will help to explore your reach, maximize your online
            presence, and boost traffic.
          </p>
          <p>
            Social media is a way for individuals to meet up and coordinate
            online. In the last few years, social media have seen a surge in
            both the number and popularity of social media sites.
          </p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:px-[15%] lg:p-10 p-2 items-center">
        <div className="flex flex-col gap-3">
          <p>
            Social media marketing is a method of attaining website traffic or
            attention through social media websites. Utilizing social media for
            marketing can enable small businesses to reach more and more
            customers.
          </p>
          <p>
            We provide customized social media designs to enhancing your
            business presence on social media like Facebook, Instagram,
            Pinterest, Twitter, Linked In, and more
          </p>
          <p>
            In this digital world, increasing brand awareness and company
            exposure is the most important for business growth and
            profitability.
          </p>
        </div>
        <img src={smm2} alt="" className="lg:h-[26rem]" />
      </div>
      <div className="px-[15%] p-5 flex flex-col gap-3">
        <p className="text-[#343a40] lg:text-xl font-semibold drop-shadow-lg">
          <IconButton>
            <ArrowDropDown fontSize="large" />
          </IconButton>{" "}
          Why Choose Aara Global as your Social Media Agency?
        </p>
        <p>
          The best part about Aara Global is we are a full-service digital
          marketing company to satisfy your all Social Media Marketing need. We
          use custom social media strategies to finish your goals and business
          vision through unique social platforms and techniques.
        </p>
        <p>
          The best part about Aara Global is we are a full-service digital
          marketing company to satisfy your all Social Media Marketing need. We
          use custom social media strategies to finish your goals and business
          vision through unique social platforms and techniques.
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:p-10 p-5">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          SMM Services
        </p>
        <p>
          Increase Your Search Rankings and Get More Traffic, Leads and Sales At
          Creative Web Point following:
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-10 lg:px-[12%] lg:p-5 p-2">
        {data.map((e) => {
          return (
            <div
              key={""}
              className="flex flex-col gap-5 rounded-md h-fit bg-[#fafafa] border-l-[#ff4d1c] border-4 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#f3b9a9] p-10"
            >
              <p className="text-4xl font-semibold text-[#0f2ea8]">{e.title}</p>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>
      <OurPatner />
    </div>
  );
};

export default SocialMediaMarketing;
