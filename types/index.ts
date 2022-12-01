export interface Project {
  id: number
  title: string
  tags: string[]
  description: string
  image: ProjectImage
  cta: Cta
}

export interface ProjectImage {
  description: string
  src: string
}

export interface Cta {
  description: string
  link: string
}

export interface Testimonial {
  id: number
  name: string
  job_title: string
  full_quote: string
  excerpt: string
}
