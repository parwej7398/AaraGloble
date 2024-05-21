import { Forward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import expand from "../../Assets/eexpert_team.webp";
import CostEffective from "../../Assets/cost_effective.webp";
import BestUnique from "../../Assets/best_unique.webp";
import Strategy from "../../Assets/strategy.webp";

const WhyUs = () => {
  const categries = [
    {
      id: 1,
      images: expand,
      titles: "Expert Team",
      paragraph:
        "Our digital marketing expert understands our client's business needs first. Then make a bit plan and set realistic deadlines to finishthe work. We communicate constantly with our clients to supply themwith progress updates",
    },
    {
      id: 2,
      images: CostEffective,
      titles: "Cost Effective",
      paragraph: "We are providing an economical solution for your business..",
    },
    {
      id: 3,
      images: BestUnique,
      titles: "Best & Unique",
      paragraph:
        " We are distinctive in light of the fact that we are computerizedshowcasing aficionados and consistently put resources into theadvancement of our group's advanced abilities.",
    },
    {
      id: 4,
      images: Strategy,
      titles: "Strategy",
      paragraph:
        " Your prosperity on computerized stages begins with how youcharacterize your association’s advanced encounters, be it internetshopping knowledge of your online business store..",
    },
  ];
  return (
    <div className="p-5">
      <div className="lg:flex gap-5 items-center bg-[#ffffff] lg:px-[15%] lg:p-10">
        <div className="flex flex-col lg:w-[50%] gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">SKILLS</p>
          </div>
          <p className="text-[#343a40] lg:text-3xl text-2xl font-bold drop-shadow-2xl">
            Why Us
          </p>
          <p>
            Aara Global is a pioneer and dynamic digital agency where you'll get
            a good range of solutions for digital marketing. We are experts deal
            in digital marketing and traditional digital advertising services
            etc. We use the simplest methods, analytical, creative, and unique
            approaches to bringing an excellent level of satisfaction for the
            purchasers. We as a team of dynamic and young digital marketing
            professionals provide customized and tailored solutions for digital
            marketing to satisfy different purposes of selling.
          </p>
          <p>
            We are equipped with most advanced digital marketing tools which
            have brought the digital revolution. Our digital marketing experts
            organize the meeting with the clients to discuss their needs and
            requirements to provide the best services to them. The experts of
            our company have precisely worked on Search engine optimization,
            social media optimization, content marketing, and social media
            marketing. We focus on segmentation in order to avoid later problems
            and target the niche market easily.
          </p>
          <p>
            We are dedicated to escalating our business clients to a new level
            of success. We aim at understanding your business needs at first
            before finding the most suitable marketing strategy. Each digital
            marketing campaign is designed to simplify digital marketing
            solutions for businesses. We are committed to the use of transparent
            marketing strategies so we take your business to a new level of
            success..
          </p>

          <button className="border bg-[#f9f7f7] w-fit rounded-full px-1">
            Discover Now{" "}
            <IconButton>
              <Forward className="!border !rounded-full !p-1" />
            </IconButton>
          </button>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-5 p-5">
          {categries?.map((event) => {
            return (
              <div className="hover:shadow-2xl shadow-2xl border p-2 rounded-md lg:w-60  hover:shadow-[#85abb9]">
                <img src={event.images} alt="" className="animate-bounce" />
                <p>{event.titles}</p>
                <p>{event.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" lg:ml-40 border shadow-2xl rounded-md lg:p-16 p-2 lg:px-40 w-fit ">
        <form className="flex flex-col gap-7 justify-center items-center">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">ONLINE CHECKER</p>
            <p className="h-1 w-11 bg-red-500"></p>
          </div>
          <p className="text-[#343a40] lg:text-4xl text-2xl font-bold drop-shadow-2xl">
            Check Your Website Traffic
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
              placeholder="Enter Your Name"
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
    </div>
  );
};

export default WhyUs;
