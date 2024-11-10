"use client";

import Blog from "../../Components/Blog";
import useBlog from "../../Components/hooks/useBlog";
import LoadingSpinner from "../../Components/Spinner";
import { useState } from "react";
import EditPost from "../../Components/EditPost"
import AddPostFrom from "../../Components/AddPostForm"

const BlogPage = () => {
  // const res = await fetch("https://dummyjson.com/posts");
  // const { posts } = await res.json();
  const { posts, loading, setPosts } = useBlog();
  

const [active, setActive] = useState(false)
const [currentPost, setCurrentPost] = useState()

const onDelete = (id) => {
  setPosts(posts.filter(post => post.id !== id))
}

const onEdit = (id) => {
  setActive(true)
  setCurrentPost(posts.find((post) => post.id === id))
  
  
}




  if (loading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <>
      <AddPostFrom setPosts={setPosts} posts={posts}/>
      {active && (<EditPost currentPost={currentPost} setActive={setActive} setPosts={setPosts} posts={posts}/>)}
      {posts.map((post) => (
        <Blog blog={post} key={post.id} onDelete={onDelete} onEdit={onEdit} setActive={setActive}/>
      ))}
    </>
  );
};

export default BlogPage;
