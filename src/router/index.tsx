import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/home"
import Error from "@/error"

export const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])
