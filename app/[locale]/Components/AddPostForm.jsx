import { useState } from 'react';
import './AddPostForm.css';
import { v4 as uuidv4 } from "uuid";

const AddPostForm = ({posts, setPosts}) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {id: uuidv4() , title: title, body: body, reactions: 3, views: 0 }
    setPosts([newBlog, ...posts]);

  };

  return (
    <form className="add-post-form" onSubmit={handleSubmit}>
      <label className="add-post-label" htmlFor="title">
        Title
      </label>
      <input
        type="text"
        id="title"
        onChange={e=>setTitle(e.target.value)}
        className="add-post-input"
      />

      <label className="add-post-label" htmlFor="body">
        Body
      </label>
      <textarea
        id="body"
        onChange={e=>setBody(e.target.value)}
        className="add-post-textarea"
      ></textarea>

      <button type="submit" className="add-post-submit-button">
        Submit
      </button>
    </form>
  );
};

export default AddPostForm;