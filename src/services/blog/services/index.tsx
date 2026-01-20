import axios from "axios"
import type { Post } from "../domain/interface"

export class ListService {
  async list(filter?: Partial<any>): Promise<Post[]> {
    const { data } = await axios.get<Post[]>(
      "http://localhost:3000/posts.json",
      { params: filter },
    )
    return data
  }
}
