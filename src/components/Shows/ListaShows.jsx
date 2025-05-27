import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ListaShows() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => {
        setShows(data.slice(0, 50)) // Cargar solo los primeros 50 shows
        setLoading(false)
      })
      .catch(err => {
        console.error("Error cargando shows:", err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando shows...</p>

  return (
    <div>
      <h2>Programas de TV Populares</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {shows.map(show => (
          <div key={show.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <Link to={`/show/${show.id}`}>
              <img src={show.image?.medium} alt={show.name} style={{ width: "100%" }} />
              <h4>{show.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaShows
