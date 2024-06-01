import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import site_audit from "../../Assets/rank tracker.webp";
import site_exp2 from "../../Assets/mockup2-bg.svg";
import OurPatner from "../../Pages/OurPartners";
import { Forward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SideButton from "../../Components/SideButton";

const RankTracker = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const data = [
    {
      id: 1,
      title: "Paid Search Advertising",
      para: "Search ads The ads you see at the top of Google's search results page. We have the ability to implement great strategies for paid search marketing through relevant campaigns. Paid search advertising services help customers gain more visibility online, increase conversion rates and instant traffic.",
    },
    {
      id: 2,
      title: "Display Advertising",
      para: "Display advertising is a very effective way to get the message across to the target audience. These ads are also pay-per-click. Our experts do PPC advertising on behalf of the brand to promote the brand online. Display advertising campaigns help improve ROI, generate brand awareness, and increase target audiences.",
    },
    {
      id: 3,
      title: "Display Advertising",
      para: "Display advertising is a very effective way to get the message across to the target audience. These ads are also pay-per-click. Our experts do PPC advertising on behalf of the brand to promote the brand online. Display advertising campaigns help improve ROI, generate brand awareness, and increase target audiences.",
    },
    {
      id: 4,
      title: "Display Advertising",
      para: "Display advertising is a very effective way to get the message across to the target audience. These ads are also pay-per-click. Our experts do PPC advertising on behalf of the brand to promote the brand online. Display advertising campaigns help improve ROI, generate brand awareness, and increase target audiences.",
    },
  ];
  return (
    <div className="lg:pt-20">
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
      <div className="flex relative -top-28  lg:left-40 max-lg:top-10 left-10 flex-col gap-4">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
        </div>
        <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
          Rank Tracker
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Rank Tracker</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-2 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">RANK TRACKER</p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Rank Tracker in
            <br />
            Noida, India
          </p>
          <p>
            Rank Tracker Company offering Rank Tracker Marketing Services to
            pull up your websites and help you to earn better ROI.
          </p>
          <p>
            Aara Global provides result-orientated pay-per-click campaign (PPC)
            services for both local and global clients. Rank Tracker or PPC
            advertising is the most efficient way to advertise your business
            online.
          </p>
          <p>
            We have experts that provide successful PPC marketing campaigns. We
            also offer affordable Google Adword Promotion that helps to maximum
            traffic and excellent results for your business.
          </p>
          <p>
            Our Rank Tracker build in the development and implementation of Rank
            Tracker marketing strategies, keyword search and selection, ad text
            script, conversion tracking, landing page optimization, campaign
            monitoring, and reporting. We create PPC campaigns beyond all major
            advertising platforms like Google Adwords, Facebook, and Twitter.
          </p>
        </div>
        <img src={site_audit} alt="" className="lg:h-[26rem]" />
      </div>
      <div className="lg:flex gap-5 bg-[#f7f7f7] lg:px-[15%] lg:p-10 p-2 items-center">
        <img src={site_exp2} alt="" className="lg:h-[26rem]" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              PPC MANAGEMENT SERVICES
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Why Aara Global for Availing Quality PPC Management Services?
          </p>
          <p className="text-[#343a40] lg:text-xl font-semibold drop-shadow-lg">
            In the current market, Creative Aara Global is recognized as a
            consistently good in quality Google Adwords OR Rank Tracker service,
            provider. We offering top-grade Rank Tracker service for small,
            medium, and big businesses. Our professional team of PPC experts
            deal with clients for paid advertising, understands clients need and
            deliver what they are looking for in PPC advertising.
          </p>
        </div>
      </div>
      <div className=" lg:ml-40 border shadow-2xl rounded-md lg:p-16 p-2 lg:px-40 w-fit ">
        <form className="flex flex-col gap-7 justify-center items-center">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">RANK CHECKER</p>
            <p className="h-1 w-11 bg-red-500"></p>
          </div>
          <p className="text-[#343a40] lg:text-4xl text-2xl font-bold drop-shadow-2xl">
            Check Your Website Rank
          </p>
          <form className="flex max-lg:flex-col gap-4 lg:gap-10 lg:items-center">
            <img
              src="https://aaraglobal.com/assets/images/shapes/6.png"
              alt=""
              className="h-16 max-lg:hidden animate-bounce"
            />
            <input
              type="text"
              placeholder="Website Link Here"
              className="border-2 p-3 rounded-2xl shadow-inner shadow-black w-80"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-2 p-3 rounded-2xl shadow-inner shadow-black w-80"
            />
            <img
              src="https://aaraglobal.com/assets/images/shapes/5.png"
              alt=""
              className="h-16 max-lg:hidden animate-spin"
            />
          </form>

          <button className="border bg-[#f9f7f7] w-fit rounded-full px-1">
            Submit Now
            <IconButton>
              <Forward className="!border !rounded-full !p-1" />
            </IconButton>
          </button>
        </form>
      </div>
      <div className="text-center flex flex-col gap-3 justify-center items-center lg:p-20 p-4">
        <div className="flex items-center  gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          Rank Tracker
        </p>
        <p className="px-[30%]">
          As a Google Adwords agency, we are offering pay-per-click services to
          grow your business. Rank Tracker is a way to buy visits to your site
          by paying for advertising platforms like Google, Yahoo, Bing, etc.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 justify-center items-center gap-10 lg:px-[12%] lg:p-5 p-2">
        {data.map((e) => {
          return (
            <div
              key={""}
              className="flex flex-col gap-5 rounded-md h-fit bg-[#fafafa] border-l-[#ff4d1c] border-4 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#f3b9a9] lg:p-10 p-4"
            >
              <p className="lg:text-4xl text-2xl font-semibold text-[#0f2ea8]">
                {e.title}
              </p>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>
      <OurPatner />
    </div>
  );
};

export default RankTracker;
