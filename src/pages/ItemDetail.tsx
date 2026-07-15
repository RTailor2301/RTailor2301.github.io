import { Link, useParams } from 'react-router-dom'
import { getItem, collections } from '../services/content'
import type { Collection } from '../types/content'

export default function ItemDetail() {
  const { collection, slug } = useParams()
  const col = collection as Collection
  const item = getItem(col, slug ?? '')

  const label = collections.find((c) => c.id === col)?.label ?? col

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p>Not found.</p>
        <Link to="/">← Home</Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500">
        <Link to="/" className="hover:underline">Home</Link> / {label}
      </p>
      <h1 className="text-3xl font-bold mt-2">{item.title}</h1>
      {item.date && <p className="text-gray-500 text-sm mt-1">{item.date}</p>}

      <p className="mt-6 whitespace-pre-line">{item.description}</p>

      {item.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-6">
          {item.tags.map((tag) => (
            <li key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">{tag}</li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex gap-4">
        {item.links?.github && (
          <a href={item.links.github} className="text-[var(--purple)] hover:underline">GitHub</a>
        )}
        {item.links?.demo && (
          <a href={item.links.demo} className="text-[var(--purple)] hover:underline">Demo</a>
        )}
        {item.links?.pdf && (
          <a href={item.links.pdf} className="text-[var(--purple)] hover:underline">PDF</a>
        )}
      </div>

      <Link to="/" className="inline-block mt-10 text-sm hover:underline">← Back</Link>
    </article>
  )
}