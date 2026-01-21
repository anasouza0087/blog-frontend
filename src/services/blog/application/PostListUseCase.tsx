import type { Post, Theme } from "../domain/interface"
import { ListService } from "../services"

export class PostListUseCase {
  // static execute: any
  constructor(private filter?: Theme) {}

  async execute(): Promise<Post[]> {
    const response = await new ListService().list(this.filter)
    return response
  }
}
