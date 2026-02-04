import type { Post } from "../../../../services/blog"

interface PostCardProps {
  post: Post
  isEditable: boolean
  onEdit?: (post: Post) => void
  onDelete?: (postId: number) => void
  onOpenDetails?: (postId: number) => void
}

export const PostCard = ({
  post,
  isEditable,
  onEdit,
  onDelete,
  onOpenDetails,
}: PostCardProps) => {
  return (
    <article className="w-full rounded border border-neutral-200 bg-white p-4 flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-bold max-w-[70%] wrap-break-word">
            {post.title}
          </h4>
          <div className="flex flex-col items-end">
            <span className="text-sm text-neutral-400">
              {new Date(post.created_at).toLocaleDateString("pt-BR")}
            </span>
            {post.theme ? (
              <span className="hidden md:inline-block text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded mt-1">
                {post.theme}
              </span>
            ) : null}
          </div>
        </div>

        <p className="text-neutral-800 line-clamp-3 wrap-break-word overflow-hidden">
          {post.text}
        </p>
      </div>

      {isEditable ? (
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            className="inline-flex items-center justify-center shrink-0 bg-amber-400 text-white rounded px-3 py-1 text-sm"
            onClick={() => onEdit?.(post)}
          >
            Edit
          </button>
          <button
            className="inline-flex items-center justify-center shrink-0 bg-red-500 text-white rounded px-3 py-1 text-sm"
            onClick={() => onDelete?.(post.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div
          className="underline text-sm mt-1"
          onClick={() => onOpenDetails?.(post.id)}
        >
          {">>"} Read more
        </div>
      )}
    </article>
  )
}
