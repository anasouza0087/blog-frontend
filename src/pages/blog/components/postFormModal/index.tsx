import { Modal } from "../../../../ui"
import { useBlogContext } from "../../context/BlogContext"
import { PostForm } from "./Form"

interface IPostFormModal {
  open: boolean
  onClose: () => void
}

export const PostFormModal = ({ open, onClose }: IPostFormModal) => {
  const { onChangePostForm, postForm, createOrEditPost, showError } = useBlogContext()

  return (
    <Modal isOpen={open} >
      <PostForm
        open={open}
        onClose={onClose}
        postForm={postForm}
        onChangePostForm={onChangePostForm}
        onSubmit={createOrEditPost}
        showError={showError}
      />
    </Modal>
  )
}
