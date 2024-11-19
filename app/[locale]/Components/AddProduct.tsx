import "./AddProduct.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddProduct = ({ setIsActive, products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const image =
    "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: uuidv4(),
      title: title,
      price: price,
      rating: 4.96,
      discountPercentage: 10,
      thumbnail: image,
    };
    console.log(newProduct);
    setProducts([newProduct, ...products]);
    setIsActive(false);
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Add Product</h2>
          <label className="form-label">
            Title:
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="form-label">
            Price:
            <input
              type="number"
              className="form-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button type="submit" className="form-button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
