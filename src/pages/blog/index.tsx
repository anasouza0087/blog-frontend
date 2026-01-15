import { BlogProvider } from "./context/BlogContext"
import { Footer } from "./components/footer"
import { PostsContainer } from "./components/postsContainer"
import { Top } from "./components/top"

const WrappedBlog = () => {
  return (
    <BlogProvider>
      <div className="flex justify-center p-8">
        <div className="w-5/12">
          <Top />
          <PostsContainer />
          <Footer />
        </div>
      </div>
    </BlogProvider>
  )
}

export const Blog = () => {
  return <WrappedBlog />
}
