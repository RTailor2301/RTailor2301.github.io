import { Link } from 'react-router-dom'
import type { Collection, ContentItem } from '../../types/content'

interface Props {
  collection: Collection
  item: ContentItem
}

export default function ItemCard({ collection, item }: Props) {
  return (
    <article className="border border-gray-200 rounded-lg p-4 bg-white">
      <h3 className="font-medium text-lg">
        <Link to={`/${collection}/${item.slug}`} className="hover:underline">
          {item.title}
        </Link>
      </h3>
      <p className="text-gray-600 mt-1">{item.summary}</p>
      {item.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {item.tags.map((tag) => (
            <li key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Link
        to={`/${collection}/${item.slug}`}
        className="inline-block mt-4 text-sm text-[var(--purple)] hover:underline"
      >
        Read more →
      </Link>
    </article>
  )
}