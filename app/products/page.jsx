import ProductCard from "./ProductList";
import Link from "next/link";

const ProductsPage = ({ searchParams }) => {
  const { sortBy, order } = searchParams;
  console.log(sortBy, order);

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
              <Link href="/products?sortBy=rating&order=asc">
                Rating: Low to High
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
            {/* <input type="text" placeholder="Search products..." onChange={(event) => handleSearch(event.target.value)} /> */}
          </li>
        </ul>
      </div>
      <div className="products-divider"></div>

      <ProductCard sortBy={sortBy} sortOrder={order}/>
    </div>
  );
};

export default ProductsPage;
