import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/sem (1).webp";
import sem2 from "../../Assets/sem (2).webp";
import { IconButton } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const PromoVideoMarketing = () => {
  useEffect(() => {
    document.title =
      "Best Video Marketing Company & Agency in India| AaraGlobal";
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  const data = [
    {
      id: 1,
      title: "Increased conversion rates",
      para: "Landing pages with videos get 80% of the conversion rates because it influences the buying behavior of the visitor. A video with compelling content attracts viewers and helps the brand convert them into leads. Built-in tutorials or testimonials are what people are looking for.",
    },
    {
      id: 1,
      title: "Better SEO",
      para: "Search engines prefer engaging content in the form of videos and animations. A well-marketed video can help you get longer page views. With the biggest platforms like Youtube, a company or a brand can increase its visibility and experience more insights.",
    },
    {
      id: 1,
      title: "Trust and credibility",
      para: "Want to make a good personality? Video is the perfect way to do this as it enables companies to strengthen emotional bonds with visitors and, therefore, earn their trust. This belief influences the decision-making of the visitor and translates it into further sales.",
    },
    {
      id: 1,
      title: "Social Share",
      para: "Have you come across the word viral? Yes, it is only possible with video. Today, video is the only channel that goes popular very easily. Great and engaging content helps companies to get more social shares and hence increase reputation and sales.",
    },
    {
      id: 1,
      title: "brand awareness",
      para: "The problem with many brands is that no one knows they even exist. Video marketing is the only way to promote it with the help of emotional assets first and foremost in the mind of the people.",
    },
    {
      id: 1,
      title: "Promised Deliverables",
      para: "A holistic business approach, meaningful video content must be produced by all teams in a conversational, actionable and measurable manner.",
      para2:
        "As we craft your story through video, we keep your target audience in mind. From creative ideas to actual video delivery, we have a timeline to stick to.",
      para3:
        "Videos are easy to digest. They are amusing and charming. In addition, they offer potentially huge Returns on Investment (ROI) through multiple channels.",
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
          Promo Video production & Design
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Promo Video production & Design</p>
        </div>
      </div>
      <div className="lg:flex lg:gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="lg:h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              PROMO VIDEO PRODUCTION & DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Video Marketing Agency
          </p>
          <p>
            Video is not any longer just a neighborhood of the general marketing
            plan
          </p>
          <p>
            Marketing is not long-lasting about what you create, but the stories
            you tell. Today nobody needs to read a white book or a typical
            digital article. With the growing trend of audio-visual, today, A
            video is an efficient sort of communication that must be integrated
            into your existing marketing strategies.
          </p>
          <p>
            Visual content can easily influence search and social results with a
            great opportunity to marry the power of ideas.
          </p>
          <p>
            Visual content can easily influence search and social results with a
            great opportunity to marry the power of ideas. Today marketing
            tycoons prefer video because it gives the most information to the
            target audience in the shortest duration possible. Helping the
            audience get in touch with the information brand is trying to
            communicate.
          </p>
          <p>
            Video, a versatile form of conversation for your existing marketing
            plan.
          </p>
          <p>
            The video has gone viral on social media. It has revolutionized the
            entire business strategy from a singular marketing strategy. Promote
            and market your product or service, increase engagement across your
            digital and social channels, educate your consumers and customers,
            and reach your audience through a new medium.
          </p>
        </div>
      </div>
      <div className="lg:flex gap-5 bg-[#f7f7f7] lg:px-[15%] lg:p-10 p-4 items-center">
        <div>
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              PROMO VIDEO PRODUCTION & DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            We Are Here For SEM
          </p>
          <p className="text-[#343a40] lg:text-2xl font-bold drop-shadow-lg">
            <IconButton>
              <ArrowDropDown fontSize="large" />
            </IconButton>{" "}
            Why AaraGlobal for your Brand Promo Video production & Design?
          </p>
          <p>
            It is the results that speak. Not only the work we do for our client
            brands but also how we work for our visibility can be easily gauged.
            With technical experts who have years of experience to help you get
            accurate online visibility, you can rest assured that we will
            provide you with the excellent Promo Video production & Design that
            your brand deserves.
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
          Promo Video production & <br /> Design
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col gap-5 lg:px-[12%] p-5">
        {data.map((e) => {
          return (
            <div className="flex flex-col gap-5 rounded-md h-fit bg-[#ebebeb] border-l-[#ff4d1c] border-4 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#f3b9a9] p-10">
              <p className="text-4xl font-semibold text-[#0f2ea8]">{e.title}</p>
              <p>{e.para}</p>
              <p>{e.para2}</p>
              <p>{e.para3}</p>
            </div>
          );
        })}
      </div>
      <OurPatner />
    </div>
  );
};

export default PromoVideoMarketing;
