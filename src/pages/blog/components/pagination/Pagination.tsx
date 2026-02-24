interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav
      className="mt-6 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        className="px-3 py-1 rounded border"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Anterior
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`px-3 py-1 rounded border ${p === page ? "bg-black text-white" : ""}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        className="px-3 py-1 rounded border"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        Próximo
      </button>
    </nav>
  )
}
