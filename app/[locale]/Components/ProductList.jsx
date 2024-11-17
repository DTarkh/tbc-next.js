import { Link } from "../../../i18n/routing";
import "./ProductList.css";
// import fetchProducts from "./hooks/useProducts";

const ProductCard = async({ products }) => {
 

  // const onDelete = (id) => {
  //   setProducts(products.filter((product) => product.id !== id));
  // };

  // const onUpdate = (id) => {
  //   setCurrentProduct(products.find((product) => product.id === id));
  //   console.log("Update", id);
  //   setActive(true);
  // };

  return (
    <div className="ProductList">
      {products.map((product) => (
        <div className="ProductCard" key={product.id}>
          <div className="card-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <p className="ProductCard-discount">
            {product.discountPercentage}% off
            <span className="limited-deal">Limited Deal</span>
          </p>
          <Link href={`/products/${product.id}`}>
            <h2 className="ProductCard-title">{product.title}</h2>
          </Link>
          <p className="ProductCard-rating">Rating: {product.rating}</p>
          <span className="ProductCard-price">Price: ${product.price}</span>
          {/* <div className="ProductCard-btns">
            <button
              className="ProductCard-button-update"
              onClick={() => onUpdate(product.id)}
            >
              Update
            </button>
            <button
              className="ProductCard-button"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
