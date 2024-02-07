import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError() as any

  const status = error?.status || 404
  const statusText = error?.statusText || error?.message

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center font-bold">
        <div className="text-gray-500 text-5xl">{status}</div>
        <div className="w-0.5 mx-16 h-3/5 my-auto bg-gray-500" />
        <div className="text-gray-500 text-5xl">{statusText}</div>
      </div>
    </div>
  )
}

export default Error
