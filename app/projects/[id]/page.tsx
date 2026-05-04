import { projectsData } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
