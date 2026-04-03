"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"
import { Input } from "@/components/ui/input"

export default function ProjectList() {
  const [search, setSearch] = useState("")

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="container-custom py-16">
      
      <div className="mb-10">
  <Input
    placeholder="Search projects..."
    className="w-full max-w-md"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <div className="grid grid-cols-3 gap-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No projects found.
          </p>
        )}
      </div>

    </section>
  )
}