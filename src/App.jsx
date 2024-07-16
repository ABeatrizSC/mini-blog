import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { Container } from "./components/Container"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"
import { useEffect, useState } from "react"
import { useAuthentication } from "./hooks/useAuthentication"
import { Loader } from "./components/Loader"
import { onAuthStateChanged } from "firebase/auth"
import { CreatePost } from "./pages/CreatePost"
import { PostDetails } from "./pages/PostDetails"
import { Dashboard } from "./pages/Dashboard"
import { EditPost } from "./pages/EditPost"

export function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication(); //getAuth

  const isLoadingUser = user === undefined;

  //everytime Auth changes 
  useEffect(() => {
    //get the current user 
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth])

  if (isLoadingUser) {
    return <Loader />
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Nav />
        <Container>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
            <Route path="/posts/edit/:id" element={user ? <EditPost /> : <Navigate to="/login" />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}
