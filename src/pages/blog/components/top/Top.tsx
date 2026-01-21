import { HiMagnifyingGlass } from "react-icons/hi2"
import { CardTheme } from "./CardTheme"
import { CreateOrEditPost } from "../createOrEditPostCard"
import { useBlogContext } from "../../context/BlogContext"

export const Top = () => {
  const { openModal, setOpenModal } = useBlogContext()

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between">
        <h3 className="font-bold text-4xl">~/ meu blog</h3>
        <button
          className="bg-black text-amber-50 rounded p-2"
          onClick={() => setOpenModal({ isOpen: true, data: undefined })}
        >
          + [Novo Post]
        </button>
      </div>
      <div>
        <h2 className="font-light text-gray-500">
          pensamentos e reflexões desde 2005
        </h2>
      </div>

      <hr className="w-full bg-black mt-8 mb-8" />

      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-start">
          <HiMagnifyingGlass />
          <h1 className="ml-2">Filtrar por tema:</h1>
        </div>
        <div className="flex flex-row mt-2 mb-8">
          <CardTheme />
        </div>
      </div>

      {openModal.isOpen && (
        <CreateOrEditPost
          open={openModal.isOpen}
          onClose={() => setOpenModal({ isOpen: false, data: undefined })}
        />
      )}
    </div>
  )
}
