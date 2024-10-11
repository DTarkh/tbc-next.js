import Link from "next/link";
import "./ProductList.css";

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard" key={product.id}>
      <div className="card-image">
        <img src={product.thumbnail} alt={"image"} />
      </div>

      <p className="ProductCard-discount">
        {product.discountPercentage}% off
        <span className="limited-deal">Limited Deal</span>
      </p>
      <Link href={`/products/${product.id}`}>
        <h2 className="ProductCard-title">{product.title}</h2>
      </Link>
      <p className="ProductCard-rating">Rating: {product.rating} </p>
      <span className="ProductCard-price">Price: ${product.price}</span>
    </div>
  );
};

export default ProductCard;
