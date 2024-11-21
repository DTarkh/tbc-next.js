
'use client'

// singleBlog.css
import useLangCheck from "@/app/[locale]/Components/hooks/useLangCheck";
import "./singleBlog.css";
import { BlogType } from "@/app/[locale]/interfaces";

// Component to display blog post content
const BlogPost = ({ post }: { post: BlogType }) => {
  const isEnglish = useLangCheck();

  return (
    <div className="blog-post-card">
      <h2 className="blog-post-title">
        {isEnglish ? post.title_en : post.title_ge}
      </h2>
      <p className="blog-post-body">
        {isEnglish ? post.body_en : post.body_ge}
      </p>
      <div className="blog-post-meta">
        <div className="blog-post-reactions">
          <span className="reaction reaction-likes">👍 {post.likes}</span>
          <span className="reaction reaction-dislikes">👎 {post.dislikes}</span>
          <span className="reaction reaction-likes">{isEnglish ? post.category_en : post.category_ge}</span>
        </div>
        <div className="blog-post-views">
          <span>👁️ {post.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;