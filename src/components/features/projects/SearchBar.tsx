"use client"

import { Input } from "@/components/ui/input"

export default function SearchBar() {
  return (
        <div className="flex justify-center mb-6">
        <Input placeholder="Search..." className="w-1/2" />
        </div>
  )
}