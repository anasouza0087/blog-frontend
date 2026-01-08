export const CardPostPreview = () => {
  return (
    <div className="w-full  border-2 border-black border-solid flex flex-col justify-between p-4 h-52">
      <div>
        <div className="flex flex-row justify-between">
          <h3 className="font-bold">Titulo do post</h3>
          <div className="bg-black text-white p-1">Tema</div>
        </div>
        <h1 className="font-light text-gray-500">
          por ana cara de banana . dd/mm/aaaa . x comentários
        </h1>
      </div>
      <p className="font-light text-gray-500 text-justify text-2xl">texto do blogzim</p>
      <div className="underline">{">>"} Ler mais </div>
    </div>
  )
}
