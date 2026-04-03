import Link from "next/link"

const posts = [
  { slug: "first-post", title: "My First Blog" },
  { slug: "second-post", title: "Learning Next.js" },
]

export default function BlogPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-xl font-bold mb-6">Blog</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  )
}