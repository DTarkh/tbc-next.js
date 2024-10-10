
import Blog from './blog';

const BlogPage = async () => {
    const res = await fetch("https://dummyjson.com/posts")
    const { posts }  = await res.json()

    

  return (
    <div>
        <h1>BlogPage Posts</h1>
        {posts.map((post) => (<Blog blog={post}/>))}
    </div>
  )
}

export default BlogPage


  
