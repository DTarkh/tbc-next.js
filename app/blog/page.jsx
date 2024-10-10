import Blog from "./blog";
import Main from "../Wrap/Main";

const BlogPage = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();

  return (
    <div>
        <Main>
      {posts.map((post) => (
        <Blog blog={post} />
      ))}

        </Main>
    </div>
  );
};

export default BlogPage;
