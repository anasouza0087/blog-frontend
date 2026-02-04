import { DeletePostService } from "../services"

export class DeletePostUseCase {
  private postId: number

  constructor(postId: number) {
    this.postId = postId
  }

  async execute(): Promise<void> {
    await new DeletePostService().DeletePost(this.postId)
  }
}
