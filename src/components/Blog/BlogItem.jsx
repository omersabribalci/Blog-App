import React from "react";

const BlogItem = ({ title, content, date, author }) => {
  return (
    <div className="flex flex-col gap-4 p-4 my-4 border-2 w-80">
      <h1>{title}</h1>
      <p className="line-clamp-4 text-justify">{content}</p>
      <a href="https://www.google.com/?hl=TR">Read more...</a>
      <span>{date}</span>
      <span>{author}</span>
      <button className="w-12">Delete</button>
    </div>
  );
};

export default BlogItem;
