import { NextRequest } from "next/server";

interface Props {
  params: { id: number };
}

export const GET = async (req: NextRequest, { params }: Props) => {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`);

  const singleProduct = await data.json();

  return Response.json(singleProduct);
};
