import "./singleBlog.css";

const Page = async ({ params: { id } }) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="blog-post-container">
      <div className="blog-post-card">

      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-post-body">{post.body}</p>

      <div className="blog-post-meta">
        <div className="blog-post-reactions">
          <span className="reaction reaction-likes">
            👍 {post.reactions.likes}
          </span>
          <span className="reaction reaction-dislikes">
            👎 {post.reactions.dislikes}
          </span>
        </div>

        <div className="blog-post-views">
          <span>👁️ {post.views} views</span>
        </div>
        <div className="blog-tags">
          {post.tags.map((tag, index) => <span  key={index}className="tag">{tag}</span>)}
  
  
</div>
      </div>

      </div>
    </div>
  );
};

export default Page;
