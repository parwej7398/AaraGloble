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

const Footer = () => {
  return (
    <>
      {/* <div>
        <svg
          class="mkdf-wavy-effect"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsxlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
          enable-background="new 0 0 1920 81.717"
          xmlspace="preserve"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg>
      </div> */}
      <div className="lg:grid lg:grid-cols-3 bg-[#f7f7f7] lg:gap-5 max-lg:gap-10 z-50 max-lg:flex max-lg:flex-col p-[3%]">
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
              <p>Search Engine Optimization (SEO)</p>
              <p>Social Media Marketing (SMM)</p>
              <p>Search Engine Marketing (SEM)</p>
              <p>Pay Per Click (PPC) Campaign</p>
              <p>Email Marketing</p>
              <p>Exhibition & Signage Design Services</p>
            </div>
            <div className="flex flex-col font-semibold gap-2">
              <p>Content Marketing</p>
              <p>Graphic & Print Design</p>
              <p>Social Media Design</p>
              <p>Email Template Design</p>
              <p>3D Modeling & Design</p>
              <p>Promo Video production & Design</p>
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
              <p>
                B-7 Real Earth City Chinhat, Lucknow 226028, Uttar Pradesh,
                India
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <IconButton>
                <AttachEmail />
              </IconButton>
              <p>info@aaratechnologies.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <IconButton>
                <Call />
              </IconButton>
              <p> +91-8881108882, +91-8303171321</p>
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
      <div className="flex shadow-inner shadow-slate-600 h-14 max-lg:hidden items-center  justify-between">
        <p>2022 © AARA Global | All right reserved.</p>
        <p className="flex gap-5">
          <span>Privacy Policy</span> <span>Term & Conditions</span>
        </p>
        <p>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
        </p>
      </div>
    </>
  );
};

export default Footer;
