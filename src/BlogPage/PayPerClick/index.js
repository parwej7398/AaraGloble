import React, { useEffect } from "react";
import blogs from "../../Assets/Blogss.png";
import sem from "../../Assets/pay per click.webp";
import { IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";
import SideButton from "../../Components/SideButton";

const PayPerClick = () => {
  useEffect(() => {
    document.title =
      "Best Pay Per Click Service Company in India| Pay Per Click Service in Noida | Aara Global";
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
      title: "Paid Search Advertising",
      para: "Search ads The ads you see at the top of Google's search results page. We have the ability to implement great strategies for paid search marketing through relevant campaigns. Paid search advertising services help customers gain more visibility online, increase conversion rates and instant traffic.",
    },
    {
      id: 2,
      title: "Display Advertising",
      para: "Display advertising is a very effective way to get the message across to the target audience. These ads are also pay-per-click. Our experts do PPC advertising on behalf of the brand to promote the brand online. Display advertising campaigns help improve ROI, generate brand awareness, and increase target audiences.",
    },
    {
      id: 3,
      title: "Display Advertising",
      para: "Display advertising is a very effective way to get the message across to the target audience. These ads are also pay-per-click. Our experts do PPC advertising on behalf of the brand to promote the brand online. Display advertising campaigns help improve ROI, generate brand awareness, and increase target audiences.",
    },
    {
      id: 4,
      title: "Display Advertising",
      para: "Display advertising is a very effective way to get the message across to the target audience. These ads are also pay-per-click. Our experts do PPC advertising on behalf of the brand to promote the brand online. Display advertising campaigns help improve ROI, generate brand awareness, and increase target audiences.",
    },
  ];
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
          Pay Per Click (PPC)
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Pay Per Click (PPC)</p>
        </div>
      </div>
      <div className="lg:flex gap-5 lg:pt-20 pt-40 lg:px-[12%] lg:p-10 p-4 items-center">
        <img src={sem} alt="" className="h-[26rem]" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">PAY PER CLICK</p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            PPC Services in <br />
            <span className="text-5xl font-bold drop-shadow-2xl">
              Noida, India
            </span>
          </p>
          <p>
            PPC Services Company offering Pay Per Click Marketing Services to
            pull up your websites and help you to earn better ROI.
          </p>
          <p>
            Aara Global provides result-orientated pay-per-click campaign (PPC)
            services for both local and global clients. Pay Per Click or PPC
            advertising is the most efficient way to advertise your business
            online.
          </p>
          <p>
            We have experts that provide successful PPC marketing campaigns. We
            also offer affordable Google Adword Promotion that helps to maximum
            traffic and excellent results for your business.
          </p>
          <p>
            Our PPC services build in the development and implementation of Pay
            Per Click marketing strategies, keyword search and selection, ad
            text script, conversion tracking, landing page optimization,
            campaign monitoring, and reporting. We create PPC campaigns beyond
            all major advertising platforms like Google Adwords, Facebook, and
            Twitter.
          </p>
        </div>
      </div>
      <div className="flex gap-10 px-[12%]">
        <div className="flex flex-col gap-3 w-[50%]">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">
              PPC MANAGEMENT SERVICES
            </p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            PPC Services
          </p>
          <p>Why Aara Global for Availing Quality PPC Management Services?</p>
          <p>
            In the current market, Creative Aara Global is recognized as a
            consistently good in quality Google Adwords OR Pay Per Click (PPC)
            service, provider. We offering top-grade Pay Per Click service for
            small, medium, and big businesses. Our professional team of PPC
            experts deal with clients for paid advertising, understands clients
            need and deliver what they are looking for in PPC advertising.
          </p>
          <img src={sem} alt="" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">ADVANTAGE OF PPC</p>
          </div>
          <p className="font-bold text-2xl">
            Advantages of Pay Per Click Campaign:
          </p>
          <div className="flex flex-col ">
            <p>
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Get instant results
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Aim to reach 90% of users
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Bring in the target audience.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Increase your brand identity
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Generate Leads in Nearby Cities
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              The ad appears in the top search results.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Control costs easily by setting a budget.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Maximize visibility on search engines.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Cost-effective SEO techniques quick and derivative Results.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Great potential to meet potential customers
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Payment has to be made only when an interested visitor clicks on
              the advertisement.
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              The best way to get the desired traffic and avoid unnecessary
              traffic.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col gap-3 justify-center items-center lg:p-20 p-4">
        <div className="flex items-center  gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">SERVICES</p>
          <p className="h-1 w-11 bg-red-500"></p>
        </div>
        <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
          PPC Services
        </p>
        <p className="px-[30%]">
          As a Google Adwords agency, we are offering pay-per-click services to
          grow your business. Pay Per Click (PPC) is a way to buy visits to your
          site by paying for advertising platforms like Google, Yahoo, Bing,
          etc.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 justify-center items-center gap-10 lg:px-[12%] lg:p-5 p-2">
        {data.map((e) => {
          return (
            <div
              key={""}
              className="flex flex-col gap-5 rounded-md hover:border-t-[#0f2ea8] h-fit bg-[#fafafa] border-l-[#ff4d1c] border-l-4 border-t-2 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#f3b9a9] lg:p-10 p-4"
            >
              <p className="lg:text-4xl text-2xl font-semibold text-[#0f2ea8]">
                {e.title}
              </p>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>
      <div className="lg:px-[12%]">
        <div className=" flex flex-col gap-5 hover:border-t-[#0f2ea8] rounded-md h-fit bg-[#fafafa] border-l-[#ff4d1c] border-l-4 border-t-2 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#ebb6a8] lg:p-10 p-4">
          <p className="lg:text-4xl text-2xl font-semibold text-[#0f2ea8]">
            Retargeting PPC advertising
          </p>
          <p>
            Retargeting uses cookies on a user's browser to show them specific
            ads based on their previous online actions. It is also called
            remarketing. For example, a user searching for vacations might see a
            display ad for the latest deals from a travel agent.
          </p>
          <div className="flex flex-col ">
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Display ad campaign
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Search advertising campaign
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Social media advertising campaign
            </p>
            <p>
              {" "}
              <IconButton>
                <CheckCircle />
              </IconButton>{" "}
              Email marketing
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-[12%] pt-6">
        <div className=" flex flex-col gap-5 hover:border-t-[#0f2ea8] rounded-md h-fit bg-[#fafafa] border-l-[#ff4d1c] border-l-4 border-t-2 transition duration-1000 hover:border-l-[#0f2ea8] hover:bg-[#ebb6a8] lg:p-10 p-4">
          <p className="lg:text-4xl text-2xl font-semibold text-[#0f2ea8]">
            Price comparison website advertising
          </p>
          <p>
            Price comparison or collector websites gather and display prices and
            special offers from various providers. This involves comparison
            websites for hotels or insurance. Users click on offers of interest
            and buy directly from the vendor or from the price comparison portal
            itself.
          </p>
          <p>
            This can be useful for spending your PPC budget in a targeted
            manner. Price comparison websites give you access to qualified leads
            – i.e. customers who are passively looking for a product or service
            like yours.
          </p>
          <p>
            The drawback of these websites is that you will be up against
            opposition. Price comparison websites offer several PPC options. You
            should check your transformation rate against the cost-per-click
            rate if you use them.
          </p>
        </div>
      </div>
      <OurPatner />
    </div>
  );
};

export default PayPerClick;
