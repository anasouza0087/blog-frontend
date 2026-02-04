export interface Post {
  id: number
  title: string
  theme: Theme
  user: string
  text: string
  created_at: Date | string
  updated_at: Date | string
}

export type Theme = "Carreira" | "Cultura" | "Cotidiano"

export interface FilterPost {
  theme?: Theme
  id?: number
}
