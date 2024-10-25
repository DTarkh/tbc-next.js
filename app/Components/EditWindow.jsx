import { useState } from "react";
import "./EditWindow.css";

const EditWindow = ({ products, setProducts, currentProduct, setActive }) => {
  const [title, setTitle] = useState(currentProduct.title);
  const [rating, setRating] = useState(currentProduct.rating);
  const [price, setPrice] = useState(currentProduct.price);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProducts = products.map((product) =>
        product.id === currentProduct.id
          ? {
              ...product,
              title: title,
              rating: rating,
              price: price,
              
            }
          : product
      );
   
      // Update the products state
      setProducts(updatedProducts);

    setActive(false);
  };

  return (
    <div className="product-form-overlay">
      <div className="product-form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <h2 className="product-form-title">Edit Product</h2>
          <label className="product-form-label">
            Title:
            <input
              className="product-form-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
          </label>
          <label className="product-form-label">
            Rating:
            <input
              className="product-form-input"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
             
            />
          </label>
          <label className="product-form-label">
            Price:
            <input
              className="product-form-input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              
            />
          </label>
          <button className="product-form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditWindow;
