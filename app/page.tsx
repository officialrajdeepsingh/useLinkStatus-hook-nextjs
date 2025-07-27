import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center h-lvh">
      <main className="flex items-center justify-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={680}
          height={1264}
          priority
        />
      </main>
    </div>
  );
}
