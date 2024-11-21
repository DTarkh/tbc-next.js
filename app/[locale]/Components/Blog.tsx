'use client'

import "./Blog.css";
import { Link } from "../../../i18n/routing";
import { BlogType } from "../interfaces";
import { usePathname } from "next/navigation";

interface BlogProps {
  blog: BlogType;
}
const Blog = ({ blog } : BlogProps ) => {

  const path = usePathname();
  const isEnglish = path.includes("/en");

  return (
    <div className="blog-container">
      <h2 className="blog-title">{isEnglish ? blog.title_en : blog.title_ge}</h2>
      <p className="blog-body">{isEnglish ? blog.body_en : blog.body_ge}</p>

      <div className="blog-meta">
        <div className="blog-reactions">
          <span className="likes">👍 {blog.likes}</span>
          <span className="dislikes">👎 {blog.dislikes}</span>
        </div>

        <div className="blog-views">
          <span>👁️ {blog.views} views</span>
        </div>

        <Link href={`/blog/${blog.id}`}>
          <button className="blog-button">Read more</button>
        </Link>
        {/* <button className="blog-delete-button" onClick={() => onDelete(blog.id)}>
          Delete
        </button>
        <button className="blog-add-button" onClick={() => onEdit(blog.id)}>
          Edit
        </button> */}
      </div>
    </div>
  );
};

export default Blog;
