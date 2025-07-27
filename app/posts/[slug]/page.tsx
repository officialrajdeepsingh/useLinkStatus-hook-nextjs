import { Button } from "@/components/ui/button";
import { CardType } from "@/type";
import { ArrowLeft, Tags } from "lucide-react";
import Link from "next/link";

async function getPosts(id: string) {
  const data = await fetch(`https://dummyjson.com/posts/${id}`);
  return data.json();
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const data = await fetch("https://dummyjson.com/posts?limit=10");
  const { posts } = await data.json();
  return posts.map((post: CardType) => ({
    slug: `${post.id}`,
  }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: CardType = await getPosts(slug);

  return (
    <main className="container p-5 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Link href="/posts" className="text-xl font-medium mt-2">
        <Button className="px-0" variant={"link"}>
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="flex flex-col mx-auto">
        <div className="my-4 flex justify-start">
          <Button size={"lg"} className="text-sm px-5 rounded capitalize">
            <Tags /> {post?.tags[0]}{" "}
          </Button>
        </div>
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="text-xl font-medium mt-2">{post.body}</p>
      </div>
    </main>
  );
}
