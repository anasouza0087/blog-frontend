export const CardTheme = () => {
  const themes = [
    { id: 0, name: "Tecnologia" },
    { id: 1, name: "Cultura" },
    { id: 2, name: "Cotidiano" },
  ]
  return themes.map((theme) => {
    return (
      <div className="p-1 m-1 border-gray-400 border-solid border-2 font-bold">
        [{theme.name}]
      </div>
    )
  })
}
