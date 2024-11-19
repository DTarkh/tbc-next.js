// import useBlog from "../../Components/hooks/useBlog";
// import EditPost from "../../Components/EditPost"
// import AddPostFrom from "../../Components/AddPostForm"
import Blog from "../../Components/Blog";
import { BlogType } from "../../interfaces";
import LoadingSpinner from "../../Components/Spinner";

const BlogPage = async () => {
  const res: Response = await fetch("https://dummyjson.com/posts");
  const { posts }: { posts: [BlogType] } = await res.json();
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
      {posts.map((blog: BlogType) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </>
  );
};

export default BlogPage;
