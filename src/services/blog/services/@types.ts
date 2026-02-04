import type { Theme } from "../domain/interface"

export type CreatePostDTO = {
  title: string
  theme?: Theme
  user: string
  text: string
  created_at: Date | string
  updated_at?: Date | string
}

export type UpdatePostDTO = {
  id: number
  title: string
  theme?: Theme
  user: string
  text: string
  created_at: Date | string
  updated_at?: Date | string
}
