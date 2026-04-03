import Image from "next/image"

export default function HomeHero() {
  return (
    <section className="container-custom py-5 border-b">
      
      <div className="relative flex items-center">
        
        <Image
          src="/profile.jpg"
          alt="profile"
          width={450}
          height={200}
          className="object-cover"
        />  

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] border p-6 bg-white dark:bg-black shadow-md">
          <p>
            Hi, I'm Willian, a BSIT student passionate about building clean and
            user-friendly web applications. I enjoy creating modern interfaces
            and learning new technologies.
          </p>
        </div>

      </div>

    </section>
  )
}