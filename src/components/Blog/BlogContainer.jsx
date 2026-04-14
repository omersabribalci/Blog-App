import React, { useState } from "react";
import BlogList from "./BlogList";
import BlogAddForm from "./BlogAddForm";
import blogData from "../../data/blogData";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <div className="flex flex-col gap-10">
      <BlogAddForm blogs={blogs} setBlogs={setBlogs} />
      {blogs.length === 0 ? (
        <p className="my-0 mx-auto">There is no blog post...</p>
      ) : (
        <BlogList blogs={blogs} setBlogs={setBlogs} />
      )}
    </div>
  );
};

export default BlogContainer;
