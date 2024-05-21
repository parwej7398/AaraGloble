import React from "react";
import Slider from "react-slick";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      title: "LOUKIA LOUCA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "we are house of beauty based in Larnaca, cyprus. AARA team has developed reminder manager application for us also a beautiful website. it was nice expreince working with the team.",
      paragraph2: "Product manager at House of Beauty nail studio",
    },
    {
      id: 2,
      title: "LOUKIA LOUCA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "we are house of beauty based in Larnaca, cyprus. AARA team has developed reminder manager application for us also a beautiful website. it was nice expreince working with the team.",
      paragraph2: "Product manager at House of Beauty nail studio",
    },
    {
      id: 3,
      title: "FAHIM KAUSHAR",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "It was really nice and interative team, they have developed our OTP application to send bank transactional sms. Their support team is doing great job in case of any issue . apreaciate your good work.",
      paragraph2: "CEO Apliman software pvt. Ltd.",
    },
    {
      id: 4,
      title: "MANUEL DALIA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "It was satisfied experience for the application developed for our internal process use. AARA Team is doing great job in field of IT related query and privides its best solution with cost effective quotation..",
      paragraph2: "Technical Manager Telstra corp",
    },
    {
      id: 5,
      title: "LOUKIA LOUCA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "we are house of beauty based in Larnaca, cyprus. AARA team has developed reminder manager application for us also a beautiful website. it was nice expreince working with the team.",
      paragraph2: "Product manager at House of Beauty nail studio",
    },
    {
      id: 6,
      title: "MANUEL DALIA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "It was satisfied experience for the application developed for our internal process use. AARA Team is doing great job in field of IT related query and privides its best solution with cost effective quotation..",
      paragraph2: "Technical Manager Telstra corp",
    },
    {
      id: 7,
      title: "DANIEL MPUMWIRE",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "I find AARA team is doing great job for their customer, when ever i get any issue with our running application which was developed by them, they always respond and close the issue very fast. Happy to work with you guys.",
      paragraph2: "CEO at Netrest Technologies pvt. ltd",
    },
    {
      id: 8,
      title: "LOUKIA LOUCA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "we are house of beauty based in Larnaca, cyprus. AARA team has developed reminder manager application for us also a beautiful website. it was nice expreince working with the team.",
      paragraph2: "Product manager at House of Beauty nail studio",
    },
    {
      id: 9,
      title: "LOUKIA LOUCA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "we are house of beauty based in Larnaca, cyprus. AARA team has developed reminder manager application for us also a beautiful website. it was nice expreince working with the team.",
      paragraph2: "Product manager at House of Beauty nail studio",
    },
    {
      id: 10,
      title: "LOUKIA LOUCA",
      img: "https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png",
      paragraph:
        "we are house of beauty based in Larnaca, cyprus. AARA team has developed reminder manager application for us also a beautiful website. it was nice expreince working with the team.",
      paragraph2: "Product manager at House of Beauty nail studio",
    },
  ];
  const settings = {
    dots: false,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="max-lg:hidden">
      <div className="text-center flex-col p-20 flex items-center">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">FEEDBACK</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] text-4xl font-bold drop-shadow-2xl">
          Testimonials
        </p>
        <p>WHAT CLIENTS SAYS?</p>
      </div>
      <div className="slider-container p-4 lg:px-[8%]">
        <Slider {...settings}>
          {data?.map((i, index) => {
            return (
              <div
                key={index}
                className="border relative z-50 bg-[#e8e8e8] overflow-hidden flex flex-col lg:gap-10 p-5 rounded-2xl shadow"
              >
                <p className="text-[#999999] z-50">{i.paragraph}</p>
                <div className="flex z-50 gap-5 p-5">
                  <img src={i.img} alt="" className="h-12" />
                  <div>
                    <p className="text-[#999999] text-sm">{i.title}</p>
                    <p className="text-[#999999] text-sm">{i.paragraph2}</p>
                  </div>
                </div>
                <img
                  src={"https://aaraglobal.com/assets/images/quote.webp"}
                  alt=""
                  className="absolute top-5 h-16 opacity-30  right-0"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div>
        <Carousel>
          <div>
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png"
              className="h-20"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png"
              className="h-20"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src="https://aaraglobal.s3.ap-south-1.amazonaws.com/images/profile.png"
              className="h-20"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div> */}
    </div>
  );
};

export default Testimonials;
