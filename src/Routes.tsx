import { Routes, Route } from "react-router-dom"
import { PostDetailsContainer } from "./pages/blog/components/postDetails/PostDetailsContainer"
import { Blog } from "./pages/blog"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/posts/" element={<PostDetailsContainer />} />
    </Routes>
  )
}
