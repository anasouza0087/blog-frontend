import { FaCheckCircle } from "react-icons/fa"

interface ToastProps {
  status: "success" | "error" | "info"
  message: string
}

export const Toast = ({ status, message }: ToastProps) => {
  const TOAST_CONFIG = {
    success: {
      text: "text-green-400",
      border: "border-green-500",
      background: "bg-green-50",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    error: {
      text: "text-red-500",
      border: "border-red-500",
      background: "bg-red-50",
      icon: <FaCheckCircle className="text-red-500" />,
    },
    info: {
      text: "text-blue-500",
      border: "border-blue-500",
      background: "bg-blue-50",
      icon: <FaCheckCircle className="text-blue-500" />,
    },
  }

  return (
    <div
      className={`fixed  bottom-8 right-8 border-2 ${TOAST_CONFIG[status].border} ${TOAST_CONFIG[status].text} ${TOAST_CONFIG[status].background} px-4 py-2 rounded  shadow-lg w-80 flex flex-row justify-between gap-2`}
    >
      <div className="flex items-center justify-center">{TOAST_CONFIG[status].icon}</div>{" "}
      <div className="w-full font-bold">{message}</div>
    </div>
  )
}
