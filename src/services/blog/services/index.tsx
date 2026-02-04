import axios from "axios"
import type { FilterPost, Post } from "../domain/interface"
import type { CreatePostDTO, UpdatePostDTO } from "./@types"

export class ListService {
  async list(filter?: FilterPost): Promise<Post[]> {
    const { data } = await axios.get<Post[]>(
      "http://localhost:3000/posts",
      { params: filter },
    )
    return data
  }
}

export class CreatePostService {
  async createPost(post: CreatePostDTO): Promise<Post> {
    const { data } = await axios.post("http://localhost:3000/posts", {
      post,
    })

    return data
  }
}

export class UpdatePostService {
  async updatePost(post: UpdatePostDTO): Promise<Post> {
    const { data } = await axios.put(`http://localhost:3000/post/${post.id}`, {
      post,
    })

    return data
  }
}

export class DeletePostService {
  async DeletePost(postId: number): Promise<void> {
    await axios.delete(`http://localhost:3000/posts/${postId}`)
  }
}
