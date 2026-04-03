export default function CategoryPage({
    params,
  }: {
    params: { slug: string[] }
  }) {
    return (
      <div className="container-custom py-16">
        <h1 className="text-xl font-bold">Category</h1>
  
        <p>{params.slug.join(" / ")}</p>
      </div>
    )
  }