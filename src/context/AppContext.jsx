import { createContext, useState, useEffect } from "react"
import { supabase } from "../supabase"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
  }, [])

  useEffect(() => {
    const fetchFavoritos = async () => {
      if (!user) return setFavoritos([])
      const { data } = await supabase
        .from("favoritos")
        .select("*")
        .eq("user_id", user.id)
      setFavoritos(data || [])
    }
    fetchFavoritos()
  }, [user])

  return (
    <AppContext.Provider value={{ user, setUser, favoritos, setFavoritos }}>
      {children}
    </AppContext.Provider>
  )
}
