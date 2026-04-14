import React from "react";

const BlogItem = ({ id, title, content, date, author, blogs, setBlogs }) => {
  const handleClick = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 p-4 my-4 border-2 w-80">
      <h1>{title}</h1>
      <p className="line-clamp-4 text-justify">{content}</p>
      <a href="">Read more...</a>
      <span>{date}</span>
      <span>{author}</span>
      <button
        className="w-fit"
        onClick={() => {
          handleClick(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogItem;
