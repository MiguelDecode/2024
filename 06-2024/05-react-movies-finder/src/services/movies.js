const API_KEY = 'e72549e9'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const res = await fetch(`http://www.omdbapi.com/?apiKey=${API_KEY}&s=${search}`)

    const json = await res.json()

    const apiMovies = json.Search

    return apiMovies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (err) {
    throw new Error('Error searching movies')
  }
}
