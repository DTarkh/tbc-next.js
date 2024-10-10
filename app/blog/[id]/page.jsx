import "./singleBlog.css";

const Page = async ({ params: { id } }) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json()

  return (
    <div className="singleBlog-container">
      <h1 key={post.id}>{post.title}</h1>
    </div>
  );
};

export default Page;