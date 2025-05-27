import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { supabase } from "../../supabase"
import { useNavigate } from "react-router-dom"

function Perfil() {
  const { user, setUser } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    navigate("/login")
  }

  if (!user) return <p>Debes iniciar sesión</p>

  return (
    <div>
      <h2>Perfil</h2>
      <p>Correo: {user.email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Perfil
