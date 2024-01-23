import { useState } from 'react'
import Modal from './Modal'
import PropTypes from 'prop-types'

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log('movie title: ', movie.original_title)

  //console.log('MovieCard: ', movie)
  const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }

  const MOVIECARD = {
    margin: '1rem'
  }

  return (
    <div style={MOVIECARD}>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} movie={movie} />
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>details</button>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard
