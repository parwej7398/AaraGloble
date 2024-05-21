import React, { useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Fade, IconButton } from "@mui/material";
import { Close, Email } from "@mui/icons-material";
import RecaptchaLogo from "../Assets/RecaptchaLogo.svg.png";

const Layout = ({ children }) => {
  const [opens, setOpens] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div>
      <Header />
      {children}
      <div className="fixed right-10 border bg-[#7f58fc] rounded-full p-1 bottom-14">
        <IconButton>
          <Email
            onClick={() => setOpens(true)}
            className="!text-5xl !text-white"
          />
        </IconButton>
      </div>
      {opens ? (
        <div>
          <div className="fixed right-10 border bg-[#7f58fc] rounded-full p-1 bottom-14">
            <IconButton
              onClick={(e) =>
                anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
              }
            >
              {open ? (
                <Close className="text-white !text-5xl" />
              ) : (
                <Email
                  onClick={() => setOpens(true)}
                  className="!text-5xl !text-white"
                />
              )}
            </IconButton>
          </div>
          <Fade in={Boolean(open)}>
            <div className="fixed z-50 lg:right-8 right-2 max-lg:left-2 shadow border lg:h-[35.5rem] bg-white lg:w-96 bottom-24">
              <form action="" className="flex p-4   flex-col gap-4 w-full">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">Contact Us</p>
                  <IconButton>
                    <Close onClick={() => setOpens(false)} />
                  </IconButton>
                </div>
                <hr />
                <input
                  className="border p-2 rounded-xl shadow-inner shadow-slate-700"
                  type="text"
                  placeholder="Enter First Name"
                />
                <input
                  className="border p-2 rounded-xl shadow-inner shadow-slate-700"
                  type="text"
                  placeholder="Enter Last Name"
                />
                <input
                  className="border p-2 rounded-xl shadow-inner shadow-slate-700"
                  type="email"
                  placeholder="Enter Email Address"
                />
                <input
                  className="border p-2 rounded-xl shadow-inner shadow-slate-700"
                  type="number"
                  placeholder="Enter Mobile Number"
                />
                <textarea
                  className="border p-2 rounded-xl shadow-inner shadow-slate-700"
                  name=""
                  rows={3}
                  id=""
                  placeholder="Massage"
                ></textarea>
                <div className="flex justify-between border p-3 w-[20rem] rounded shadow-inner shadow-slate-700">
                  <div className="flex items-center  gap-2">
                    <input type="checkbox" className="size-5 " />
                    <p>i'm not a robot</p>
                  </div>

                  <img src={RecaptchaLogo} alt="" className="h-10" />
                </div>
                <button
                  className="text-left shadow-inner shadow-slate-700 border w-fit p-1 rounded-xl"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Fade>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Layout;
