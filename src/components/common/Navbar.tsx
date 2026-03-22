import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="font-bold">Willian - Student 3C</h1>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Project</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <ThemeToggle />
    </nav>
  )
}