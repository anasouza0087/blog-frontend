import { PostList } from "../cards"
import { Pagination } from "../pagination"
import { useBlogContext } from "../../context/BlogContext"
import { useNavigate } from "react-router"
import { PATHS } from "../../../../routes/paths"
import type { Post } from "../../../../services/blog"

export const PostsPage = () => {
  const {
    posts,
    setPostForm,
    setOpenModal,
    deletePost,
    page,
    setPage,
    totalPages,
  } = useBlogContext()
  const navigate = useNavigate()

  const handleEdit = (post: Post) => {
    setPostForm(post)
    setOpenModal({ isOpen: true, data: undefined })
  }

  const handleOpenDetails = (postId: number) => {
    navigate(PATHS.POST_DETAILS(String(postId)))
  }

  return (
    <div className="w-full h-full">
      <PostList
        isEditable={false}
        posts={posts}
        onEdit={handleEdit}
        onDelete={deletePost}
        onOpenDetails={handleOpenDetails}
      />
      <Pagination
        page={page ?? 1}
        totalPages={totalPages ?? 1}
        onPageChange={(p) => setPage?.(p)}
      />
    </div>
  )
}
