import { createContext, useContext, useState, type ReactNode } from "react"

/* Tipagens básicas */
export interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

interface BlogContextData {
  posts: Post[]
  selectedPost: Post | null
  setPosts: (posts: Post[]) => void
  setSelectedPost: (post: Post | null) => void
  openDetails: { open: boolean; data: any }
  setOpenDetails: React.Dispatch<React.SetStateAction<any>>
}

/* Criação do contexto */
const BlogContext = createContext<BlogContextData | undefined>(undefined)

/* Provider */
interface BlogProviderProps {
  children: ReactNode
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [openDetails, setOpenDetails] = useState({
    open: false,
    data: undefined,
  })

  return (
    <BlogContext.Provider
      value={{
        posts,
        selectedPost,
        setPosts,
        setSelectedPost,
        openDetails,
        setOpenDetails,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

/* Hook customizado */
export const useBlogContext = () => {
  const context = useContext(BlogContext)

  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider")
  }

  return context
}
