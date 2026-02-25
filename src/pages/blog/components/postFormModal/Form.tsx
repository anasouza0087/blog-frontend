import type { Post } from "../../../../services/blog"
import { THEMES } from "../../constants"

interface CreateOrEditPostFormProps {
  open: boolean
  onClose: () => void
  postForm: Partial<Post>
  onChangePostForm: (name: string, value: string | number) => void
  onSubmit: () => void
  showError: boolean
}

export const PostForm = ({
  onClose,
  postForm,
  onChangePostForm,
  onSubmit,
  showError,
}: CreateOrEditPostFormProps) => {
  return (
    <>
      <div className="overflow-hidden">
        <h2 className="font-bold text-4xl">
          {postForm?.id ? "Editar Post" : "Novo Post"}
        </h2>
        <div className="flex flex-col m-2">
          <label>* Título:</label>
          <input
            placeholder="Digite o título do post"
            className={`w-full border-2 rounded-sm ${showError && !postForm?.title ? "border-red-400" : "border-neutral-200"} p-1 focus:outline-none focus:ring-0`}
            onChange={(e) => onChangePostForm("title", e.target.value)}
            value={postForm?.title}
          />
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col m-2 w-full">
            <label>* Autor:</label>
            <input
              placeholder="Seu nome"
              className={`w-full border-2 rounded-sm ${showError && !postForm?.user ? "border-red-400" : "border-neutral-200"} p-1 focus:outline-none focus:ring-0`}
              onChange={(e) => onChangePostForm("user", e.target.value)}
              value={postForm?.user}
            />
          </div>
          <div className="flex flex-col m-2 w-full">
            <label>* Categoria:</label>
            <select
              className={`w-full border-2 rounded-sm ${showError && !postForm?.theme ? "border-red-400" : "border-neutral-200"} p-1 focus:outline-none focus:ring-0`}
              onChange={(e) => onChangePostForm("theme", e.target.value)}
            >
              <option value="">Selecione</option>
              {THEMES.map((theme) => {
                return (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-col m-2">
          <label>* Conteúdo:</label>
          <input
            placeholder="Conteúdo completo do post"
            className={`w-full border-2 rounded-sm ${showError && !postForm?.text ? "border-red-400" : "border-neutral-200"} p-1 focus:outline-none focus:ring-0`}
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
            [Publicar Post]
          </button>
          <button
            className="inline-flex items-center justify-center shrink-0 whitespace-nowrap text-black rounded border border-gray-300 px-4 py-2 text-sm"
            onClick={onClose}
          >
            [Cancelar]
          </button>
        </div>
      </div>
    </>
  )
}
