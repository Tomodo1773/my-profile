import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Profile from "@/components/profile"
import "./styles.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Profile />
  </StrictMode>
)
