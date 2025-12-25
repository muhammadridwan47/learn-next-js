import { Post } from "../types/post";

export async function getLastPost(): Promise<Post[]> {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts?limit=5");
  return await posts.json();
}

export async function getDetailPost(id: number): Promise<Post> {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await posts.json();
}


export async function getAllPost(): Promise<Post[]> {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await posts.json();
}