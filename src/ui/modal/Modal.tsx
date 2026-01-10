export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-gray-50 rounded-xl border-black border-2 shadow-lg p-8 w-3/5 h-fit ">
        {/* <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        ></button> */}

        {children}
      </div>
    </div>
  )
}
