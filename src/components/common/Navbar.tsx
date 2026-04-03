import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container-custom flex justify-between items-center py-4">
        
        {/* Name */}
        <div>
          <h1 className="font-bold text-lg">Willian</h1>
          <p className="text-sm text-muted-foreground">Student 3C</p>
        </div>

        {/* Navigation (NOW at the end) */}
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Project</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  )
}