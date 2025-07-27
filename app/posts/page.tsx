import { Card } from "@/components/Card";
import { CardType } from "@/type";

async function getPosts() {
  const data = await fetch("https://dummyjson.com/posts?limit=10");
  return await data.json();
}

export default async function Home() {
  const { posts } = await getPosts();
  return (
    <main className="container p-5 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="mb-16 flex flex-col mx-auto">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
      </div>

      {posts.map((post: CardType) => (
        <Card post={post} key={post.id} />
      ))}
    </main>
  );
}
