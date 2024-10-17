import ProductCard from "./ProductList";
import Link from "next/link";
import Search from "./Search"

const ProductsPage = ({ searchParams }) => {
  const { sortBy, order } = searchParams;
  

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-headertext">Products</h1>
      </div>
      <div className="products-sortcontainer">
        <ul>
          <li>
            Sort by:
            <button className="products-btn">
              {" "}
              <Link href="/products?sortBy=price&order=asc">
                Price: Low to High
              </Link>
            </button>
            <button className="products-btn">
              {" "}
              <Link href="/products?sortBy=price&order=desc">
                Price: High to Low
              </Link>
            </button>
            <button className="products-btn">
              {" "}
              <Link href="/products?sortBy=discountPercentage&order=desc">
                Discount: High to Low
              </Link>
            </button>
            <button className="products-btn">
              {" "}
              <Link href="/products?sortBy=rating&order=desc">
                Rating: High to Low
              </Link>
            </button>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </div>
      <div className="products-divider"></div>

      <ProductCard sortBy={sortBy} sortOrder={order}/>
    </div>
  );
};

export default ProductsPage;
