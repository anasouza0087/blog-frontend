import { useNavigate } from "react-router"
import { useBlogContext } from "../../context/BlogContext"
import type { Post } from "../../../../services/blog"

export const CardPost = () => {
  const navigate = useNavigate()
  const { posts } = useBlogContext()

  return posts.map((post: Post) => {
    return (
      <div
        className="w-full border-2 border-black border-solid flex flex-col justify-between p-4 h-52"
        onClick={() => navigate("/posts/")}
        key={post?.id}
      >
        <div>
          <div className="flex flex-row justify-between">
            <h2 className="font-bold ">{post?.title}</h2>
            <div className="bg-black text-white p-1">Tema</div>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <div>
              <h1 className="font-light text-gray-500">
                {`por ${post?.user} * 
                ${new Date(post?.created_at).toLocaleDateString("pt-BR")} * x
                comentários`}
              </h1>
            </div>
            <div className=" flex flex-row ">
              <button className="p-1.5 rounded border-#000 border-2 mr-1.5">
                Editar
              </button>
              <button className="p-1.5 rounded border-red-600 text-red-600 border-2">
                Excluir
              </button>
            </div>
          </div>
          <p className="font-light text-gray-500 text-justify text-2xl">
            {post?.text}
          </p>
        </div>
        <div className="underline">{">>"} Ler mais </div>
      </div>
    )
  })
}
