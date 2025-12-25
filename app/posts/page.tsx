import { getAllPost } from "../../lib/api";
import PostList from "../../components/PostList";

export default async function Page() {
  const posts = await getAllPost();
  return (
    <div className="main-heading">
      <h2>Daftar Tulisan</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam modi optio, sapiente ipsam nihil explicabo dignissimos vel minima excepturi?
      </p>
      <PostList posts={posts} />
    </div>
  );
}

