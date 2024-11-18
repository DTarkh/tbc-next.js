import SingleProduct from "../../../Components/SingleProduct";

const page = async ({ params } ) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  return (
  <div>
    <SingleProduct product={product} />
  </div>
  )
};

export default page;
