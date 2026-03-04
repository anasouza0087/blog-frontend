import type { FilterPost, Post } from "../domain/interface"
import type { CreatePostDTO, UpdatePostDTO } from "./@types"
import { axiosBlog } from "../../https"

export class ListService {
  async list(filter?: FilterPost): Promise<Post[]> {
    const { data } = await axiosBlog.get<Post[]>("/posts", {
      params: filter,
    })
    return data
  }
}

export class CreatePostService {
  async createPost(post: CreatePostDTO): Promise<Post> {
    const { data } = await axiosBlog.post("/posts", {
      post,
    })

    return data
  }
}

export class UpdatePostService {
  async updatePost(post: UpdatePostDTO): Promise<Post> {
    const { data } = await axiosBlog.put(`/posts/${post.id}`, {
      post,
    })

    return data
  }
}

export class DeletePostService {
  async DeletePost(postId: number): Promise<void> {
    await axiosBlog.delete(`/posts/${postId}`)
  }
}
