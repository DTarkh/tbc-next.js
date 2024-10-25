"use client";

import ProductCard from "./ProductList";
import Link from "next/link";
import Search from "./Search";
import useProducts2 from "./hooks/useProducts2";
import { useState } from "react";
import EditWindow from "../Components/EditWindow";

const ProductsPage = ({ searchParams }) => {
  const { sortBy, order, search } = searchParams;

  const { products, setProducts, loading } = useProducts2();
  const [currentProduct, setCurrentProduct] = useState([]);
  const [active, setActive] = useState(false)
  console.log(active)

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="products-container">
    {active && <EditWindow title={currentProduct.title}
          rating={currentProduct.rating}
          price={currentProduct.price}
        />}
  
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

      <ProductCard
        sortBy={sortBy}
        sortOrder={order}
        search={search}
        products={products}
        setProducts={setProducts}
        setCurrentProduct={setCurrentProduct}
        setActive={setActive}
      />
    </div>
  );
};

export default ProductsPage;

//   // Add a new product
//   const addProduct = (newProduct) => {
//     setProducts([...products, newProduct]);
//   };

//   // Edit an existing product by id
//   const editProduct = (id, updatedProduct) => {
//     setProducts(products.map((product) =>
//       product.id === id ? { ...product, ...updatedProduct } : product
//     ));
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <button onClick={() => editProduct(product.id, { price: newPrice })}>Edit</button>
//             <button onClick={() => deleteProduct(product.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addProduct({ id: newId, name: 'New Product', price: 10 })}>Add Product</button>
//     </div>
//   );
// };

// export default ProductList;
