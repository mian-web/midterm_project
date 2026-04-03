import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Props = {
  slug: string
  title: string
  description: string
  image: string
}

export default function ProjectCard({ slug, title, description, image }: Props) {
  return (
    <div className="text-center space-y-3">
      
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-md object-cover mx-auto"
      />

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <Link href={`/projects/${slug}`}>
        <Button size="sm">View</Button>
      </Link>

    </div>
  )
}