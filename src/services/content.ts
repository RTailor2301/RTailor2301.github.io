import type { About, Collection, Contact, ContentItem } from '../types/content'
import about from '../../content/about.json'
import contact from '../../content/contact.json'

// Vite finds JSON at build
const modules = import.meta.glob('../../content/*/*.json', { eager: true })

function loadCollection(name: Collection): ContentItem[] {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/content/${name}/`))
    .map(([, mod]) => (mod as { default: ContentItem }).default)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

export function getAbout(): About {
  return about as About
}

export function getContact(): Contact {
  return contact as Contact
}

export function getItems(collection: Collection): ContentItem[] {
  return loadCollection(collection)
}

export function getItem(collection: Collection, slug: string): ContentItem | undefined {
  return getItems(collection).find((item) => item.slug === slug)
}

export type CollectionMeta = {
  id: Collection
  label: string
  comingSoon?: boolean
}

export const collections: CollectionMeta[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'games', label: 'Games', comingSoon: true },
]