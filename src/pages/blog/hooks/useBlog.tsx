import { useEffect, useState } from "react"
import {
  CreatePostUseCase,
  type Post,
  type Theme,
} from "../../../services/blog"
import { PostListUseCase } from "../../../services/blog/application/PostListUseCase"
import type { CreatePostDTO } from "../../../services/blog/services/@types"

export const useBlog = () => {
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState({ isOpen: false, data: undefined })
  const [posts, setPosts] = useState<Post[]>([])
  const [postForm, setPostForm] = useState<Partial<Post>>({
    id: undefined,
    title: "",
    theme: undefined,
    user: "",
    text: "",
    created_at: "",
    updated_at: "",
  })

  const getPosts = async (filter?: Theme) => {
    setLoading(true)
    try {
      const useCase = new PostListUseCase(filter)
      const posts = await useCase.execute()
      setPosts(posts)
    } finally {
      setLoading(false)
    }
  }

  const createPost = async () => {
    if (!postForm.title || !postForm.user || !postForm.text) {
      return
    }

    const newPost: CreatePostDTO = {
      title: postForm.title,
      theme: postForm.theme,
      user: postForm.user,
      text: postForm.text,
      created_at: "",
    }
    try {
      const useCase = new CreatePostUseCase(newPost)
      useCase.execute()
    } finally {
      setOpenModal({ isOpen: false, data: undefined })
      getPosts()
    }
  }

  const onChangePostForm = (name: string, value: string | number) => {
    setPostForm({
      ...postForm,
      [name]: value,
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return {
    posts,
    setPosts,
    getPosts,
    loading,
    postForm,
    setPostForm,
    onChangePostForm,
    openModal,
    setOpenModal,
    createPost,
  }
}
