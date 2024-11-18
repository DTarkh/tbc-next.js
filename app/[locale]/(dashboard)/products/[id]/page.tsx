import SingleProduct from "../../../Components/SingleProduct";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const page = async (props: { params: Params; searchParams: SearchParams }) => {
  const params = await props.params;
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <SingleProduct product={product} />
    </div>
  );
};

export default page;
