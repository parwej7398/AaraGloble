import React from "react";
import contactss from "../../Assets/Contact.png";
import location from "../../Assets/Location.png";
import { AttachEmail, Call, EditLocation, Forward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import logo from "../../Assets/aaraglobal-2.png";
import aaratech from "../../Assets/aaratech.png";
import aaracloud from "../../Assets/aaracloud2.png";
import RecaptchaLogo from "../../Assets/RecaptchaLogo.svg.png";

const ContactUs = () => {
  const data = [
    {
      id: 1,
      title: "AARA Groups",
      Logo: logo,
      number: " +91 9266667999",
      email: "info@aaragroups.com",
      location: " 142, Sector 5, Vikas Nagar, Lucknow, 226022, (UP) India",
    },
    {
      id: 1,
      title: "AARA Technologies",
      Logo: aaratech,
      number: " +91 9266667999",
      email: "info@aaragroups.com",
      location:
        "  B-7 Real Earth City Chinhat, Lucknow, Uttar Pradesh, India 226028.",
    },
    {
      id: 1,
      title: "AARA Clouds",
      Logo: aaracloud,
      number: " +91 9266667999",
      email: "info@aaragroups.com",
      location: " C-25, First Floor, Sector 8, Noida, 201301, (UP)",
    },
  ];
  return (
    <div className="lg:pt-20 lg:pb-40">
      <div>
        <img src={contactss} alt="" className="w-full h-80 absolute" />
        <div className="flex lg:top-28 relative lg:left-40 flex-col lg:gap-4 gap-2 top-10 left-10">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">AARA GLOBAL</p>
          </div>
          <p className="text-[#343a40] lg:text-4xl text-2xl font-bold drop-shadow-2xl">
            Contact Us
          </p>
          <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
            <p>Home</p>
            <p>/</p>
            <p className="text-[#fa702a]">Contact Us</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={location}
          alt=""
          className="lg:top-[25rem] top-[20rem] absolute z-10"
        />
        <div className="lg:flex justify-center lg:z-20 relative gap-10 lg:top-[35rem] top-[20rem] lg:px-[20%]">
          <div className="lg:p-10 flex flex-col gap-4 bg-white bg-opacity-20 backdrop-blur border lg:rounded-xl shadow-2xl shadow-slate-500 lg:w-[40%] p-4">
            <div>
              <div className="flex items-center gap-3">
                <p className="h-1 w-11 bg-red-500"></p>
                <p className=" text-[#23306e] font-semibold">WE ARE HERE</p>
              </div>
              <p className="text-[#343a40] lg:text-4xl text-2xl font-bold drop-shadow-2xl">
                Contact Us
              </p>
            </div>
            <div className="flex flex-col font-semibold gap-2">
              <p className="font-bold lg:text-xl text-lg">Lucknow</p>
              <div className="flex gap-2 items-center">
                <IconButton>
                  <EditLocation />
                </IconButton>
                <p>
                  C-379, 2nd floor, Church Rd, Indira Nagar, Lucknow, 226016,
                  (UP) India
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
                <p> +918881108882</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col font-semibold gap-2">
              <p className="font-bold lg:text-xl text-lg">Noida</p>
              <div className="flex gap-2 items-center">
                <IconButton>
                  <EditLocation />
                </IconButton>
                <p>C-25, First Floor, Sector 8, Noida, 201301, (UP) India</p>
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
                <p> +91 9266667999;</p>
              </div>
            </div>
          </div>
          <div className="lg:p-10 p-4 flex flex-col gap-4 bg-[#fcfcfc] bg-opacity-20 backdrop-blur border lg:rounded-xl shadow-2xl shadow-slate-500 lg:w-[60%]">
            <div className="flex items-center gap-3">
              <p className="h-1 w-11 bg-red-500"></p>
              <p className=" text-[#23306e] font-semibold">GET IN TOUCH</p>
            </div>
            <p className="text-[#343a40] lg:text-4xl text-2xl font-bold drop-shadow-2xl">
              Get Easy Way To Our Attention
            </p>
            <div className="lg:grid grid-cols-2 *:border gap-5 flex flex-col *:shadow-inner *:shadow-black *:p-3 *:rounded-lg">
              <input type="text" placeholder="Enter First Name" />
              <input type="text" placeholder="Enter Last Name" />
              <input type="email" placeholder="Enter Email Address" />
              <input type="number" placeholder="Enter Mobile Number" />
            </div>
            <textarea
              name=""
              rows={3}
              id=""
              className="border rounded-lg shadow-inner shadow-black"
            ></textarea>
            <div className="flex items-center border p-3 w-fit rounded-xl gap-2">
              <input type="checkbox" className="size-5 " />

              <p>i'm not a robot</p>
              <img src={RecaptchaLogo} alt="" className="h-10" />
            </div>
            <button className="border bg-[#f9f7f7] w-fit rounded-full px-1">
              Submit Now
              <IconButton>
                <Forward className="!border !rounded-full !p-1" />
              </IconButton>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 gap-10 lg:pt-[50rem] pt-[24rem] lg:px-[12%]">
        {data.map((event) => {
          return (
            <div className="border shadow-xl shadow-slate-400 lg:rounded-xl p-4 ">
              <p className="text-center text-lg font-semibold">{event.title}</p>
              <img src={event.Logo} alt="" className="h-20 pl-28" />
              <div className="flex gap-1 items-center">
                <IconButton>
                  <Call />
                </IconButton>
                <p>{event.number}</p>
              </div>
              <div className="flex gap-1 items-center">
                <IconButton>
                  <AttachEmail />
                </IconButton>
                <p>{event.email}</p>
              </div>
              <div className="flex gap-1 items-center">
                <IconButton>
                  <EditLocation />
                </IconButton>
                <p>{event.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
