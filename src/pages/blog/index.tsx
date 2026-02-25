import { BlogContainer } from "./components/blogContainer/BlogContainer"
import { BlogProvider } from "./context/BlogContext"
import { ToastContainer } from "react-toastify"

const WrappedBlog = () => {
  return (
    <BlogProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="light"
        // transition={Bounce}
      />
      <BlogContainer />
    </BlogProvider>
  )
}

export const Blog = () => {
  return <WrappedBlog />
}
