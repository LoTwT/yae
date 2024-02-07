import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/tailwind.css"
import App from "./app"

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
