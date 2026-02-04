interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-gray-50 rounded-xl border-black border-2 shadow-lg p-8 w-3/5 h-fit ">
        {children}
      </div>
    </div>
  )
}
