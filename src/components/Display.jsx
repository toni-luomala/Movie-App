import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import Modal from './Modal'
import '../styles/Display.css'

const Display = ({ movies, addToFavorites, isOpen, setIsOpen }) => {
  return (
    <div className="display">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-container">
          <Modal open={isOpen} onClose={() => setIsOpen(false)} movie={movie} />
          <MovieCard
            movie={movie}
            addToFavorites={addToFavorites}
            onClick={() => setIsOpen(true)}
          />
        </div>
      ))}
    </div>
  )
}

Display.propTypes = {
  searchedMovie: PropTypes.array,
  movies: PropTypes.array,
  search: PropTypes.string
}

export default Display
