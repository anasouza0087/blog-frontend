import { useEffect, useState } from "react"
import {
  CreatePostUseCase,
  type FilterPost,
  type Post,
} from "../../../services/blog"
import { PostListUseCase } from "../../../services/blog/application/PostListUseCase"
import type {
  CreatePostDTO,
  UpdatePostDTO,
} from "../../../services/blog/services/@types"
import { DeletePostUseCase } from "../../../services/blog/application/DeletePostUseCase"
import { UpdatePostUseCase } from "../../../services/blog/application/UpdatePostUseCase"
import { useNavigate } from "react-router"

export const useBlog = () => {
  const [loading, setLoading] = useState(false)
  const [loadApi, setLoadApi] = useState(true)
  const [openModal, setOpenModal] = useState({ isOpen: false, data: undefined })
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [postForm, setPostForm] = useState<Partial<Post>>({
    id: undefined,
    title: "",
    theme: undefined,
    user: "",
    text: "",
    created_at: "",
    updated_at: "",
  })

  

  const navigate = useNavigate()

  const getPosts = async (filter?: FilterPost) => {
    setLoading(true)
    try {
      const useCase = new PostListUseCase(filter)
      const posts = await useCase.execute()
      setAllPosts(posts)

      if (filter?.id) {
        setPostForm({
          id: posts?.[0]?.id,
          title: posts?.[0]?.title,
          theme: posts?.[0]?.theme,
          user: posts?.[0]?.user,
          text: posts?.[0]?.text,
          created_at: posts?.[0]?.created_at,
          updated_at: posts?.[0]?.updated_at,
        })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
      setLoadApi(false)
    }
  }

  const createOrEditPost = () => {
    if (postForm?.id) {
      updatePost()
    } else {
      createPost()
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
      await useCase.execute()
    } catch (err) {
      console.error(err)
    } finally {
      setOpenModal({ isOpen: false, data: undefined })
      getPosts()
    }
  }

  const updatePost = async () => {
    if (!postForm.title || !postForm.user || !postForm.text || !postForm.id) {
      return
    }

    const updatedPost: UpdatePostDTO = {
      id: postForm.id,
      title: postForm.title,
      theme: postForm.theme,
      user: postForm.user,
      text: postForm.text,
      created_at: "",
    }

    try {
      const useCase = await new UpdatePostUseCase(updatedPost)
      await useCase.execute()
    } catch (err) {
      console.error(err)
    } finally {
      setOpenModal({ isOpen: false, data: undefined })
      await getPosts({ id: postForm.id })
    }
  }

  const deletePost = async (postId: number) => {
    if (!postId) return
    try {
      const useCase = await new DeletePostUseCase(postId)
      await useCase.execute()
      // success
    } catch (err) {
      console.error(err)
    } finally {
      navigate("/")
    }
  }

  const onChangePostForm = (name: string, value: string | number) => {
    setPostForm({
      ...postForm,
      [name]: value,
    })
  }

  useEffect(() => {
    if (loadApi) {
      getPosts()
    }
  }, [])

  const [page, setPage] = useState(1)
  const perPage = 5
  const totalPages = Math.max(1, Math.ceil(allPosts.length / perPage))

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [allPosts.length, totalPages])

  const start = (page - 1) * perPage
  const posts = allPosts.slice(start, start + perPage)

  return {
    posts,
    setPosts: setAllPosts,
    getPosts,
    loading,
    postForm,
    setPostForm,
    onChangePostForm,
    openModal,
    setOpenModal,
    createPost,
    deletePost,
    createOrEditPost,
    page,
    setPage,
    perPage,
    totalPages,
  }
}
