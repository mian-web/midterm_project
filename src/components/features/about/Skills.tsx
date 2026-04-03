export default function Skills() {
  return (
    <section className="container-custom py-16 grid grid-cols-2 gap-10">
      
      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold mb-4">Skills</h3>

        <div className="space-y-2">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Next.js</p>
          <p>C#</p>
          <p>MySQL</p>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold mb-4">Tools</h3>

        <div className="space-y-2">
          <p>VS Code</p>
          <p>Figma</p>
          <p>GitHub</p>
          <p>XAMPP</p>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold mb-4">Hobbies</h3>

        <div className="space-y-2">
          <p>Dancing</p>
          <p>Painting</p>
          <p>Sleeping</p>
          <p>Eating</p>
        </div>
      </div>

    </section>
  )
}