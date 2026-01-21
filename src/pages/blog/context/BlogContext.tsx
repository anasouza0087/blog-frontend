import { createContext, useContext, useState, type ReactNode } from "react"
import { useBlog } from "../hooks/useBlog"
import type { Post } from "../../../services/blog"

interface BlogContextData {
  posts: Post[]
  selectedPost: Post | null
  setPosts: (posts: Post[]) => void
  setSelectedPost: (post: Post | null) => void
  openDetails: { open: boolean; data: any }
  setOpenDetails: React.Dispatch<React.SetStateAction<any>>
  postForm: Partial<Post>
  setPostForm: React.Dispatch<React.SetStateAction<Partial<Post>>>
  onChangePostForm: (name: string, value: string | number) => void
  openModal: { isOpen: boolean; data: undefined }
  setOpenModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined }>
  >
  createPost: () => void
}

/* Criação do contexto */
const BlogContext = createContext<BlogContextData | undefined>(undefined)

/* Provider */
interface BlogProviderProps {
  children: ReactNode
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [openDetails, setOpenDetails] = useState({
    open: false,
    data: undefined,
  })
  const {
    posts,
    setPosts,
    postForm,
    setPostForm,
    onChangePostForm,
    openModal,
    setOpenModal,
    createPost,
  } = useBlog()

  return (
    <BlogContext.Provider
      value={{
        posts,
        selectedPost,
        setPosts,
        setSelectedPost,
        openDetails,
        setOpenDetails,
        postForm,
        setPostForm,
        onChangePostForm,
        openModal,
        setOpenModal,
        createPost,
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
