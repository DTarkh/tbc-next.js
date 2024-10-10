// Blog.js
import React from "react";
import "./Blog.css"

const Blog = ({ blog }) => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">{blog.title}</h2>
      <p className="blog-body">{blog.body}</p>

      <div className="blog-meta">
        <div className="blog-reactions">
          <span className="likes">👍 {blog.reactions.likes}</span>
          <span className="dislikes">👎 {blog.reactions.dislikes}</span>
        </div>

        <div className="blog-views">
          <span>👁️ {blog.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
