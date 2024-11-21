// singleBlog.tsx
import BlogPost from "./BlogPost";
import { BlogType } from "@/app/[locale]/interfaces";

type Params = { id: string };

const Page = async ({ params }: { params: Params }) => {
  const { id } = params;
  const res: Response = await fetch(`http://localhost:3000/api/blog/${id}`);
  const post: BlogType = await res.json();

  return (
    <>
      {/* Pass post data to the client-side BlogPost component */}
      <BlogPost post={post} />
    </>
  );
};

export default Page;