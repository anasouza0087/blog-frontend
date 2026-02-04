import { createContext, useContext, useState, type ReactNode } from "react"
import { useBlog } from "../hooks/useBlog"
import type { FilterPost, Post } from "../../../services/blog"

interface BlogContextData {
  posts: Post[]
  selectedPost: Post | null
  setPosts: (posts: Post[]) => void
  setSelectedPost: (post: Post | null) => void
  openDetails: { open: boolean; data: Post | undefined }
  setOpenDetails: React.Dispatch<
    React.SetStateAction<{ open: boolean; data: Post | undefined }>
  >
  postForm: Partial<Post>
  setPostForm: React.Dispatch<React.SetStateAction<Partial<Post>>>
  onChangePostForm: (name: string, value: string | number) => void
  openModal: { isOpen: boolean; data: undefined }
  setOpenModal: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; data: undefined }>
  >
  createPost: () => void
  deletePost: (postId: number) => void
  getPosts: (filter?: FilterPost) => void
  createOrEditPost: () => void
}

/* Criação do contexto */
const BlogContext = createContext<BlogContextData | undefined>(undefined)

/* Provider */
interface BlogProviderProps {
  children: ReactNode
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [openDetails, setOpenDetails] = useState<{
    open: boolean
    data: Post | undefined
  }>({
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
    deletePost,
    getPosts,
    createOrEditPost,
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
        deletePost,
        getPosts,
        createOrEditPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

/* Hook customizado (move to a separate file if it needs to be shared) */
export const useBlogContext = () => {
  const context = useContext(BlogContext)

  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider")
  }

  return context
}

export default BlogProvider
