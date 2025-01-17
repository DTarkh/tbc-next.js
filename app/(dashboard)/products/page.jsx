"use client";

import ProductCard from "../../Components/ProductList";
import Link from "next/link";
import Search from "../../Components/Search";
import useProducts2 from "../../Components/hooks/useProducts2";
import { useState } from "react";
import EditWindow from "../../Components/EditWindow";
import Spinner from "../../Components/Spinner";
import AddProduct from "../../Components/AddProduct";

const ProductsPage = ({ searchParams }) => {
  // const { sortBy, order, search } = searchParams;

  const { products, setProducts, loading } = useProducts2();
  const [currentProduct, setCurrentProduct] = useState([]);
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  console.log(products);

  const onAdd = () => {
    setIsActive(true);
  };

  if (loading) {
    return (
      <div className="products-container">
        <div className="products-header">
          <h1 className="products-headertext">Products</h1>
        </div>
        <Spinner />;
      </div>
    );
  }

  return (
    <div className="products-container">
      {active && (
        <EditWindow
          currentProduct={currentProduct}
          setActive={setActive}
          products={products}
          setProducts={setProducts}
        />
      )}

      {isActive && (
        <AddProduct
          setIsActive={setIsActive}
          products={products}
          setProducts={setProducts}
        />
      )}

      <div className="products-header">
        <h1 className="products-headertext">Products</h1>
      </div>
      <div className="products-sortcontainer">
        <ul>
          <button className="products-addbtn" onClick={() => onAdd()}>
            Add New Product
          </button>
          <li>
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

      <ProductCard
        // sortBy={sortBy}
        // sortOrder={order}
        // search={search}
        products={products}
        setProducts={setProducts}
        setCurrentProduct={setCurrentProduct}
        setActive={setActive}
      />
    </div>
  );
};

export default ProductsPage;
