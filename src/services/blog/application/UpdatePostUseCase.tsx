import type { Post } from "../domain/interface"
import { UpdatePostService } from "../services"
import type { UpdatePostDTO } from "../services/@types"

export class UpdatePostUseCase {
  private post: UpdatePostDTO;

  constructor(post: UpdatePostDTO) {
    this.post = post;
  }

  async execute(): Promise<Post> {
    const response = await new UpdatePostService().updatePost(this.post)
    return response
  }
}
