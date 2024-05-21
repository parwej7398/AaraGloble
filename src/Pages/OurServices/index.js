import React from "react";
import seo from "../../Assets/seo.webp";
import smm from "../../Assets/smm.webp";
import sem from "../../Assets/sem.webp";
import ppc from "../../Assets/ppc.webp";
import em from "../../Assets/em.webp";
import cm from "../../Assets/cm.webp";
import Exhibition from "../../Assets/exhibition.webp";
import graphic from "../../Assets/gd.webp";
import socalmedia from "../../Assets/social-media.webp";
import email from "../../Assets/email.webp";
import modeling from "../../Assets/3d-model.webp";
import videomarketing from "../../Assets/video-marketing.webp";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      img: seo,
      title: "Search Engine Optimization",
      path: "/search_engine_optimization",
    },
    {
      id: 2,
      img: smm,
      title: "Social Media Marketing",
      path: "/social_media_marketing",
    },
    {
      id: 3,
      img: sem,
      title: "Social Engine Marketing",
      path: "/social_engine_marketing",
    },
    {
      id: 4,
      img: ppc,
      title: "Pay Per Click",
      path: "/",
    },
    {
      id: 5,
      img: em,
      title: "Email Marketing",
      path: "/email_marketing",
    },
    {
      id: 6,
      img: cm,
      title: "Content Marketing",
      path: "/content_marketing",
    },
    {
      id: 7,
      img: Exhibition,
      title: "Exhibition & Signage Design",
      path: "/exhibition_and_signge_design",
    },
    {
      id: 8,
      img: graphic,
      title: "Graphic & Print Design",
      path: "/graphic_and_print_desion",
    },
    {
      id: 9,
      img: socalmedia,
      title: "Social Media Design",
      path: "/social_media_design",
    },
    {
      id: 10,
      img: email,
      title: "Email Template Design",
      path: "/email_template_desion",
    },
    {
      id: 11,
      img: modeling,
      title: "3D Modeling & Design",
      path: "/3D_modeling_and_design",
    },
    {
      id: 12,
      img: videomarketing,
      title: "Promo Video production & Design..",
      path: "/promo_video_marketing",
    },
  ];
  // console.log(categories);
  return (
    <div className="bg-[#fafafa] lg:p-10 flex flex-col gap-5">
      <div className="text-center flex-col flex items-center">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES WE OFFER</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] text-4xl font-bold drop-shadow-2xl">
          Our Services
        </p>
        <p>
          With the help of 100+ digital experts in their fields we offer the
          following:
        </p>
      </div>
      <div className="lg:grid grid-cols-4 lg:px-[10%] p-2 max-lg:flex max-lg:flex-col lg:gap-10 gap-5">
        {categories.map((event) => {
          return (
            <div
              key={""}
              onClick={() => navigate(event.path)}
              className="border hover:shadow-xl hover:shadow-slate-500 overflow-hidden rounded-md shadow-lg p-3 bg-white flex flex-col items-center justify-center gap-5 h-48"
            >
              <img src={event.img} alt="" className="h-16 hover:animate-ping" />
              <button className="font-semibold text-lg">{event.title}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
