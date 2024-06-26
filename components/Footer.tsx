import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-10 text-center text-sm">
      <hr />
      <p>
        The{" "}
        <Link
          href="https://koreoxy.netlify.app/"
          target="_blank"
          className="underline-offset-2 hover:text-emerald-500 hover:underline"
        >
          Koreoxy
        </Link>{" "}
        Blog
      </p>
    </div>
  );
}
