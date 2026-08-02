export interface Bio {
  name: string
  title: string
  institution: string
  department: string
  location: string
  email: string
  photo: string
  bio_short: string
  bio_long: string
  research_interests: string[]
  links: {
    google_scholar: string
    repec: string
    ssrn: string
    github: string
    linkedin: string
    dallas_fed_profile: string
    cv: string
  }
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  volume?: string
  issue?: string
  pages?: string
  doi?: string
  ssrn?: string
  abstract: string
  tags: string[]
  featured?: boolean
}

export interface WorkingPaper {
  id: string
  title: string
  coauthors: string[]
  date: string
  abstract: string
  ssrn?: string
  pdf?: string
  status: 'new' | 'revise-resubmit' | 'under-review' | 'draft'
  tags: string[]
}

export interface MediaItem {
  id: string
  outlet: string
  title: string
  date: string
  url: string
  type: 'article' | 'podcast' | 'interview' | 'op-ed' | 'radio'
  description?: string
}

export interface Talk {
  id: string
  title: string
  event: string
  location: string
  date: string
  slides_url?: string
  type: 'conference' | 'seminar' | 'invited' | 'workshop'
}

export interface ServiceCategory {
  category: string
  items: string[]
}
