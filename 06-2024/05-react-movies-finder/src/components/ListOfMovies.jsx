const ListOfMovies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    <>
      {hasMovies
        ? (
          <ul className='movies'>
            {movies.map((movie) =>
              <li className='movie' key={movie.id}>
                <h3>{movie.year}</h3>
                <p>{movie.title}</p>
                <img src={movie.poster} alt={movie.Title} />
              </li>)}
          </ul>)
        : (
          <p>No se encontraron películas para esta búsqueda</p>
          )}
    </>
  )
}

export default ListOfMovies
