import Image from "next/image";
import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div className="product-details-container" key={product.id}>
        <div className="product-image">
          <Image
            src={product.thumbnail}
            alt="Product image"
            width={100}
            height={100}
          />
        </div>

        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>

          <div className="product-meta">
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-discount">
              Discount: {product.discountPercentage}%
            </p>
            <p className="product-rating">Rating: {product.rating}/5</p>
            <p className="product-stock">Stock: {product.stock} units</p>
            <p className="product-brand">Brand: {product.brand}</p>
          </div>

          <div className="product-additional-info">
            <p className="product-warranty">
              Warranty: {product.warrantyInformation}
            </p>
            <p className="product-shipping">
              Shipping: {product.shippingInformation}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
