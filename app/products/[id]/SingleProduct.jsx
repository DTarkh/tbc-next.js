import "./SingleProduct.css";

const SingleProduct = ({ product }) => {
  return (
    <div className="singleProduct-container">
      <div className="ProductCard" key={product.id}>
        <div className="card-image">
          <img src={product.thumbnail} alt={"image"} />
        </div>
        <h2 className="ProductCard-title">{product.title}</h2>
        <p className="ProductCard-description">{product.description}</p>
        <p className="ProductCard-category">Category: {product.category}</p>
        <p className="ProductCard-price">Price: ${product.price}</p>
        <p className="ProductCard-discount">
          Discount: {product.discountPercentage}%
        </p>
        <p className="ProductCard-rating">Rating: {product.rating}/5</p>
        <p className="ProductCard-stock">Stock: {product.stock} units</p>
        <p className="ProductCard-brand">Brand: {product.brand}</p>

        <p className="ProductCard-warranty">
          Warranty: {product.warrantyInformation}
        </p>
        <p className="ProductCard-shipping">
          Shipping: {product.shippingInformation}
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
