import type { FilterPost, Post } from "../domain/interface"
import { ListService } from "../services"

export class PostListUseCase {
  private filter?: FilterPost

  constructor(filter?: FilterPost) {
    this.filter = filter
  }

  async execute(): Promise<Post[]> {
    const response = await new ListService().list(this.filter)
    return response
  }
}
