import type { Post } from "../../../../services/blog"

interface CreateOrEditPostFormProps {
  open: boolean
  onClose: () => void
  postForm: Partial<Post>
  onChangePostForm: (name: string, value: string | number) => void
  onSubmit: () => void
}

export const PostForm = ({
  onClose,
  postForm,
  onChangePostForm,
  onSubmit,
}: CreateOrEditPostFormProps) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-4xl">
          {postForm?.id ? "Edit Post" : "New Post"}
        </h2>
        <div className="flex flex-col m-2">
          <label>* Title:</label>
          <input
            placeholder="Enter post title"
            className="w-full border-2 rounded-sm border-neutral-200 p-1 focus:outline-none focus:ring-0"
            onChange={(e) => onChangePostForm("title", e.target.value)}
            value={postForm?.title}
          />
        </div>

        <div className="w-full flex flex-row">
          <div className="flex flex-col m-2 w-full">
            <label>* Author:</label>
            <input
              placeholder="Your name"
              className=" border-2 rounded-sm border-neutral-200 p-1 focus:outline-none focus:ring-0"
              onChange={(e) => onChangePostForm("user", e.target.value)}
              value={postForm?.user}
            />
          </div>
          <div className="flex flex-col m-2 w-full">
            <label>* Category:</label>
            <select className=" border-2 rounded-sm border-neutral-200 p-1 focus:outline-none focus:ring-0">
              <option value="">Select</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col m-2">
          <label>* Summary:</label>
          <input
            placeholder="A brief summary of the post (shown in the list)"
            className="w-full border-2 rounded-sm border-neutral-200 p-1 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex flex-col m-2">
          <label>* Content:</label>
          <input
            placeholder="Full post content"
            className="w-full border-2 rounded-sm border-neutral-200 p-1 focus:outline-none focus:ring-0"
            onChange={(e) => onChangePostForm("text", e.target.value)}
            value={postForm?.text}
          />
        </div>

        <div className="w-full mt-4 mb-4">
          <hr className=" bg-gray-500 " />
        </div>

        <div className="w-full m-2 flex gap-3">
          <button
            className="inline-flex items-center justify-center shrink-0 whitespace-nowrap bg-black text-amber-50 rounded px-4 py-2 text-sm"
            onClick={onSubmit}
          >
            [Publish Post]
          </button>
          <button
            className="inline-flex items-center justify-center shrink-0 whitespace-nowrap text-black rounded border border-gray-300 px-4 py-2 text-sm"
            onClick={onClose}
          >
            [Cancel]
          </button>
        </div>
      </div>
    </>
  )
}
