"use client";

import { PostConnectionQuery } from "@/tina/__generated__/types";
import moment from "moment";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PostListPageComponent(props: {
  data: PostConnectionQuery;
  variables: {};
  query: string;
}) {
  const { data } = useTina(props);
  const postList = data.postConnection.edges;

  postList?.sort((a: any, b: any) => {
    const dateA: any = new Date(a.node.date);
    const dateB: any = new Date(b.node.date);
    return dateB - dateA;
  });

  return (
    <>
      <h1>Articles</h1>
      <div>
        <ul className="m-0 pl-0">
          {postList?.map((post: any) => (
            <li key={post.node.id} className="mt-0 pb-2">
              <div className="flex">
                <span className="text-sm text-gray-400">
                  {moment(post.node.date).format("MMM DD, YYYY")}
                </span>
              </div>
              <Link href={`/posts/${post.node._sys.filename}`}>
                {post.node.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
