import { useNavigate, useParams } from "react-router"
import { PostCard } from "../cards"
import { Commentary } from "./Commentary"
import { useBlogContext } from "../../context/BlogContext"
import { useEffect } from "react"
import { PostFormModal } from "../postFormModal"
import type { Post } from "../../../../services/blog"

export const PostDetailsContainer = () => {
  const { setPostForm, getPosts, posts, setOpenModal, openModal, deletePost } =
    useBlogContext()
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getPosts({ id: Number(id) })
    }
  }, [id])

  const post = posts?.[0]

  const handleEdit = (post: Post) => {
    setPostForm(post)
    setOpenModal({ isOpen: true, data: undefined })
  }

  return (
    <div className="flex flex-col max-w-3xl w-full mx-auto px-4 sm:px-6">
      <div className="mt-4 mb-4 ">
        <b
          onClick={() => {
            setPostForm({
              id: undefined,
              title: "",
              theme: undefined,
              user: "",
              text: "",
              created_at: "",
              updated_at: "",
            })
            navigate("/")
          }}
        >
          {"<< voltar para lista de posts"}
        </b>
      </div>
      {post && (
        <div className="mb-6">
          <PostCard
            isEditable={true}
            post={post}
            onEdit={handleEdit}
            onDelete={deletePost}
          />
        </div>
      )}
      <Commentary />

      {openModal.isOpen && (
        <PostFormModal
          open={openModal.isOpen}
          onClose={() => setOpenModal({ isOpen: false, data: undefined })}
        />
      )}
    </div>
  )
}
