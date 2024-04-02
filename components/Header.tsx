import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-16 mb-20 flex content-center items-center justify-between text-base font-sans">
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Article</Link>
      </div>
    </header>
  );
}
