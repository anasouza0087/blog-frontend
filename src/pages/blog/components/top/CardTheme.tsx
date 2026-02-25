import { useState } from "react"
import type { Theme } from "../../../../services/blog"
import { THEMES } from "../../constants"
import { useBlogContext } from "../../context/BlogContext"

export const CardTheme = () => {
  const [themeSelected, setThemeSelected] = useState<Theme | null>(null)
  const { getPosts } = useBlogContext()

  const handleFilterTheme = (theme: Theme) => {
    if (themeSelected === theme) {
      setThemeSelected(null)
      getPosts()
    } else {
      setThemeSelected(theme)
      getPosts({ theme })
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {THEMES.map((theme) => (
        <button
          key={theme.id}
          type="button"
          className={`inline-flex items-center justify-center px-3 py-1 text-sm rounded-full border border-gray-300 ${themeSelected === theme.name ? "bg-gray-200 text-black" : "bg-gray-50 hover:bg-gray-100"} cursor-pointer`}
          onClick={() => handleFilterTheme(theme.name as Theme)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}
