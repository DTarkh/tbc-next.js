import Blog from "../../Components/Blog";
import "./BlogPage.css"


const BlogPage = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();

  return (
    <div className="blog-page-container">
        
      {posts.map((post) => (
        <Blog 
        blog={post} key={post.id} />
      ))}

    </div>
  );
};

export default BlogPage;
