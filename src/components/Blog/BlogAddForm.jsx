import React, { useState } from "react";
import BlogInput from "./BlogInput";

import { nanoid } from "nanoid";
import { blogInputs } from "../../data/blogInputs";
const initialFormData = {
  title: "",
  content: "",
  date: "",
  author: "",
};

const BlogAddForm = ({ blogs, setBlogs }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = Object.values(formData).every(
    (data) => data.trim() !== "",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setBlogs([{ ...formData, id: nanoid() }, ...blogs]);
      setFormData(initialFormData);
    }
  };

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col rounded-2xl shadow-2xl shadow-black/30 bg-white/30 p-4 mt-20 gap-2 mx-auto min-w-3/6"
        onSubmit={handleSubmit}
      >
        {blogInputs.map((input) => (
          <BlogInput
            key={input.name}
            {...input}
            handleChange={handleChange}
            value={formData[input.name]}
          />
        ))}
        <label className="flex flex-col">
          Content
          <textarea
            className="bg-white/30 rounded-xl p-2"
            type="text"
            placeholder="Blog yazısı giriniz!"
            onChange={handleChange}
            name="content"
            value={formData.content}
          ></textarea>
        </label>
        <button className="w-fit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogAddForm;
