"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://dummyjson.com/posts";

const useBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(URL).then((response) => setPosts(response.data.posts));
    
    setLoading(false);
  }, []);

  return { posts, loading}
};

export default useBlog;
