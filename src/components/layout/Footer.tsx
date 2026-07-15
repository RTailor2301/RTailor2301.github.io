import { getContact } from '../../services/content'

export default function Footer() {
  const contact = getContact()

  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500">
      <a href={contact.github} className="hover:underline">GitHub</a>
      {' · '}
      <a href={`mailto:${contact.email}`} className="hover:underline">Email</a>
    </footer>
  )
}