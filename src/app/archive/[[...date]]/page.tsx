export default function ArchivePage({
    params,
  }: {
    params: { date?: string[] }
  }) {
    return (
      <div className="container-custom py-16">
        <h1 className="text-xl font-bold">Archive</h1>
  
        {params.date ? (
          <p>{params.date.join(" / ")}</p>
        ) : (
          <p>No date selected</p>
        )}
      </div>
    )
  }