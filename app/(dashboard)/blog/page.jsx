"use client";

import Blog from "../../Components/Blog";
import "./BlogPage.css";
import useBlog from "../../Components/hooks/useBlog";
import LoadingSpinner from "../../Components/Spinner";

const BlogPage = () => {
  // const res = await fetch("https://dummyjson.com/posts");
  // const { posts } = await res.json();
  const { posts, loading } = useBlog();
  console.log(posts);

  if (loading)
    return (
      <div className="blog-page-container">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="blog-page-container">
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogPage;
