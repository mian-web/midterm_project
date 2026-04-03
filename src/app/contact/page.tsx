import ContactInfo from "@/components/features/contact/ContactInfo"
import ContactForm from "@/components/features/contact/ContactForm"

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto p-10 grid grid-cols-2 gap-10">
      <ContactInfo />
      <ContactForm />
    </div>
  )
}