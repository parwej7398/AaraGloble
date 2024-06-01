import {
  AttachEmail,
  Call,
  EditLocation,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/wave-top.png";

const Footer = () => {
  return (
    <>
      <img src={img} alt="" className="animate-pulse max-lg:hidden" />
      <div className="lg:grid lg:grid-cols-3 bg-[#ffffff] lg:gap-5 max-lg:gap-10 z-50 max-lg:flex max-lg:flex-col p-[3%]">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xl font-semibold">About Company</p>
            <div className="flex">
              <p className="h-1 w-10 bg-red-400"></p>
              <p className="h-1 w-10 bg-black"></p>
            </div>
          </div>

          <p>
            Aara Global is a professional digital marketing agency in Lucknow
            offering SEO, SEM, SMM, SMO, PPC, and other digital marketing
            services to ventures to select the right technology for their dream
            project. We are a Lucknow and Noida-based digital marketing agency
            with having overall 10 years of experience in the IT Industry. Our
            goal is to satisfy client satisfaction and this is often what we
            thrive for. Our experienced and robust team always is there to form
            your project, into a successful mission. Read More...
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xl font-semibold">Our Services</p>
            <div className="flex">
              <p className="h-1 w-10 bg-red-400"></p>
              <p className="h-1 w-10 bg-black"></p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col font-semibold gap-2">
              <Link to={"/search_engine_optimization"}>
                <p className="hover:text-red-400 ">
                  Search Engine Optimization (SEO)
                </p>
              </Link>
              <Link to={"/social_media_marketing"}>
                <p className="hover:text-red-400 ">
                  Social Media Marketing (SMM)
                </p>
              </Link>
              <Link to={"/social_engine_marketing"}>
                <p className="hover:text-red-400 ">
                  Search Engine Marketing (SEM)
                </p>
              </Link>
              <Link to={"/pay_per_click"}>
                <p className="hover:text-red-400 ">
                  Pay Per Click (PPC) Campaign
                </p>
              </Link>
              <Link to={"/email_marketing"}>
                <p className="hover:text-red-400 ">Email Marketing</p>
              </Link>
              <Link to={"/exhibition_and_signge_design"}>
                <p className="hover:text-red-400 ">
                  Exhibition & Signage Design Services
                </p>
              </Link>
            </div>
            <div className="flex flex-col font-semibold gap-2">
              <Link to={"/content_marketing"}>
                <p className="hover:text-red-400 ">Content Marketing</p>
              </Link>
              <Link to={"/graphic_and_print_desion"}>
                <p className="hover:text-red-400 ">Graphic & Print Design</p>
              </Link>
              <Link to={"/social_media_design"}>
                <p className="hover:text-red-400 ">Social Media Design</p>
              </Link>
              <Link to={"/email_template_desion"}>
                <p className="hover:text-red-400 ">Email Template Design</p>
              </Link>
              <Link to={"/3D_modeling_and_design"}>
                <p className="hover:text-red-400 ">3D Modeling & Design</p>
              </Link>
              <Link to={"/promo_video_marketing"}>
                <p className="hover:text-red-400 ">
                  Promo Video production & Design
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xl font-semibold">Our Services</p>
            <div className="flex">
              <p className="h-1 w-10 bg-red-400"></p>
              <p className="h-1 w-10 bg-black"></p>
            </div>
          </div>
          <div className="flex flex-col font-semibold gap-2">
            <div className="flex gap-2 items-center">
              <IconButton>
                <EditLocation />
              </IconButton>
              <p className="hover:text-red-400 cursor-pointer">
                B-7 Real Earth City Chinhat, Lucknow 226028, Uttar Pradesh,
                India
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <IconButton>
                <AttachEmail />
              </IconButton>
              <p className="hover:text-red-400 cursor-pointer">
                info@aaratechnologies.com
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <IconButton>
                <Call />
              </IconButton>
              <p>
                <span className="hover:text-red-400 cursor-pointer">
                  +91-8881108882,
                </span>
                <span className="hover:text-red-400 cursor-pointer">
                  +91-8303171321
                </span>
              </p>
            </div>

            <div className="flex gap-5">
              <img
                src={
                  "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/downlod_icons/play-store.webp"
                }
                alt=""
                className="h-12"
              />
              <img
                src={
                  "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/downlod_icons/app-store.webp"
                }
                className="h-12"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-10 shadow-inner shadow-slate-600 h-14 max-lg:hidden items-center  justify-between">
        <p className="hover:text-red-400 cursor-pointer">
          2022 © AARA Global | All right reserved.
        </p>
        <p className="flex gap-5">
          <span className="hover:text-red-400 cursor-pointer">
            Privacy Policy
          </span>{" "}
          <span className="hover:text-red-400 cursor-pointer">
            Term & Conditions
          </span>
        </p>
        <p className="*:rounded-full *:bg-[#d6d6d6]  flex gap-5">
          <Link to={"https://www.facebook.com/aaraglobal/"}>
            <IconButton>
              <Facebook />
            </IconButton>
          </Link>
          <Link to={"/"}>
            <IconButton>
              <Twitter />
            </IconButton>
          </Link>
          <Link to={"https://www.instagram.com/aara.global/?hl=en"}>
            <IconButton>
              <Instagram />
            </IconButton>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
