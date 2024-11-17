// import EditWindow from "../../Components/EditWindow";
// import AddProduct from "../../Components/AddProduct";
import ProductCard from "../../Components/ProductList";
import NavPanel from "../../Components/NavPanel";


const ProductsPage = () => {
 

 
  // const [currentProduct, setCurrentProduct] = useState([]);
  // const [active, setActive] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const onAdd = () => {
    setIsActive(true);
  };

  return (
    <>
      {/* for add and update product */}
      {/* {active && (
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
      )} */}

      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        <aside className="col-span-1 md:col-span-1">
          <NavPanel onAdd={onAdd} />
        </aside>

        <main className="col-span-1 md:col-span-2">
          <ProductCard
            
          />
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
