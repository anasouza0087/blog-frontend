import { useEffect, useState } from "react"
import type { Post } from "../../../services/blog"
import { PostListUseCase } from "../../../services/blog/application/listPost/PostListUseCase"

export const useBlog = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const getPosts = async () => {
    setLoading(true)
    try {
      const useCase = new PostListUseCase({})
      const posts = await useCase.execute()
      setPosts(posts)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return { posts, setPosts, getPosts, loading }
}
