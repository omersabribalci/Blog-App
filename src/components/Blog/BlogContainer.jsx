import React, { useState } from "react";
import BlogList from "./BlogList";
import BlogAddForm from "./BlogAddForm";
import blogData from "../../data/blogData";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <>
      <BlogAddForm />
      <BlogList blogs={blogs} />
    </>
  );
};

export default BlogContainer;
