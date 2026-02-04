import type { Post } from "../../../../services/blog"

interface CreateOrEditPostFormProps {
  onClose: () => void
  postForm: Partial<Post>
  onChangePostForm: (name: string, value: string | number) => void
  onSubmit: () => void
}

export const CreateOrEditPostForm = ({
  onClose,
  postForm,
  onChangePostForm,
  onSubmit,
}: CreateOrEditPostFormProps) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-4xl">
          {postForm?.id ? "Editar Post" : "Novo Post"}
        </h2>
        <div className="flex flex-col m-2">
          <label>* Título:</label>
          <input
            placeholder="Digite o título do post"
            className="w-full border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
            onChange={(e) => onChangePostForm("title", e.target.value)}
            value={postForm?.title}
          />
        </div>

        <div className="w-full flex flex-row">
          <div className="flex flex-col m-2 w-full">
            <label>* Autor:</label>
            <input
              placeholder="Seu nome"
              className=" border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
              onChange={(e) => onChangePostForm("user", e.target.value)}
              value={postForm?.user}
            />
          </div>
          <div className="flex flex-col m-2 w-full">
            <label>* Categoria:</label>
            <select className=" border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0">
              <option value="">Selecione</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col m-2">
          <label>* Resumo:</label>
          <input
            placeholder="Um breve resumo do Post (aparece na listagem)"
            className="w-full border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex flex-col m-2">
          <label>* Conteúdo:</label>
          <input
            placeholder="Conteúdo completo do Post"
            className="w-full border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
            onChange={(e) => onChangePostForm("text", e.target.value)}
            value={postForm?.text}
          />
        </div>

        <div className="w-full mt-4 mb-4">
          <hr className=" bg-gray-500 " />
        </div>

        <div className="w-full m-2">
          <button
            className="bg-black text-amber-50 rounded p-2 "
            onClick={onSubmit}
          >
            [Publicar Post]
          </button>
          <button className="text-black rounded p-2" onClick={onClose}>
            [Cancelar]
          </button>
        </div>
      </div>
    </>
  )
}
