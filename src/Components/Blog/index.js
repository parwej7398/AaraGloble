import React from "react";
import blogs from "../../Assets/Blog.png";
import blogpost from "../../Assets/blog-post-image-guide.webp";
import boy from "../../Assets/boy1.webp";

const Blogs = () => {
  const categroes = [
    {
      id: 1,
      images: blogpost,
      title: "BLOG TITLE",
      date: "Dec 7, 2017",
      paragraph:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Read More...",
    },
    {
      id: 1,
      images: blogpost,
      title: "BLOG TITLE",
      date: "Dec 7, 2017",
      paragraph:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Read More...",
    },
    {
      id: 1,
      images: blogpost,
      title: "BLOG TITLE",
      date: "Dec 7, 2017",
      paragraph:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Read More...",
    },
    {
      id: 1,
      images: blogpost,
      title: "BLOG TITLE",
      date: "Dec 7, 2017",
      paragraph:
        "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Read More...",
    },
  ];
  const data = [
    {
      id: 1,
      images: boy,
      title: "Title 1",
      paragraph: "Sunt in culpa qui officia Read More..",
    },
    {
      id: 2,
      images: boy,
      title: "Title 2",
      paragraph: "Sunt in culpa qui officia Read More..",
    },
    {
      id: 3,
      images: boy,
      title: "Title 3",
      paragraph: "Sunt in culpa qui officia Read More..",
    },
    {
      id: 4,
      images: boy,
      title: "Title 4",
      paragraph: "Sunt in culpa qui officia Read More..",
    },
    {
      id: 5,
      images: boy,
      title: "Title 5",
      paragraph: "Sunt in culpa qui officia Read More..",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <div>
        <img src={blogs} alt="" className="w-full max-lg:h-56 absolute" />
        <div className="flex relative lg:top-32 lg:left-40 top-10 left-10 flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="h-1 w-11 bg-red-500"></p>
            <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
          </div>
          <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
            Blog List
          </p>
          <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
            <p>Home</p>
            <p>/</p>
            <p className="text-[#fa702a]">Blog List</p>
          </div>
        </div>
      </div>
      <div className="lg:flex  lg:pt-96 pt-32 lg:p-20 gap-10">
        <div className="lg:grid grid-rows-4  lg:w-[70%]  gap-8">
          {categroes.map((event) => {
            return (
              <div
                key={""}
                className="flex border h-72 rounded shadow-xl p-5 items-center gap-5"
              >
                <img
                  src={event.images}
                  alt=""
                  className="lg:h-44 h-16 rounded-2xl shadow-xl"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold">{event.title}</p>
                  <p className="bg-[#6b757d] text-white w-fit rounded-lg px-1">
                    {event.date}
                  </p>
                  <p>{event.paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 lg:w-[25%]">
          <div className="border-2 p-4 shadow-inner rounded-xl">
            <p className="text-[#343a40] pl-20 text-3xl font-bold drop-shadow-2xl">
              Latest Blogs
            </p>
            <div>
              {data.map((event) => {
                return (
                  <div
                    key={""}
                    className="flex h-32 rounded shadow-xl p-5 items-center gap-5"
                  >
                    <img
                      src={event.images}
                      alt=""
                      className="h-24 rounded-2xl shadow-xl"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-bold">{event.title}</p>
                      <p className="bg-[#6b757d] text-white w-fit rounded-lg px-1">
                        {event.date}
                      </p>
                      <p>{event.paragraph}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex border rounded-xl shadow-xl flex-col gap-10">
            <p className="text-[#343a40] pl-10 text-3xl font-bold drop-shadow-2xl">
              Categories
            </p>
            <div className="flex *:p-2  *:text-start *:font-semibold *:pl-10 flex-col">
              <button>➜ Categories 1</button>
              <hr />
              <button>➜ Categories 2</button>
              <hr />
              <button>➜ Categories 3</button>
              <hr />
              <button>➜ Categories 4</button>
              <hr />
              <button>➜ Categories 5</button>
              <hr />
              <button>➜ Categories 6</button>
              <hr />
              <button>➜ Categories 7</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pb-10 justify-center gap-10 text-center">
        <p>«</p>
        <p>1</p>
        <p className="bg-[#e6e4e4] h-6 rounded w-6">2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>»</p>
      </div>
    </div>
  );
};

export default Blogs;
