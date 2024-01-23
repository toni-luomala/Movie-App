import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import Modal from './Modal'
import { useState } from 'react'

const Display = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(false)

  console.log('typeofmovies: ', typeof movies)

  const SHOWMOVIES = {
    position: 'relative',
    display: 'flex'
  }
  return (
    <div style={SHOWMOVIES}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} movie={movie} />
          <MovieCard movie={movie} onClick={() => setIsOpen(true)} />
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
