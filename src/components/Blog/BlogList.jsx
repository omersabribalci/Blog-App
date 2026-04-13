import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="px-10 py-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-10">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
