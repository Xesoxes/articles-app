import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import {
  RxChatBubble,
  RxDividerVertical,
  RxHome,
  RxPerson,
} from "react-icons/rx";
import { RiGithubFill, RiYoutubeFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="mt-16 mb-20 flex content-center items-center justify-between text-base font-sans">
      <div className="flex gap-3">
        <Link href="/" className="max-sm:hidden">
          Home
        </Link>
        <Link href="/" className="sm:hidden">
          <RxHome />
        </Link>
        <Link href="/posts" className="max-sm:hidden">
          Article
        </Link>
        <Link href="/posts" className="sm:hidden">
          <RxChatBubble />
        </Link>
        <Link href="/about" className="max-sm:hidden">
          About
        </Link>
        <Link href="/about" className="sm:hidden">
          <RxPerson />
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="https://youtube.com/@1sh1sh" target="_blank">
          <RiYoutubeFill />
        </Link>
        <Link href="https://github.com/koreoxy" target="_blank">
          <RiGithubFill />
        </Link>
        <RxDividerVertical className="text-gray-300 dark:text-gray-600" />
        <ThemeToggle />
      </div>
    </header>
  );
}
