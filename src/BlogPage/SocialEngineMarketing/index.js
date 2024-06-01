import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/sem (1).webp";
import sem2 from "../../Assets/sem (2).webp";
import { IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const SocialEngineMarketing = () => {
  useEffect(() => {
    document.title =
      "Best SEM Company in Noida, India| Brand Search Engine Marketing Company | Aara Global";
  });
  const data = [
    {
      id: 1,
      title: "Keyword Ranking",
      para: "We conduct proper research with a variety of steps to make sure that that we discover the foremost relevant and popular keyword for the brand and put in a lot of effort to make sure that the searched keywords of the website are ranked well.",
    },
    {
      id: 2,
      title: "Back-end",
      para: "First, we analyze the success of the website using multifarious back-end tools such as Google analytic tools, W3C validators, etc. Then we figure out imaginable and usability issues and fix them to ensure an ideal user experience.",
    },
    {
      id: 3,
      title: "Website Visibility",
      para: "How many backlinks are there is related to various parameters like quality of content, number of pages, We actively work to improve website visibility and get more traffic in return&nbps;",
    },
    {
      id: 4,
      title: "Optimization",
      para: "With the use of the best technical expertise and the latest algorithms, we optimize the content of websites from every possible angle So that radical changes lead to lower failure rates and top rankings.",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  console.log(data1);
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
          Search Engine Marketing (SEM)
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Search Engine Marketing (SEM)</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-2 items-center">
        <img src={sem} alt="" className="lg:h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              SEARCH ENGINE MARKETING
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Full-Service Search Engine <br />
            Marketing Company
          </p>
          <p>
            Aara Global is expert in search engine marketing, offers the best
            solution to all of your search engine marketing. Our experts will
            help to expand the visibility of a website in search engine results
            pages (SERPs) we understand the gravity of an honest web presence of
            a brand website and we have all the tools at our disposal to make
            sure that your brand comes out at the highest when an inquiry is
            formed in its category.
          </p>
        </div>
      </div>
      <div className="lg:flex gap-5 bg-[#f7f7f7] lg:px-[15%] lg:p-10 p-2 items-center">
        <div>
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              SEARCH ENGINE MARKETING
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            We Are Here For SEM
          </p>
          <p className="text-[#343a40] lg:text-xl font-semibold drop-shadow-lg">
            <IconButton>
              <ArrowDropDown fontSize="large" />
            </IconButton>{" "}
            Why AaraGlobal for your Brand Search Engine Marketing?
          </p>
          <p>
            It is the results that speak. Not only the work we do for our client
            brands but also how we work for our visibility can be easily gauged.
            With technical experts who have years of experience to help you get
            accurate online visibility, you can rest assured that we will
            provide you with the excellent search engine marketing that your
            brand deserves.
          </p>
        </div>
        <img src={sem2} alt="" className="h-[26rem]" />
      </div>
      <div className="text-center flex flex-col gap-3 justify-center items-center p-20">
        <div className="flex items-center  gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          SEM Services
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

export default SocialEngineMarketing;
