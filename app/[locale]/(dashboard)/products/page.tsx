// import EditWindow from "../../Components/EditWindow";
// import AddProduct from "../../Components/AddProduct";
import ProductCard from "../../Components/ProductList";
import NavPanel from "../../Components/NavPanel";
import fetchProducts from "../../Components/hooks/useProducts";
import { ProductType } from "../../interfaces";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ProductsPage = async (props: {
  params: Params;
  searchParams: SearchParams;
}) => {
  const searchParams = await props.searchParams;
  const { search, sortBy, order } = searchParams;


  const products: [ProductType] = await fetchProducts(search, sortBy, order);
  // const [currentProduct, setCurrentProduct] = useState([]);
  // const [active, setActive] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // const onAdd = () => {
  //   setIsActive(true);
  // };

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
          <NavPanel />
        </aside>

        <main className="col-span-1 md:col-span-2">
          <ProductCard products={products} />
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
