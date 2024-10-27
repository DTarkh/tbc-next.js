import Blog from "../../Components/Blog";


const BlogPage = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();

  return (
    <div>
        
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}

    </div>
  );
};

export default BlogPage;
