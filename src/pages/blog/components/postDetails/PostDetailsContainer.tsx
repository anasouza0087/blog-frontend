import { useNavigate } from "react-router"
import { CardPost } from "../cards"
import { Commentary } from "./Commentary"

export const PostDetailsContainer = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col w-5/12 mx-auto">
      <div className="mt-4 mb-4 ">
        <b onClick={() => navigate("/")}>{"<< voltar para lista de posts"}</b>
      </div>
      <CardPost />
      <Commentary />
    </div>
  )
}
