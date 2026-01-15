import { useNavigate } from "react-router"

export const CardPost = () => {
  const navigate = useNavigate()

  return (
    <div
      className="w-full border-2 border-black border-solid flex flex-col justify-between p-4 h-52"
      onClick={() => navigate("/posts/")}
    >
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="font-bold ">Titulo do post</h2>
          <div className="bg-black text-white p-1">Tema</div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <div>
            <h1 className="font-light text-gray-500">
              por ana cara de banana . dd/mm/aaaa . x comentários
            </h1>
          </div>
          <div className=" flex flex-row ">
            <button className="p-1.5 rounded border-#000 border-2 mr-1.5">Editar</button>
            <button className="p-1.5 rounded border-red-600 text-red-600 border-2">
              Excluir
            </button>
          </div>
        </div>
        <p className="font-light text-gray-500 text-justify text-2xl">
          texto do blogzim
        </p>
      </div>
      <div className="underline">{">>"} Ler mais </div>
    </div>
  )
}
