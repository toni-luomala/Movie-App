import { useState } from 'react'
import Modal from './Modal'
import PropTypes from 'prop-types'
import '../styles/MovieCard.css'

const MovieCard = ({ movie, addToFavorites }) => {
  const [isOpen, setIsOpen] = useState(false)

  //console.log('movie title: ', movie.original_title)

  const handleModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="moviecard">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} movie={movie} />
      <img
        className="movie"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        onClick={() => {
          handleModal()
        }}
      />
      <p>{movie.original_title}</p>
      <button className="favorite-button" onClick={() => addToFavorites(movie)}>
        add to favorites
      </button>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard
