export const Commentary = () => {
  return (
    <div className="w-full p-4">
      <h1>// Comentários(2)</h1>
      <hr className="h-0.5 bg-black mt-4 mb-4" />
      <div className="border-l-2 border-black p-2 mt-4">
        <h3>
          <b className="text-gray-500">Fulano de tal</b> * dd/mm/aaaa
        </h3>
        <p>comentário abc</p>
      </div>

      <div className="border-black border mt-4 flex flex-col justify-between p-8 h-80">
        <h3 className="font-bold">{"> Deixe seu comentário"}</h3>
        <div>
          <label className="font-bold">Nome:</label>
          <input
            placeholder="Digite o título do post"
            className="w-full border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="font-bold">Comentário:</label>
          <input
            placeholder="Digite o título do post"
            className="w-full border-2 rounded-sm border-gray-600 p-1 focus:outline-none focus:ring-0"
          />
        </div>
        <button className="p-2 rounded-xl border-#000 border-2 bg-black text-white w-fit">
          [Enviar]
        </button>
      </div>
    </div>
  )
}
