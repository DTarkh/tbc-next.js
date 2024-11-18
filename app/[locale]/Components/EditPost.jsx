import { useState } from "react";
import "./EditPost.css";

const EditPost = ({ setPosts, posts, currentPost, setActive }) => {
  const [title, setTitle] = useState(currentPost.title);
  const [body, setBody] = useState(currentPost.body);

  const handleSave = (e) => {
    e.preventDefault();
    setActive(false);

    const updatedPost = posts.map((post) =>
      post.id === currentPost.id ? { ...post, title: title, body: body } : post
    );

    setPosts(updatedPost);
  };

  const onCancel = () => {
    setActive(false);
  };

  return (
    <div className="edit-overlay-container">
      <div className="edit-form-wrapper">
        <h2 className="edit-form-title">Edit Post</h2>
        <form onSubmit={handleSave}>
          <label className="edit-form-label">
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="edit-input-field"
            />
          </label>
          <label className="edit-form-label">
            Description
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="edit-textarea-field"
              rows="5"
            />
          </label>
          <div className="edit-form-buttons">
            <button type="submit" className="edit-save-button">
              Save
            </button>
            <button
              type="button"
              className="edit-cancel-button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
