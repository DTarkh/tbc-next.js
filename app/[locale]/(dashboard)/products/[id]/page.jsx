import SingleProduct from "../../../Components/SingleProduct";

const page = async ({ params } ) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
  <div>
    <SingleProduct product={product} />
  </div>
  )
};

export default page;
