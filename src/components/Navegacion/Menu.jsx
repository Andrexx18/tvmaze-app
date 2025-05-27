import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

function Menu() {
  const { user } = useContext(AppContext)

  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        {user && (
          <>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
          </>
        )}
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registro">Registro</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Menu
