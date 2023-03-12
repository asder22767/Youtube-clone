import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import SingleVideo from "./Pages/SingleVideo"
import NotFound from "./Pages/NotFound"
import Authentification from "./Pages/Authentification"
import { useContext } from "react"
import { AuthContext } from "./components/contexts/AuthContext"
import Channel from "./Pages/Channel"

function App() {
  const { isLogin } = useContext(AuthContext)

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/video/:id" element={<SingleVideo />} />
      {isLogin ? (
        <Route path="/auth" element={<Channel />} />
      ) : (
        <Route path="/auth" element={<Authentification />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
