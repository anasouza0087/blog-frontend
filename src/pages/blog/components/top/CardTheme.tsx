export const CardTheme = () => {
  const themes = [
    { id: 0, name: "Tecnologia" },
    { id: 1, name: "Cultura" },
    { id: 2, name: "Cotidiano" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((theme) => (
        <button
          key={theme.id}
          type="button"
          className="inline-flex items-center justify-center px-3 py-1 text-sm rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}
