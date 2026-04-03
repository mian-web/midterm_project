import ProjectCard from "../projects/ProjectCard"
import { projects } from "@/data/projects"

export default function RecentProjects() {
  return (
    <section className="container-custom py-16 border-b text-center">
      
      <h2 className="text-xl font-semibold mb-10">Recent Projects</h2>

      <div className="grid grid-cols-3 gap-10">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

    </section>
  )
}