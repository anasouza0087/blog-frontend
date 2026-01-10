import { Footer } from "./footer"
import { PostsContainer } from "./postsContainer"
import { Top } from "./top"

export const Blog = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="w-5/12">
        <Top />
        <PostsContainer />
        <Footer />
      </div>
    </div>
  )
}
