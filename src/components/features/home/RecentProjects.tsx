import ProjectCard from "./ProjectCard"

export default function RecentProjects() {
  return (
    <section className="p-10 border-b text-center">
      <h2 className="text-xl mb-6">Recent Projects</h2>

      <div className="grid grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}