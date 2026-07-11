export type Collection = 'projects' | 'research' | 'games'

export interface ContentItem {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  date?: string
  links?: {
    github?: string
    demo?: string
    pdf?: string
  }
  image?: string
}

export interface About {
  name: string
  headline: string
  intro: string
  role: string
}

export interface Contact {
  email: string
  github: string
  linkedin: string
}