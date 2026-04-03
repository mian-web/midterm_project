import "./globals.css"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import { ThemeProvider } from "@/components/providers/theme-provider"
import ThemeToggle from "@/components/common/ThemeToggle"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <div className="container-custom flex justify-end mt-6 mb-2">
  <ThemeToggle />
</div>
          {children}
          <Footer /> {/* 👈 ADD THIS */}
        </ThemeProvider>
      </body>
    </html>
  )
}