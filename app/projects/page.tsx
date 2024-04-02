import { ProjectListPageComponent } from "@/components/app/projects/project-list-page";
import client from "@/tina/__generated__/client";

export default async function ProjectListPage() {
  const result = await client.queries.projectConnection();

  return <ProjectListPageComponent {...result} />;
}
