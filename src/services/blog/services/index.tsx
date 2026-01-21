import axios from "axios"
import type { Post, Theme } from "../domain/interface"
import type { CreatePostDTO } from "./@types"

export class ListService {
  async list(filter?: Theme): Promise<Post[]> {
    const { data } = await axios.get<Post[]>(
      "http://localhost:3000/posts.json",
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
