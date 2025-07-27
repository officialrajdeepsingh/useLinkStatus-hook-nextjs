"use client";

import Link from "next/link";
import LoadingIndicator from "./loading-indicator";
import { CircleUserRound, HomeIcon, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container flex justify-center items-center p-4">
      <div className="max-w-2xl flex gap-5 mx-auto">
        <Link
          href="/"
          className="hover:underline hover:underline-offset-2"
          prefetch={false}
        >
          <Button className="rounded" size="lg">
            <HomeIcon className="mr-2 h-4 w-4" />
            <LoadingIndicator />
            Home
          </Button>
        </Link>
        <Link
          href="/posts"
          className="hover:underline hover:underline-offset-2"
          prefetch={false}
        >
          <Button className="rounded" size="lg">
            <NotebookPen className="mr-2 h-4 w-4" />
            <LoadingIndicator />
            Posts
          </Button>
        </Link>
        <Link
          href="/about"
          className="hover:underline hover:underline-offset-2"
          prefetch={false}
        >
          <Button className="rounded" size="lg">
            <CircleUserRound className="mr-2 h-4 w-4" />
            <LoadingIndicator />
            About
          </Button>
        </Link>
      </div>
    </header>
  );
}
