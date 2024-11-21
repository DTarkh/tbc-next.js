import { ProductType } from "@/app/[locale]/interfaces";
import SingleProduct from "../../../Components/SingleProduct";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const page = async (props: { params: Params; searchParams: SearchParams }) => {
  const params = await props.params;
  const { id } = await params;
  const res: Response = await fetch(`http://localhost:3000/api/products/${id}`);
  const product: ProductType = await res.json();

  return (
    <div>
      <SingleProduct product={product} />
    </div>
  );
};

export default page;
