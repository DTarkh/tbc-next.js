import "./Blog.css";
import Link from "next/link";

const Blog = ({ blog, onDelete, onEdit }) => {
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
        
        <Link href={`/blog/${blog.id}`}>
          <button className="blog-button">Read more</button>
        </Link>
        <button className="blog-delete-button" onClick={() => onDelete(blog.id)}>
          Delete
        </button>
        <button className="blog-add-button" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Blog;