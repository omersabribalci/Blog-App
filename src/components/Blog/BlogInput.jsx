import React from "react";

const BlogInput = ({ label, type, placeholder, name, handleChange, value }) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="border-2"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </label>
  );
};

export default BlogInput;
