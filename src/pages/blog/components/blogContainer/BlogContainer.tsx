import { useBlogContext } from "../../context/BlogContext"
import { PostFormModal } from "../postFormModal"
import { Footer } from "../footer"
import { PostsPage } from "../postsContainer"
import { Top } from "../top"

export const BlogContainer = () => {
  const { openModal, setOpenModal } = useBlogContext()
  return (
    <div className="flex justify-center p-8">
      <div className="w-5/12">
        <Top />
        <PostsPage />
        <Footer />
      </div>

      {openModal.isOpen && (
        <PostFormModal
          open={openModal.isOpen}
          onClose={() => setOpenModal({ isOpen: false, data: undefined })}
        />
      )}
    </div>
  )
}
