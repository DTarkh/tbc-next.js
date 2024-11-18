// import useBlog from "../../Components/hooks/useBlog";
// import EditPost from "../../Components/EditPost"
// import AddPostFrom from "../../Components/AddPostForm"
import Blog from "../../Components/Blog";
import LoadingSpinner from "../../Components/Spinner";

const BlogPage = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const { posts } = await res.json();
  // const { posts, loading, setPosts } = useBlog();

  // const [active, setActive] = useState(false)
  // const [currentPost, setCurrentPost] = useState()

  // const onDelete = (id) => {
  //   setPosts(posts.filter(post => post.id !== id))
  // }

  // const onEdit = (id) => {
  //   setActive(true)
  //   setCurrentPost(posts.find((post) => post.id === id))
  // }

  return (
    <>
      {/* <AddPostFrom setPosts={setPosts} posts={posts}/> */}
      {/* {active && (<EditPost currentPost={currentPost} setActive={setActive} setPosts={setPosts} posts={posts}/>)} */}
      {posts.map((post) => (
        <Blog blog={post} key={post.id} />
      ))}
    </>
  );
};

export default BlogPage;
