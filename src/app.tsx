import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { useTheme } from "./hooks/theme"
import DefaultLayout from "./layouts/default"

const App = () => {
  useTheme()

  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  )
}

export default App
