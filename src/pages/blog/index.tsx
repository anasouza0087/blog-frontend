import { BlogContainer } from "./components/blogContainer/BlogContainer"
import { BlogProvider } from "./context/BlogContext"

const WrappedBlog = () => {
  return (
    <BlogProvider>
      <BlogContainer />
    </BlogProvider>
  )
}

export const Blog = () => {
  return <WrappedBlog />
}
