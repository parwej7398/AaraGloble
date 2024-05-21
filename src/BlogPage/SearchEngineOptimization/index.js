import React, { useEffect } from "react";
import blogs from "../../Assets/Blog.png";
import seo from "../../Assets/seo aboutUs.webp";
import { IconButton } from "@mui/material";
import { ArrowDropDown, CheckCircle } from "@mui/icons-material";
import OurPatner from "../../Pages/OurPartners";

const Seo = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const categories = [
    {
      id: 1,
      title: "Technical SEO",
      paragaraph:
        "Technical SEO is the process of getting your website crawled and indexed properly without any errors. We investigate website technical factors including SSL/HTTPS, website speed, mobile response, metadata analysis, website back-end, crawl errors, broken links, duplicate content, creating XML sitemaps, using robots.txt and schema markup, and auditing redirects. and the performance of Google Site Search.",
      paragaraph2:
        "These technical factors impact search engine ranking. We investigate and fix these technical errors to improve your website's performance and generate more additive-free traffic.",
    },
    {
      id: 2,
      title: "On-Page SEO",
      paragaraph:
        "Increase your online visibility and get organic traffic with Aara Global SEO Services. On-page SEO focuses on improving the user-friendly design and content of the website. Our SEO experts publish unique content, optimize visual page elements including page titles and meta descriptions, titles, on-page content, and HTML tags and use high-resolution images.",
      paragaraph2:
        "Google is always changing its algorithms, so we're constantly learning and innovating with the latest technologies and ideas to improve visitor engagement. Our strategy for on-page SEO is by investigating user intent and adjusting content to improve rankings.",
    },
    {
      id: 3,
      title: "Off-Page SEO",
      paragaraph:
        "Build your online domain authority and grow your digital presence with our off-page SEO services. Aara Global is an SEO agency, which offers off-page optimization services to build up brand credibility and increase online publication. Our off-page SEO services consist of link generation and social media marketing.",
      paragaraph2:
        "Link building is the process of enhancing your website content on a high-authority referring domain website to generate qualified and secure backlinks. High-quality backlinks are more effective for earning higher rankings on search engines.",
    },
    {
      id: 4,
      title: "Local SEO",
      paragaraph:
        "Improving website ranking for the local geographic area within search engines. Most customers search for local businesses online, so local SEO is key to attracting high-desire regional customers.",
      paragaraph2:
        "Improve your company's local SEO ranking with our Google My Business optimization services to manage your online ranking positions and grow your local following. Local search engine optimization services help businesses rank higher in search results pages or maps.",
    },
    {
      id: 5,
      title: "E-Commerce SEO",
      paragaraph:
        "Ecommerce SEO services help eCommerce businesses engage potential customers online and increase their sales volume. We are a full-service eCommerce SEO agency, providing effective e-commerce SEO services at an effective cost. Our goal is to increase your presence in the target market and grow your online store through our eCommerce SEO services which include SEO Audit, Technical SEO, On-Page SEO, Off-Page SEO, and Reporting.",
    },
    {
      id: 6,
      title: "Voice Search SEO",
      paragaraph:
        "Voice search SEO is the new trend to improve keyword ranking from Search Engine Optimization. As many people are using voice search instead of typing, there has been an increase in voice search on mobile devices. Voice search optimization benefits include sharper visuals, faster results, avoiding confusing menus, and difficulty typing on some devices. We ensure some of the important factors for voice search SEO include page speed, schema markup, and HTTPS.",
    },
  ];
  return (
    <>
      <div className="lg:pt-20">
        <img src={blogs} alt="" className="w-full max-lg:h-56 absolute" />
        <div className="flex relative lg:top-32 lg:left-40 top-10 left-10 flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Search Engine Optimization (SEO)
          </p>
          <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
            <p>Home</p>
            <p>/</p>
            <p className="text-[#fa702a]">Search Engine Optimization (SEO)</p>
          </div>
        </div>
      </div>
      <div className="lg:pt-80 lg:px-[16%]">
        <div className="lg:flex gap-5 p-5 justify-center items-center">
          <img src={seo} alt="" className="h-[25rem]" />
          <div className="flex flex-col gap-5 ">
            <div className="flex items-center gap-3">
              <p className="h-1 w-11 bg-red-500"></p>
              <p className=" text-[#23306e] font-semibold">SEO OPTIMIZATION</p>
            </div>
            <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
              Affordable SEO Services
            </p>
            <p>
              As the best SEO company, we make sure that your website gets a
              good ranking in search engines like Google, Yahoo, Bing, Baidu,
              etc. We hand over a result-driven approach using white hat SEO
              techniques to achieve the top Search Engine Ranking Position of
              your business’s website.
            </p>
            <p>
              We develop your website SEO-friendly and content-rich. As it helps
              you get your site indexed and matched to several search engine
              parameters. With all these efforts, your website will be listed in
              the topmost search engine rankings for a long period. We monitor
              our SEO projects and keep our clients updated about their website
              performance.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  max-lg:p-5 lg:gap-10 lg:px-[16%]">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">
            SEARCH ENGINE OPTIMIZATION
          </p>
        </div>
        <p className="text-[#343a40] lg:text-3xl font-bold drop-shadow-xl">
          We Are Here For Make Optimization
        </p>
        <p className="text-[#343a40] lg:text-2xl font-bold drop-shadow-lg">
          <IconButton>
            <ArrowDropDown fontSize="large" />
          </IconButton>{" "}
          Why do I need Search Engine Optimization?
        </p>
        <p>
          Search Engine Optimization allows your website to secure ranking on
          the search engine pages. Following are some{" "}
          <span className="text-lg font-semibold">
            advantages of SEO services…
          </span>
        </p>
        <div className="lg:grid max-lg:p-5 grid-cols-3 gap-3">
          <p>
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Improve Search Rankings
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            24/7 Promotion.
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Generate Leads
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Gain New Customers
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Targets the Entire Marketing Funnel
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Improves Credibility & Trust.
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Greater Visibility of your Brand
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Reaches Target Audience
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Impressive ROI.
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Improve Return on Investment (ROI)
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            SEO Optimizes User Experience
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Long-Term Marketing Strategy
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Drive Organic Traffic
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            SEO Enhances PPC Success
          </p>
          <p>
            {" "}
            <IconButton>
              <CheckCircle />
            </IconButton>{" "}
            Key to Search Visibility
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center lg:p-10 p-5">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">SERVICES</p>
            <p className="h-1 w-11 bg-red-500"></p>
          </div>
          <p className="text-[#343a40] lg:text-4xl text-3xl font-bold drop-shadow-2xl">
            Why Choose Aara Global?
          </p>
          <p>
            Increase your search ranking and get more traffic, leads, and sales
            on Aara Global.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-20 gap-5  lg:p-10 p-5">
          {categories.map((event) => {
            return (
              <div className="flex flex-col shadow-xl bg-[#faf8f8] shadow-slate-400 gap-5 border p-3 font-semibold  rounded-se-3xl rounded-ee-3xl rounded-bl-3xl">
                <p className="text-2xl">{event.title}</p>
                <p>{event.paragaraph}</p>
                <p>{event.paragaraph2}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:flex gap-5 justify-center items-center">
          <div className="flex flex-col gap-5 ">
            <div className="flex items-center gap-3">
              <p className="h-1 w-11 bg-red-500"></p>
              <p className=" text-[#23306e] font-semibold">ADVANTAGE OF SEO</p>
            </div>
            <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
              For Your Business With Aaraglobal
            </p>
            <p>
              High-quality SEO implemented for a brand’s website will have
              advantageous, long-term results. Our search engine optimization
              team is focused on delivering an extraordinary return, providing
              total efficiency by the extensive SEO process.
            </p>
            <p>
              To know more about our services, please do not hesitate to drop us
              a mail at contact@aaraglobal.com or call us at +919266667999 or
              via our online contact form. We are always here to answer your
              questions or hear about your project!.
            </p>
          </div>
          <img src={seo} alt="" className="lg:h-[25rem]" />
        </div>
      </div>
      <OurPatner />
    </>
  );
};

export default Seo;
