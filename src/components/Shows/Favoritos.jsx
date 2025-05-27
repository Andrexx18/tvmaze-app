import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { Link } from "react-router-dom"

function Favoritos() {
  const { favoritos } = useContext(AppContext)

  if (!favoritos.length) return <p>No tienes favoritos.</p>

  return (
    <div>
      <h2>Mis Favoritos</h2>
      <ul>
        {favoritos.map((fav) => (
          <li key={fav.show_id}>
            <Link to={`/show/${fav.show_id}`}>{fav.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favoritos
