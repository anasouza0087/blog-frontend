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
    <div
      className="w-full border-2 border-black border-solid flex flex-col justify-between p-4 h-52 mt-4"
      onClick={() => onOpenDetails && onOpenDetails(post.id as number)}
    >
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="font-bold ">{post?.title}</h2>
          <div className="bg-black text-white p-1">Tema</div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <h1 className="font-light text-gray-500">
              {`por ${post?.user} * ${new Date(
                post?.created_at
              ).toLocaleDateString("pt-BR")} * x comentários`}
            </h1>
          </div>
          {isEditable && (
            <div className=" flex flex-row ">
              <button
                className="p-1.5 rounded border-#000 border-2 mr-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit?.(post);
                }}
              >
                Edit
              </button>
              <button
                className="p-1.5 rounded border-red-600 text-red-600 border-2"
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete?.(post?.id as number)
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <p className="font-light text-gray-500 text-justify text-2xl">
          {post?.text}
        </p>
      </div>
      {!isEditable && <div className="underline">{">>"} Read more </div>}
    </div>
  )
}
