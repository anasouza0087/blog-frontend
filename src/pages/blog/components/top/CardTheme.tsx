import type { Theme } from "../../../../services/blog"
import { THEMES } from "../../constants"
import { useBlogContext } from "../../context/BlogContext"

export const CardTheme = () => {
  const { getPosts } = useBlogContext()

  return (
    <div className="flex flex-wrap gap-2">
      {THEMES.map((theme) => (
        <button
          key={theme.id}
          type="button"
          className="inline-flex items-center justify-center px-3 py-1 text-sm rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100"
          onClick={() => getPosts({ theme: theme.name as Theme })}
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}
