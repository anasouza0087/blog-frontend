import type { Post } from "../../../../services/blog"
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri"

interface PostCardProps {
  post: Post
  isEditable: boolean
  onEdit?: (post: Post) => void
  onDelete?: (postId: number) => void
  onOpenDetails?: (postId: number) => void
  showView?: boolean
}

export const PostCard = ({
  post,
  isEditable,
  onEdit,
  onDelete,
  onOpenDetails,
}: PostCardProps) => {
  return (
    <article
      className={`w-full rounded border border-neutral-200 bg-white p-4 flex flex-col justify-between overflow-hidden ${!isEditable ? "cursor-pointer hover:bg-gray-100" : "cursor-default"}`}
      onClick={() => !isEditable && onOpenDetails?.(post.id)}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-bold max-w-[70%] break-words">{post.title}</h4>
          <div className="flex flex-col items-end">
            {post.theme ? (
              <span className="hidden md:inline-block text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded mt-1">
                {post.theme}
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <span className="text-sm text-neutral-600">
            Escrito por <b>{post.user}</b> em{" "}
            {new Date(post.created_at).toLocaleDateString("pt-BR")}
          </span>

          {isEditable ? (
            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center justify-center shrink-0 rounded border border-neutral-600 px-3 py-1 text-sm gap-1"
                onClick={(e) => {
                  e.stopPropagation()
                  onEdit?.(post)
                }}
              >
                <RiEditBoxLine />
                <span className="ml-1">Editar</span>
              </button>

              <button
                className="inline-flex items-center justify-center shrink-0 border border-red-500 text-red-500 rounded px-3 py-1 text-sm gap-1"
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete?.(post.id)
                }}
              >
                <RiDeleteBin5Fill />
                <span className="ml-1">Excluir</span>
              </button>
            </div>
          ) : null}
        </div>

        <hr className="h-0.5 bg-neutral-200 mt-4 mb-4" />

        <p className="text-neutral-800 line-clamp-3 break-words overflow-hidden">
          {post.text}
        </p>
      </div>

      {!isEditable && (
        <div className="underline text-sm mt-1">{">>"} Ler mais</div>
      )}
    </article>
  )
}
