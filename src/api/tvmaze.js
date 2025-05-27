export const buscarShows = async (query) => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
  return res.json()
}

export const getShowById = async (id) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  return res.json()
}
