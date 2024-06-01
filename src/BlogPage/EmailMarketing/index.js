import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/about_2.webp";
import em2 from "../../Assets/em2.webp";
import { IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const EmailMarketing = () => {
  useEffect(() => {
    document.title =
      "Email Marketing Services| Content Marketing|Scale your Business with email | AaraGlobal";
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
          Email Marketing
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Email Marketing</p>
        </div>
      </div>
      <div className="lg:flex max-lg:flex max-lg:flex-col-reverse gap-5 pt-40 p-4 lg:pt-20 lg:px-[15%] lg:p-10 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              BULK EMAIL MARKETING SERVICES
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Full-Service Email <br />
            <span className="text-5xl font-bold drop-shadow-2xl">
              Marketing Company
            </span>
          </p>
          <p>
            As a number one Email Marketing Services providing the simplest
            content marketing strategy for increasing brand awareness, growing
            website traffic, generating leads, and promoting products and
            services. We are playing a really important role for any size
            business and enterprise in, world.
          </p>
          <p>
            In today's world, Email Marketing Services are that the more
            preferable method for business leads.
          </p>
          <p>
            Email marketing is one of the preeminent marketing tools. Electronic
            marketing may be marketing a billboard message to a group of
            individuals using email. However, email has been valued by the
            companies and therefore the customers during a timely, rich, and
            appealing thanks to advertising their information. it's widely used
            together of the fastest and best modes of selling. Since it gives
            more outcomes with less investment it's considered because of the
            best solution for any marketing campaign.
          </p>
        </div>
        <img src={sem} alt="" className="h-[30rem]" />
      </div>
      <div className="lg:flex gap-5 lg:pt-28 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={em2} alt="" className="h-[26rem]" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              ADVANTAGES OF EMAIL MARKETING
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Full-Service Email <br />
            <span className="text-5xl font-bold drop-shadow-2xl">
              Marketing Company
            </span>
          </p>
          <p>
            Improve Engagement with our greatest Mailing Solutions. Here are
            some advantages of our Bulk Email Marketing Services:
          </p>
          <div className="flex flex-col gap-3">
            <p>
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Affordable
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Generating Leads
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Increase Traffic
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Increase Online Business
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Social Benefits
            </p>
          </div>
        </div>
      </div>
      <OurPatner />
    </div>
  );
};

export default EmailMarketing;
