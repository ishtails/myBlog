import React from "react";
import { Link } from "react-router-dom";

export const Bloglist = ({ blogs, title }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="font-bold text-xl text-blue-500 underline underline-offset-4">
        {title}
      </h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="flex flex-col items-center justify-center p-10 text-center border    border-x-2 shadow-sm rounded-md w-[25rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] h-[10rem]   transition-all   hover:scale-105 hover:shadow-lg cursor-pointer   space-y-2">
            <h1 className="text-2xl font-bold text-blue-500">{blog.title}</h1>
            <p>- {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
