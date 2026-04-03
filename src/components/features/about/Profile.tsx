import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="container-custom py-16 border-b">
      
      <div className="grid grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-4">
          
          {/* IMAGE */}
          <Image
            src="/image.jpg"
            alt="about image"
            width={500}
            height={300}
            className="object-cover"
          />

          {/* SMALL BOX (SOCIAL + CONTACT) */}
          <div className="border p-4 grid grid-cols-2 gap-8">
            
            <div>
              <p className="font-semibold mb-2">SOCIALS</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>GitHub</p>
            </div>

            <div>
              <p className="font-semibold mb-2">CONTACT</p>
              <p>Email</p>
              <p>Phone</p>
              <p>Telegram</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE BIG TEXT */}
        <div className="border p-6">
        <br></br>
          <p>About Me</p>
          <br></br>
          <p>
            I am currently a third-year BSIT student at Cordova Public College.
            My focus is on developing responsive and user-friendly applications.
            I enjoy solving problems, learning new tools, and improving my
            development skills.
            <br /><br />
            This portfolio showcases my projects, skills, and experiences in
            web development and programming.
          </p>
        </div>

      </div>

    </section>
  )
}