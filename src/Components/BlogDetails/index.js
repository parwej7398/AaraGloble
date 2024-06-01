import React, { useEffect, useState } from "react";
import blogs from "../../Assets/Blogss.png";
import SideButton from "../SideButton";
import { axiosInstence } from "../../axios.config.js";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const PostFn = async () => {
    const respone = await axiosInstence.post(`/blog/blog-details`, {
      id: id,
    });
    setData(respone.data.blog_details);
    console.log(respone);
  };
  useEffect(() => {
    PostFn();
  }, [id]);
  console.log(data);
  return (
    <div>
      <SideButton />
      <div>
        <img
          src={blogs}
          alt=""
          className="w-full h-[28rem] max-lg:h-56 absolute"
        />
        <img
          src={"https://aaraglobal.com/assets/images/shapes/wave-bot.png"}
          alt=""
          className="relative top-[25rem] h-20 w-full animate-ping"
        />
        <img
          src={"https://aaraglobal.com/assets/images/shapes/wave-mid.png"}
          alt=""
          className="relative top-80 h-20 w-full animate-ping"
        />
        <img
          src={"https://aaraglobal.com/assets/images/shapes/wave-top.png"}
          alt=""
          className="relative top-56 h-20 w-full animate-ping"
        />
      </div>
      <div className="flex relative -top-16  lg:left-40 max-lg:top-10 left-10 flex-col gap-4">
        <div className="flex items-center gap-3">
          <p className="h-1 w-11 bg-red-500"></p>
          <p className=" text-[#23306e] font-semibold">AARA GLOBLE</p>
        </div>
        <p className="text-[#343a40] lg:text-4xl font-bold drop-shadow-2xl">
          Blog Detail
        </p>
        <div className="flex bg-[#bfc7d9] *:font-semibold border w-fit px-2 p-1 rounded-xl gap-1">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#fa702a]">Blog Detail</p>
        </div>
      </div>
      <div className="pt-36 ">
        {data?.map((event) => {
          return (
            <div className="px-[15%] flex-col gap-3 flex">
              <p className="text-5xl text-[#a34eed] font-semibold">
                {event.meta_title}
              </p>
              <p>{event.meta_description}</p>
              <img src={event.images} alt="" className="size-[40rem] " />
              <p dangerouslySetInnerHTML={{ __html: event.content }}></p>
              <p></p>
              <p></p>
            </div>
          );
        })}
      </div>
      <form className="flex flex-col gap-5 px-[15%]">
        <p className="text-center text-2xl font-semibold">Comment</p>
        <TextField variant="outlined" label="Name" type="text" />
        <TextField variant="outlined" label="Email" type="email" />
        <TextField variant="outlined" label="Website" type="text" />
        <TextField
          multiline
          rows={4}
          name=""
          label="Comment"
          maxRows={4}
          id=""
        />
        <button
          type="submit"
          className="w-fit border p-2 rounded-xl hover:bg-white hover:text-black bg-[#0d6dfc] text-white border-b-4 border-b-[#5942bd]"
        >
          Send Your Request
        </button>
      </form>
    </div>
  );
};

export default BlogDetails;
