import { HiMagnifyingGlass } from "react-icons/hi2"
import { CardTheme } from "./CardTheme"
import { useBlogContext } from "../../context/BlogContext"

export const Top = () => {
  const { setOpenModal } = useBlogContext()

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="font-bold text-4xl">~/ meu blog</h3>
        <div className="flex items-center gap-2">
          {/* small screen: show round icon-only button */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-amber-50"
            aria-label="New post"
            onClick={() => setOpenModal({ isOpen: true, data: undefined })}
          >
            +
          </button>

          {/* md+ show full label */}
          <button
            className="hidden md:inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap bg-black text-amber-50 rounded px-4 py-2 text-sm"
            onClick={() => setOpenModal({ isOpen: true, data: undefined })}
          >
            + [Novo Post]
          </button>
        </div>
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
    </div>
  )
}
