import { Routes, Route, Link } from "react-router-dom"
import ListaShows from "./components/Shows/ListaShows"
import ShowDetalle from "./components/Shows/ShowDetalle"
import Favoritos from "./components/Shows/Favoritos"
import Login from "./components/Usuario/Login"
import Registro from "./components/Usuario/Registro"
import Perfil from "./components/Usuario/Perfil"
import Menu from "./components/Navegacion/Menu"
import Busqueda from "./components/Shows/Busqueda"
import "./App.css"

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<ListaShows />} />
        <Route path="/show/:id" element={<ShowDetalle />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/buscar" element={<Busqueda />} />
      </Routes>
    </div>
  )
}

export default App
