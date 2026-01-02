"use client"

import { getAllPost } from "../../lib/api";
import PostList from "../../components/PostList";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";

export default  function Page() {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPost = () => {
      getAllPost().then((posts) => {
        setData(posts);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect( () => {
      getPost();
  }, [])

  return (
    <div className="main-heading">
      <h2>Daftar Tulisan</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam modi optio, sapiente ipsam nihil explicabo dignissimos vel minima excepturi?
      </p>
      {isLoading ? <p>Loading....</p> :  <PostList posts={data} />}
    </div>
  );
}

