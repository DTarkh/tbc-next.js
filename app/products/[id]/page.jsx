import SingleProduct from "./SingleProduct";

const page = async ({ params: { id } }) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return <div>

    <SingleProduct product={product} />
  </div>;
};

export default page;
