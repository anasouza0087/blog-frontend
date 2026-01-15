import { Modal } from "../../../../ui"

interface ICreateOrEditPost {
  open: boolean
  onClose: () => void
}

export const CreateOrEditPost = ({ open, onClose }: ICreateOrEditPost) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <h2 className="font-bold text-4xl">// Novo Post</h2>
      <div className="flex flex-col m-2">
        <label>* Título:</label>
        <input
          placeholder="Digite o título do post"
          className="w-full border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
        />
      </div>

      <div className="w-full flex flex-row">
        <div className="flex flex-col m-2 w-full">
          <label>* Autor:</label>
          <input
            placeholder="Seu nome"
            className=" border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex flex-col m-2 w-full">
          <label>* Categoria:</label>
          <input
            placeholder="Ex.: Tecnologia, Cotidiano, etc..."
            className=" border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
          />
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
        />
      </div>

      <div className="w-full mt-4 mb-4">
        <hr className=" bg-gray-500 " />
      </div>

      <div className="w-full m-2">
        <button className="bg-black text-amber-50 rounded p-2 ">
          [Publicar Post]
        </button>
        <button className="text-black rounded p-2" onClick={()=> onClose()}>[Cancelar]</button>
      </div>
    </Modal>
  )
}
