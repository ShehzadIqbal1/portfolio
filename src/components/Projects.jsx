"use client";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p, index) => (
        <ProjectCard key={p.title} project={p} index={index} />
      ))}
    </div>
  );
}
