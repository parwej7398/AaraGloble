import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import contect_marketing from "../../Assets/content-marketing.png";
import contect_marketing2 from "../../Assets/contect marketing 2.png";
import { IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const ContentMarketing = () => {
  useEffect(() => {
    document.title =
      "Best Content Marketing Agency|High Quality Content Marketing Services | AaraGlobal";
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
      title: "Benefits of Content Marketing",
      para: "As a Best Content Marketing Agency, we implement solid content creation strategies to extend the web visibility of our clients.",
    },
    {
      id: 2,
      title: "Link Building and Social Sharing",
      para: "Great content creates the chance for link building and shared content on social media platforms. Also, help to extend backlinks on social media.",
    },
    {
      id: 3,
      title: "Lower costs",
      para: "We provide the cheapest content & digital marketing services for your digital marketing needs.",
    },
    {
      id: 4,
      title: "Generate More Leads",
      para: "Ultraexpensive Content offers a convenient experience to your visitors that generates more qualified leads.",
    },
    {
      id: 5,
      title: "Increased Visibility",
      para: "Quality content helps to realize an honest ranking on Search engines that's why to extend your product or brand visibility to more relevant and targeted customers supported the search terms.",
    },
    {
      id: 6,
      title: "Build Customer Trust",
      para: "Content helps your business build a connection together with your visitors. When your content shows within the right place, right time with the targeted visitors. it'll improve your brand's influence and eventually build client’s trust.",
    },
    {
      id: 7,
      title: "Better User Interaction",
      para: "Valuable content will help to scale back bounce rates and growing audience engagement, developing your brand presence, and driving sales.",
    },
    {
      id: 8,
      title: "Increase Traffic and Conversions",
      para: "Quality content helps to Increased ROI and traffic to your web pages means higher rankings, more links, and premium social shares.",
    },
    {
      id: 9,
      title: "Build Brand Awareness",
      para: "Quality content can build brand awareness.",
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
          Content Marketing
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Content Marketing</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[15%] lg:p-10 p-2 items-center">
        <img src={contect_marketing} alt="" className="lg:h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              CONTENT MARKETING AGENCY
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Target Your relevant Client <br />
            with Aara Global
          </p>
          <p>
            As a number one content marketing services company are engineered to
            realize your business goals.
          </p>
          <p>
            Our content marketing plan of action may be a unity of research,
            creativity, and optimization that increases visibility and reach.
            Our content writers provide high-quality content consistent with
            every customer’s specific needs. Content marketing is that the
            finest key to succeeding in the highest audiences.
          </p>
          <p>
            Aara Global is the one-stop digital & content marketing companion
            for content creation, publishing to distribution, and promotion.
            Great content marketing helps for a successful program Optimization
            (SEO) in leading to best Google rankings for your site.
          </p>
        </div>
      </div>
      <div className="lg:flex gap-5 bg-[#f7f7f7] lg:px-[15%] lg:p-10 p-2 items-center">
        <div>
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              CONTENT MARKETING SERVICES
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Our Content Marketing Services Includes:
          </p>
          <p className="text-[#343a40] lg:text-xl font-semibold drop-shadow-lg">
            Why AaraGlobal for your Brand Search Engine Marketing?
          </p>
          <div className="flex flex-col max-lg:p-5 gap-3">
            <p>
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Blog writing and optimization
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              eBooks & White Papers
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Infographics & Asset Design
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Video Content
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              General site copy
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Metadata creation and optimization
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Landing pages
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              General content writing tips and suggestions
            </p>
          </div>
        </div>
        <img src={contect_marketing2} alt="" className="lg:h-[26rem]" />
      </div>
      <div className="text-center flex flex-col gap-3 justify-center items-center lg:p-20 p-4">
        <div className="flex items-center  gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          Content Marketing Services
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 justify-center items-center gap-10 lg:px-[12%] lg:p-5 p-2">
        {data.map((e) => {
          return (
            <div
              key={""}
              className="flex flex-col gap-5 rounded-md h-fit bg-[#fafafa] border-l-[#ff4d1c] border-4 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#f3b9a9] lg:p-10 p-4"
            >
              <p className="lg:text-4xl text-2xl font-semibold text-[#0f2ea8]">
                {e.title}
              </p>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>
      <OurPatner />
    </div>
  );
};

export default ContentMarketing;
