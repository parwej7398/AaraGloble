import React, { useEffect } from "react";
import sem from "../../Assets/sem (1).webp";
import blogs from "../../Assets/Blog.png";
import { IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";

const EmailTemplateDesion = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
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
            Email Template Design
          </p>
          <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
            <p>Home</p>
            <p>/</p>
            <p className="text-[#fa702a]">Email Template Design</p>
          </div>
        </div>
        <img
          src={"https://aaraglobal.com/assets/images/cross-icon.png"}
          alt=""
          className="relative max-lg:hidden top-32 left-[90%]"
        />
      </div>
      <div className="lg:flex gap-5 lg:pt-64 pt-40 lg:px-[15%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="lg:h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              RESPONSIVE HTML EMAIL TEMPLATE DESIGN SERVICES
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Email Template Design Company
          </p>
          <p>Email marketing is one of the powerful marketing tools.</p>
          <p>
            In email marketing, a business message is sent directly to a group
            of people via email. The main thing to be considered when getting
            started with email marketing is the email template, layout, and
            design. If the emailer design doesn't match the campaign it can lose
            your potential customer and can also affect the success of the
            campaign. We offer you a wide range of Email Template Design which
            is suitable for your campaign as well as the brand.
          </p>
        </div>
      </div>
      <div className="lh:flex justify-between lg:pt-10 p-4 lg:px-[15%]">
        <div>
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              EMAIL TEMPLATE DESIGN
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Services Provided
          </p>
          <p className="font-bold text-2xl">
            Email Template Design Service Provided:
          </p>
          <div className="flex flex-col gap-3">
            <p>
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              professionally designed email templates
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Personalized Email and Email Templates
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Responsible
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Google Maps Integrated
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Friendly all email clients that support HTML email
            </p>
          </div>
        </div>
        <img src={sem} alt="" className="h-[26rem]" />
      </div>

      <OurPatner />
    </div>
  );
};

export default EmailTemplateDesion;
