import { useState } from 'react'
import Modal from './Modal'
import PropTypes from 'prop-types'
import '../styles/MovieCard.css'
import favoritesService from '../services/favorites'

const MovieCard = ({ movie, favorites }) => {
  const [isOpen, setIsOpen] = useState(false)

  const addToFavorites = (movie) => {
    const alreadyFavorite = favorites.some(
      (newmovie) => newmovie.id === movie.id
    )

    if (!alreadyFavorite) {
      console.log('favoritemovie: ', movie)
      favoritesService.add(movie).then((returnedMovie) => {
        setFavorites([...favorites, returnedMovie])
      })
      window.alert(`Added ${movie.original_title} succesfully to favorites.`)
    } else {
      window.alert(`${movie.original_title} is already added to favorites.`)
    }
  }

  const handleModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="moviecard">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} movie={movie} />
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        onClick={() => {
          handleModal()
        }}
      />
      <p>{movie.original_title}</p>
      <div className="favorite-button">
        <button onClick={() => addToFavorites(movie)}>add to favorites</button>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard
