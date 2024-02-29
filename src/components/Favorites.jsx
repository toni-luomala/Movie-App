const Favorites = ({ favorite }) => {
  return (
    <div>
      <img
        className="movie"
        src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`}
        alt={favorite.original_title}
      />
    </div>
  )
}

export default Favorites
