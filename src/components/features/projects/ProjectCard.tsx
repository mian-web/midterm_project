import Image from "next/image"
import { Button } from "@/components/ui/button"

type Props = {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div className="flex flex-col justify-between h-full text-center space-y-3 border rounded-lg p-4">
      
      <div className="relative w-full h-[180px] overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>

      <a href={link} target="_blank">
        <Button size="sm">View</Button>
      </a>

    </div>
  )
}