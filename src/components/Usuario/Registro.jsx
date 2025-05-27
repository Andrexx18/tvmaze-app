import { useState } from "react"
import { supabase } from "../../supabase"
import { useNavigate } from "react-router-dom"

function Registro() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) {
      setError("Error al registrar: " + error.message)
    } else {
      navigate("/login")
    }
  }

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  )
}

export default Registro
