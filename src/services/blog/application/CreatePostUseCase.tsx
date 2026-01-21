import type { Post } from "../domain/interface"
import { CreatePostService } from "../services"
import type { CreatePostDTO } from "../services/@types"

export class CreatePostUseCase {
  constructor(private post: CreatePostDTO) {}

  async execute(): Promise<Post> {
    const response = await new CreatePostService().createPost(this.post)
    return response
  }
}
