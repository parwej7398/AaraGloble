import React, { useEffect } from "react";
import img from "../../Assets/AboutUsImg.png";
import seo from "../../Assets/seo aboutUs.webp";
import seowhy from "../../Assets/seo why chooes.webp";
import SHANKAR_NAIDU from "../../Assets/Shankar-Naidu.png";
import PERIKLIS_GONIS from "../../Assets/Periklis-gonis.png";
import MEENAKSHI_TIWARI from "../../Assets/Meenakshi.png";
import OurPatner from "../../Pages/OurPartners";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  useEffect(() => {
    document.title =
      "About the leading Digital Marketing company - Aara Global. ";
  }, []);
  const categroes = [
    {
      id: 1,
      images: SHANKAR_NAIDU,
      name: "SHANKAR NAIDU",
      title: "Co-Founder,Chief Marketing Officer",
    },
    {
      id: 1,
      images: PERIKLIS_GONIS,
      name: "PERIKLIS GONIS",
      title: "Co-Founder,Chief Technical Officer",
    },
    {
      id: 1,
      images: MEENAKSHI_TIWARI,
      name: "MEENAKSHI TIWARI",
      title: "Founder,Managing Director",
    },
  ];
  return (
    <div className="lg:pt-20">
      <div>
        <img src={img} alt="" className="lg:w-full max-lg:h-60 absolute" />
        <div className="flex relative lg:top-32 lg:left-40 top-10 left-10 flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
          </div>
          <p className="text-[#343a40] text-4xl font-bold drop-shadow-2xl">
            About Us
          </p>
          <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
            <p>Home</p>
            <p>/</p>
            <p className="text-[#fa702a]">About Us</p>
          </div>
        </div>
      </div>
      <div className="lg:flex  lg:pt-80 pt-32 lg:px-[15%]">
        <div className="lg:w-[40%]">
          <img src={seo} alt="" />
        </div>
        <div className="flex flex-col lg:w-[60%] gap-8">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              EXCLUSIVE DIGITAL MARKETING AGENCY
            </p>
          </div>
          <p className="text-[#343a40] px-2 lg:text-4xl text-2xl font-bold drop-shadow-2xl">
            About Us
          </p>
          <p className="max-lg:px-2">
            Aara Global is a professional digital marketing agency in Lucknow
            offering organic and paid digital marketing services like SEO, SMO,
            SEM, PPC, etc, to ventures to select the right option for their
            dream digital presence. We are a Lucknow and Noida-based digital
            marketing agency with having overall 10 years of experience in the
            digital marketing Industry. Our goal is to satisfy client
            satisfaction and this is often what we thrive for. Our experienced
            and robust team always is there to form your project, a successful
            mission.
          </p>
          <p className="max-lg:px-2">
            At Aara Global, you'll get complete solutions associated with
            Digital marketing & Internet marketing at budget-friendly charges.
            we provide a huge array of digital marketing services which include
            program optimization (SEO), pay-per-click (PPC) advertising, and
            social media marketing. Moreover, solutions are offered as per the
            precise need.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center p-20">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">AARA GLOBAL</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          Why Choose Aara Global?
        </p>
      </div>
      <div className="lg:flex lg:px-[15%] px-2">
        <div className="flex lg:w-[55%] flex-col gap-5">
          <p className="lg:text-2xl text-lg font-bold">Innovative Solutions</p>
          <p className="text-base font-semibold">
            As a digital marketing agency, we offer Creative Solutions by using
            the foremost effective method, tools, and robust architecture. Our
            marketing solutions are designed with a progressive view and it's
            very effective for your business growth. We complete our project
            work easily in less time or money!.
          </p>
          <p className="lg:text-2xl text-lg font-bold">
            Awesome Team with Excellent Support
          </p>
          <p className="text-base font-semibold">
            Our expert understands our client's business needs first. Then make
            a bit plan and set realistic deadlines to finish the work. We
            communicate constantly with our clients to supply them with progress
            updates. We hand over projects delivered on time. Also, send monthly
            reports to the client.
          </p>
          <p className="lg:text-2xl text-lg font-bold">One-Stop-Shop</p>
          <p className="text-base font-semibold">
            As Digital Marketing Agency in Lucknow & Noida, we have got a solid
            internet marketing strategy and access to an enormous range of tools
            & techniques which enable us to serve you with forward-looking
            solutions. our greatest possible approach to your business growth
            and ensure profitability.
          </p>
          <p className="lg:text-2xl text-lg font-bold">Faster Performance</p>
          <p className="text-base font-semibold">
            We know that time is money in business, so we plan to know the
            client's requirements and budgets, Then we develop an objective
            standard for completing your business goal. We deliver projects on
            time with full client satisfaction.
          </p>
          <p className="lg:text-2xl text-lg font-bold">
            Custom-Built Solutions
          </p>
          <p className="text-base font-semibold">
            We focus our all client's requirements and provides state-of-the-art
            solutions accordingly. Thus, we provide result-oriented web
            designing, development & digital marketing solutions to every client
            within budget.
          </p>
        </div>
        <div className="lg:w-[45%]">
          <img src={seowhy} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center p-10">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">AARA GLOBAL</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] text-4xl font-bold drop-shadow-2xl">
          Team Members
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-12 items-center justify-center lg:px-[15%] p-4">
        {categroes.map((event) => {
          return (
            <div className="border flex flex-col gap-5 items-center rounded-2xl justify-center p-5 shadow-xl hover:shadow-2xl">
              <img src={event.images} alt="" className="rounded-full" />
              <p className="text-lg font-semibold">{event.name}</p>
              <p className="border rounded-full p-1 px-2 bg-[#f5f5f5] font-semibold shadow">
                {event.title}
              </p>
            </div>
          );
        })}
      </div>

      <OurPatner />
    </div>
  );
};

export default AboutUs;
