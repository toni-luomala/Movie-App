import Modal from './Modal'
import Button from './Button'
import favoritesService from '../services/favorites'
import { useState, useEffect } from 'react'
import '../styles/MovieCard.css'

const nofavorites = {
  fontSize: '1.5rem'
}

const Favorites = ({ movie, getFavorites, setFavorites, favorites }) => {
  console.log('Fav: ', favorites)
  const [isOpen, setIsOpen] = useState(false)
  console.log('movie: ', movie)

  useEffect(() => {
    getFavorites()
  }, [])

  const removeFavorite = (movie) => {
    const id = movie.id
    console.log('movie id', id)
    favoritesService
      .remove(id)
      .then(setFavorites(favorites.filter((p) => p.id !== id)))
    window.alert(`Removed ${movie.original_title} succesfully from favorites.`)
    console.log('remove this: ', movie)
  }

  if (favorites.length === 0) {
    return <div style={nofavorites}>No favorites added!</div>
  } else {
    return (
      <div className="display">
        {favorites.map((movie) => (
          <div className="moviecard" key={movie.id}>
            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              movie={movie}
            />
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              onClick={() => {
                setIsOpen(true)
              }}
            />
            <p>{movie.original_title}</p>
            <Button onClick={() => removeFavorite(movie)}></Button>
          </div>
        ))}
      </div>
    )
  }
}

export default Favorites
