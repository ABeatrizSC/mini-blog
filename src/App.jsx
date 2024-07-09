import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { Container } from "./components/Container"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}
