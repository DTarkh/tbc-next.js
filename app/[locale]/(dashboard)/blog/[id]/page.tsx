import "./singleBlog.css";
import { BlogType } from "@/app/[locale]/interfaces";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async (props: { params: Params; searchParams: SearchParams }) => {
  const params = await props.params;
  const { id } = await params;
  const res: Response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post: BlogType = await res.json();

  return (
    <>
      <div className="blog-post-card">
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-body">{post.body}</p>

        <div className="blog-post-meta">
          <div className="blog-post-reactions">
            <span className="reaction reaction-likes">
              👍 {post.reactions.likes}
            </span>
            <span className="reaction reaction-dislikes">
              👎 {post.reactions.dislikes}
            </span>
          </div>

          <div className="blog-post-views">
            <span>👁️ {post.views} views</span>
          </div>
          <div className="blog-tags">
            {post.tags.map((tag: string, index: number) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
