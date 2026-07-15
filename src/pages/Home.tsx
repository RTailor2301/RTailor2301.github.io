import { getAbout, getContact, getItems, collections } from '../services/content'
import Section from '../components/layout/Section'
import ItemCard from '../components/common/ItemCard'

export default function Home() {
  const about = getAbout()
  const contact = getContact()

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero */}
      <header className="py-16 flex flex-col sm:flex-row items-center gap-8">
        <img
          src="/pfp.jpg"
          alt=""
          className="w-28 h-28 rounded-full object-cover border-2 border-[var(--purple)]"
        />
        <div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h1 className="text-3xl font-bold">{about.name}</h1>
            <span className="text-gray-400">//</span>
            <p className="text-[var(--purple)]">{about.headline}</p>
          </div>
          <p className="mt-3 text-gray-700">{about.intro}</p>
          <p className="text-sm text-gray-500 mt-2">{about.role}</p>
          <div className="mt-4 flex gap-3">
            <a href="#projects" className="bg-[var(--purple)] text-white px-4 py-2 rounded text-sm">
              View Projects
            </a>
            <a href="#contact" className="border border-gray-300 px-4 py-2 rounded text-sm">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* One section per collection — driven by data, not hardcoded */}
      {collections.map(({ id, label, comingSoon }) => {
        const items = getItems(id)
        if (!comingSoon && items.length === 0) return null

        return (
          <Section key={id} id={id} title={label}>
            {comingSoon ? (
              <p className="text-gray-500 border border-dashed border-gray-300 rounded-lg p-6 text-center">
                Coming soon...
              </p>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item.slug}>
                    <ItemCard collection={id} item={item} />
                  </li>
                ))}
              </ul>
            )}
          </Section>
        )
      })}

      <Section id="contact" title="Contact">
        <ul className="space-y-2">
          <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><a href={contact.github}>GitHub</a></li>
          <li><a href={contact.linkedin}>LinkedIn</a></li>
        </ul>
      </Section>
    </div>
  )
}