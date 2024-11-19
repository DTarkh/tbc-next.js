import { ChangeEvent, useState } from "react";
import "./EditWindow.css";
import { ProductType } from "../interfaces";

type EditWindow = {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
  currentProduct: ProductType;
  setActive: (active: boolean) => void;
};

const EditWindow: React.FC<EditWindow> = ({
  products,
  setProducts,
  currentProduct,
  setActive,
}) => {
  const [title, setTitle] = useState(currentProduct.title);
  const [rating, setRating] = useState(currentProduct.rating);
  const [price, setPrice] = useState(currentProduct.price);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedProducts = products.map((product: ProductType) =>
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
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </label>
          <label className="product-form-label">
            Price:
            <input
              className="product-form-input"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
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
