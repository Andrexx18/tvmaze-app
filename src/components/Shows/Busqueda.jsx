import { useState } from "react"
import { buscarShows } from "../../api/tvmaze"
import { Link } from "react-router-dom"

function Busqueda() {
  const [query, setQuery] = useState("")
  const [resultados, setResultados] = useState([])

  const handleBuscar = async (e) => {
    e.preventDefault()
    const res = await buscarShows(query)
    setResultados(res)
  }

  return (
    <div>
      <h2>Buscar Series</h2>
      <form onSubmit={handleBuscar}>
        <input
          type="text"
          placeholder="Ej: Batman"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {resultados.map((r) => (
          <li key={r.show.id}>
            <Link to={`/show/${r.show.id}`}>{r.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Busqueda
