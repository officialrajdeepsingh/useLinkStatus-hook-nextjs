import { CardType } from "@/type";
import Link from "next/link";
import LoadingIndicator from "./loading-indicator";
export function Card({ post }: { post: CardType }) {
  const { title, id } = post;
  return (
    <Link
      href={`/posts/${id}`}
      className="relative bg-card-foreground rounded text-card w-full p-10 flex flex-col items-start gap-4 sm:items-start"
      prefetch={false}
    >
      <div className="absolute top-6/12 right-6/12">
        <LoadingIndicator />
      </div>

      <div className="flex w-full flex-col items-start gap-5 md:gap-0">
        <p className="mb-3 text-xl font-bold md:text-2xl hover:underline hover:underline-offset-2">
          {title}
        </p>
        <div className="flex w-full flex-col justify-between gap-3  sm:w-auto md:flex-row md:items-center">
          <p className="text-sm">By Johnson </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 6 6"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            className="hidden h-1.5 w-1.5 items-center justify-center  md:block"
          >
            <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
          </svg>
          <p className="text-sm">5 mins read</p>
        </div>
      </div>
    </Link>
  );
}
