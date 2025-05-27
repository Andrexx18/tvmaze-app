import { useEffect, useState } from "react"
import { buscarShows } from "../../api/tvmaze"
import { Link } from "react-router-dom"

function ListaShows() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    buscarShows("star").then(setShows)
  }, [])

  return (
    <div>
      <h2>Lista de Series</h2>
      <ul>
        {shows.map((s) => (
          <li key={s.show.id}>
            <Link to={`/show/${s.show.id}`}>{s.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaShows
