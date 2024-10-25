import "./AddProduct.css"
import { useState } from "react";


const AddProduct = ({ setIsActive, products, setProducts}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {title: title, price: price}
    setProducts([...products, newProduct])

    setIsActive(false)
  }

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
          <button type="submit" className="form-button">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;