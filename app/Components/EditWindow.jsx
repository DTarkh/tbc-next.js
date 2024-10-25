import { useState } from "react";
import "./EditWindow.css"

const EditWindow = ({title, rating, price }) => {

const handleSubmit =() =>{
    console.log("submitted")
}


  return (
    <div className="product-form-overlay">
    <div className="product-form-container">
      <form className="product-form" onSubmit={handleSubmit}>
        <h2 className="product-form-title">Add Product</h2>
        <label className="product-form-label">
          Title:
          <input
            className="product-form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="product-form-label">
          Rating:
          <input
            className="product-form-input"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            step="0.1"
            required
          />
        </label>
        <label className="product-form-label">
          Price:
          <input
            className="product-form-input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </label>
        <button className="product-form-button" type="submit">Add Product</button>
      </form>
    </div>
  </div>
);
};

export default EditWindow;