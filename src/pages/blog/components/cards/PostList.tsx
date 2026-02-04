import type { Post } from "../../../../services/blog"
import { PostCard } from "./PostCard"

interface PostListProps {
  isEditable: boolean
  posts: Post[]
  onEdit: (post: Post) => void
  onDelete: (postId: number) => void
  onOpenDetails: (postId: number) => void
}

export const PostList = ({
  isEditable,
  posts,
  onEdit,
  onDelete,
  onOpenDetails,
}: PostListProps) => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            isEditable={isEditable}
            post={post}
            onEdit={onEdit}
            onDelete={onDelete}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </section>
  )
}
