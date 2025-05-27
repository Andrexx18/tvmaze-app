import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { getShowById } from "../../api/tvmaze"
import { AppContext } from "../../context/AppContext"
import { supabase } from "../../supabase"

function ShowDetalle() {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const { user, favoritos, setFavoritos } = useContext(AppContext)

  useEffect(() => {
    getShowById(id).then(setShow)
  }, [id])

  const esFavorito = favoritos.some((f) => f.show_id === Number(id))

  const toggleFavorito = async () => {
    if (!user) return alert("Debes iniciar sesión")

    if (esFavorito) {
      await supabase
        .from("favoritos")
        .delete()
        .eq("user_id", user.id)
        .eq("show_id", id)
      setFavoritos(favoritos.filter((f) => f.show_id !== Number(id)))
    } else {
      const nuevo = { user_id: user.id, show_id: show.id, nombre: show.name }
      await supabase.from("favoritos").insert(nuevo)
      setFavoritos([...favoritos, nuevo])
    }
  }

  if (!show) return <p>Cargando...</p>

  return (
    <div>
      <h2>{show.name}</h2>
      {show.image && <img src={show.image.medium} alt={show.name} />}
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <p>Géneros: {show.genres.join(", ")}</p>
      <p>Idioma: {show.language}</p>
      <button onClick={toggleFavorito}>
        {esFavorito ? "❤️ Quitar de Favoritos" : "🤍 Agregar a Favoritos"}
      </button>
    </div>
  )
}

export default ShowDetalle
