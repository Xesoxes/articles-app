import { PostListPageComponent } from "@/components/app/posts/post-list-page";
import client from "@/tina/__generated__/client";

export default async function PostListPage() {
  const result = await client.queries.postConnection();

  return <PostListPageComponent {...result} />;
}
