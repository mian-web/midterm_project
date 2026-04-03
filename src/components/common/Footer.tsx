import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-10">

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="grid grid-cols-3 gap-6 text-gray-400 justify-items-center">
          
          <div className="text-left space-y-1">
            <p className="mb-2 font-semibold text-gray-600">Willian Degamo</p>
            <p>UI Designer</p>
            <p>Cordova, Cebu</p>
          </div>

          <div className="text-left space-y-1">
            <p className="mb-2 font-semibold text-gray-600">Pages</p>
            <Link href="/" className="block hover:underline underline-offset-4">Home</Link>
            <Link href="/about" className="block hover:underline underline-offset-4">About</Link>
            <Link href="/projects" className="block hover:underline underline-offset-4">Project</Link>
            <Link href="/contact" className="block hover:underline underline-offset-4">Contact</Link>
          </div>
    
          <div className="text-left space-y-1">
            <p className="mb-2 font-semibold text-gray-600">Socials</p>

            <a href="https://github.com/mian-web" target="_blank" rel="noopener noreferrer" className="block hover:underline underline-offset-4">
              Github
            </a>

            <a href="https://www.facebook.com/willianstar46" target="_blank" rel="noopener noreferrer" className="block hover:underline underline-offset-4">
              Facebook
            </a>

            <a href="https://www.instagram.com/wllncu46/" target="_blank" rel="noopener noreferrer" className="block hover:underline underline-offset-4">
              Instagram
            </a>

            <a href="https://t.me/rougezz" target="_blank" rel="noopener noreferrer" className="block hover:underline underline-offset-4">
              Telegram
            </a>
          </div>

        </div>

        <p className="text-sm mt-6 text-center text-gray-400">
          © 2026 Willian. All rights reserved.
        </p>

      </div>

    </footer>
  )
}