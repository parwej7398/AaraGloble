import React, { useEffect } from "react";
import OurPatner from "../../Pages/OurPartners";
import blogs from "../../Assets/Blog.png";
import smm from "../../Assets/smm.webp";
import sem from "../../Assets/sem (1).webp";
import seo from "../../Assets/seo.webp";
import ppc from "../../Assets/ppc.webp";
import em from "../../Assets/em.webp";
import cm from "../../Assets/cm.webp";
import Exhibition from "../../Assets/exhibition.webp";
import graphic from "../../Assets/gd.webp";
import { CheckCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const GraphicAndPrintDesion = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const data = [
    {
      id: 1,
      image: seo,
      title: "Business Card",
    },
    {
      id: 1,
      image: smm,
      title: "Brochure Design",
    },
    {
      id: 1,
      image: ppc,
      title: "Flyer Design",
    },
    {
      id: 1,
      image: em,
      title: "Advertising Banner Design",
    },
    {
      id: 1,
      image: cm,
      title: "Hoarding Design",
    },
    {
      id: 1,
      image: Exhibition,
      title: "Social Media Design",
    },
    {
      id: 1,
      image: graphic,
      title: "Website UI & UX Design",
    },
  ];
  return (
    <div>
      <div className="lg:pt-20">
        <img src={blogs} alt="" className="w-full max-lg:h-56 absolute" />
        <div className="flex relative lg:top-32 lg:left-40 top-10 left-10 flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Graphic & Print Design
          </p>
          <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
            <p>Home</p>
            <p>/</p>
            <p className="text-[#fa702a]">Graphic & Print Design (SEM)</p>
          </div>
        </div>
        <img
          src={"https://aaraglobal.com/assets/images/cross-icon.png"}
          alt=""
          className="relative max-lg:hidden top-32 left-[90%]"
        />
      </div>
      <div className="lg:flex gap-5 lg:pt-64 pt-40 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              PROVIDES PROFESSIONAL GRAPHICS & LOGO DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Best graphic <br />
            <span className="text-5xl font-bold drop-shadow-2xl">
              Design company
            </span>
          </p>
          <p>
            As the best graphic design company, we create impressive designs for
            your specific market.
          </p>
          <p>
            Great website design will keep your visitors active on your site for
            a long time. Our graphic designers are experts in various designing
            tools and we have many years of experience in handling graphic
            design projects for various industries. Before working on the
            design, we understand your business needs. We research your brand's
            vision and values, competition in your market, target audience
            demographics, and more. Based on the market analysis and your
            suggestions, our designers start creating innovative designs that
            exceed your expectation level.
          </p>
        </div>
      </div>
      <div className="lg:p-20 p-5 lg:flex flex-col justify-center items-center lg:px-[15%] text-center]">
        <div className="flex items-center  gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          Graphic Design Services
        </p>
      </div>

      <div className="lg:grid grid-cols-4 lg:px-[10%] p-2 max-lg:flex max-lg:flex-col lg:gap-10 gap-5">
        {data.map((event) => {
          return (
            <div className="border hover:shadow-md hover:shadow-black overflow-hidden rounded-md shadow-lg p-3 bg-white flex flex-col items-center justify-center gap-5 h-48">
              <img
                src={event.image}
                alt=""
                className="h-16 hover:animate-ping transition-all"
              />
              <p>{event.title}</p>
            </div>
          );
        })}
      </div>
      <div className="lg:flex justify-between lg:pt-10 p-4 lg:px-[15%]">
        <div className="flex flex-col  gap-5">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              GRAPHICS & LOGO DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Logo Design
          </p>
          <p>
            We provide the best logo design services at affordable prices with
            attractive quality. Our logo design experts are highly experienced
            and create a logo that best reflects your brand message.
          </p>
          <p className="font-bold text-2xl">Benefits of best logo design</p>
          <div className="flex flex-col gap-3">
            <p>
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Create a Distinctive Brand Identity
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              It provides the impression of stability and reliability
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Delivers the direct brand message
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Customers in remembering the brand
            </p>
          </div>
        </div>
        <img src={sem} alt="" className="h-[26rem]" />
      </div>
      <OurPatner />
    </div>
  );
};

export default GraphicAndPrintDesion;
