"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div className="border p-6">
      <span className="font-light">fill up ari mego:</span>
      <br></br>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>

      <Input placeholder="Email" className="mb-4" />
      <span className="font-light">Feel free to write a feedback:</span>
      <br></br>

      <textarea
        className="w-full border p-2 mb-4"
        placeholder="Message"
      />

      <div className="text-center">
        <Button>Send</Button>
      </div>

    </div>
  )
}