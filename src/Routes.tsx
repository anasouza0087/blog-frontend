import { Routes, Route } from "react-router-dom"
import { Blog } from "./pages/blog"
import { PostsPage, PostDetailsContainer } from "./features/blog/components"
import { PATHS } from "./routes/paths"
import { BlogProvider } from "./pages/blog/context/BlogContext"

export default function AppRoutes() {
  return (
    <BlogProvider>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path={PATHS.POSTS} element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailsContainer />} />
      </Routes>
    </BlogProvider>
  )
}
