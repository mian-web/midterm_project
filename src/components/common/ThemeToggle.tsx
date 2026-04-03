"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ⛔ prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="flex gap-2">
      
      {/* Light */}
      <button
        onClick={() => setTheme("light")}
        className={`w-5 h-5 rounded-full border ${
          theme === "light" ? "border-black" : "border-gray-400"
        } bg-white`}
      />

      {/* Dark */}
      <button
        onClick={() => setTheme("dark")}
        className={`w-5 h-5 rounded-full border ${
          theme === "dark" ? "border-black" : "border-gray-400"
        } bg-black`}
      />

    </div>
  )
}