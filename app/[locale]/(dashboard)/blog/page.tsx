// import useBlog from "../../Components/hooks/useBlog";
// import EditPost from "../../Components/EditPost"
// import AddPostFrom from "../../Components/AddPostForm"
import { lightningCssTransform } from "next/dist/build/swc/generated-native";
import Blog from "../../Components/Blog";
import { BlogType } from "../../interfaces";


const BlogPage = async () => {
  const res: Response = await fetch("http://localhost:3000/api/blog");
  const posts : BlogType[]  = await res.json();
  console.log("posts", posts)
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
     
     
     
      {posts.map((post: BlogType) => (
        <Blog key={post.id} blog={post} />
      ))}

    
      


     
       

    </>
  );
};

export default BlogPage;
