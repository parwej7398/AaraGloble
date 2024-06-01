import ModelingAndDesign from "../BlogPage/3DModelingAndDesign";
import ContentMarketing from "../BlogPage/ContentMarketing";
import EmailMarketing from "../BlogPage/EmailMarketing";
import EmailTemplateDesion from "../BlogPage/EmailTemplateDesion";
import ExhibitionAndSigngeDesign from "../BlogPage/ExhibitionAndSignageDesign";
import GraphicAndPrintDesion from "../BlogPage/GraphicAndPrintDesion";
import PayPerClick from "../BlogPage/PayPerClick";
import PromoVideoMarketing from "../BlogPage/PromoVideoProductionAndDesion";
import Seo from "../BlogPage/SearchEngineOptimization";
import SocialEngineMarketing from "../BlogPage/SocialEngineMarketing";
import SocialMediaDesign from "../BlogPage/SocialMediaDesign";
import SocialMediaMarketing from "../BlogPage/SocialMediaMarketing";
import ContentExplore from "../BlogPage2/ContentExplore";
import KeywordsExp from "../BlogPage2/KeywordsExplorer";
import RankTracker from "../BlogPage2/RankTracker";
import SiteAudit from "../BlogPage2/SiteAudit";
import SiteExp from "../BlogPage2/SiteExplore";
import AboutUs from "../Components/AboutUs";
import Blogs from "../Components/Blog";
import BlogDetails from "../Components/BlogDetails";
import ContactUs from "../Components/ContactUs";
import HomePage from "../Components/HomePage";
import SideButton from "../Components/SideButton";
import About from "../Pages/About";
import OurPatner from "../Pages/OurPartners";
import OurServices from "../Pages/OurServices";
import Testimonials from "../Pages/Testimonials";
import WhyUs from "../Pages/WhyUs";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    id: 3,
    path: "/blogs",
    element: <Blogs />,
  },
  {
    id: 4,
    path: "/about_us",
    element: <AboutUs />,
  },
  {
    id: 5,
    path: "/about",
    element: <About />,
  },
  {
    id: 6,
    path: "/why_us",
    element: <WhyUs />,
  },
  {
    id: 7,
    path: "/our_services",
    element: <OurServices />,
  },
  {
    id: 8,
    path: "/our_patner",
    element: <OurPatner />,
  },
  {
    id: 9,
    path: "/blogs/:id",
    element: <BlogDetails />,
  },
  {
    id: 10,
    path: "/search_engine_optimization",
    element: <Seo />,
  },
  {
    id: 11,
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    id: 13,
    path: "/promo_video_marketing",
    element: <PromoVideoMarketing />,
  },
  {
    id: 14,
    path: "/3D_modeling_and_design",
    element: <ModelingAndDesign />,
  },
  {
    id: 15,
    path: "/email_template_desion",
    element: <EmailTemplateDesion />,
  },
  {
    id: 16,
    path: "/social_media_design",
    element: <SocialMediaDesign />,
  },
  {
    id: 17,
    path: "/exhibition_and_signge_design",
    element: <ExhibitionAndSigngeDesign />,
  },
  {
    id: 18,
    path: "/graphic_and_print_desion",
    element: <GraphicAndPrintDesion />,
  },
  {
    id: 19,
    path: "/email_marketing",
    element: <EmailMarketing />,
  },
  {
    id: 20,
    path: "/social_engine_marketing",
    element: <SocialEngineMarketing />,
  },
  {
    id: 21,
    path: "/social_media_marketing",
    element: <SocialMediaMarketing />,
  },
  {
    id: 22,
    path: "/content_marketing",
    element: <ContentMarketing />,
  },
  {
    id: 23,
    path: "/site_exp",
    element: <SiteExp />,
  },
  {
    id: 24,
    path: "/keywords_exp",
    element: <KeywordsExp />,
  },
  {
    id: 25,
    path: "/site_audit",
    element: <SiteAudit />,
  },
  {
    id: 26,
    path: "/rank_tracker",
    element: <RankTracker />,
  },
  {
    id: 27,
    path: "/content_explore",
    element: <ContentExplore />,
  },
  {
    id: 28,
    path: "/pay_per_click",
    element: <PayPerClick />,
  },
  {
    id: 28,
    path: "/side_button",
    element: <SideButton />,
  },
];
