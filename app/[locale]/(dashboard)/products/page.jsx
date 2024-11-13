"use client";

import ProductCard from "../../Components/ProductList";


import useProducts2 from "../../Components/hooks/useProducts2";
import { useState } from "react";
import EditWindow from "../../Components/EditWindow";
import Spinner from "../../Components/Spinner";
import AddProduct from "../../Components/AddProduct";
import NavPanel from "../../Components/NavPanel"

const ProductsPage = () => {
  

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
      <>
        <div className="products-header">
          <h1 className="products-headertext">Products</h1>
        </div>
        <Spinner />;
      </>
    );
  }

  return (
    <>
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
      <div className="products-divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <aside className="col-span-1 md:col-span-1 bg-gray-100 p-4 rounded-lg shadow-lg">
          <NavPanel onAdd={onAdd}/>
        </aside>

        <main className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-lg">
        <ProductCard
        products={products}
        setProducts={setProducts}
        setCurrentProduct={setCurrentProduct}
        setActive={setActive}
      />
        </main>
      </div>
      

      

     
    </>
  );
};

export default ProductsPage;
