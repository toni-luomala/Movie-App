import Modal from './Modal'
import Button from './Button'
import favoritesService from '../services/favorites'
import { useState, useEffect } from 'react'

const Favorites = ({ movie, getFavorites, setFavorites, favorites }) => {
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
    console.log('remove this: ', movie)
  }

  return (
    <div className="moviecard">
      <Modal open={isOpen} onClose={() => setIsOpen(false)} movie={movie} />
      <img
        className="movie"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        onClick={() => {
          setIsOpen(true)
        }}
      />
      <p>{movie.original_title}</p>
      <Button onClick={() => removeFavorite(movie)}></Button>
    </div>
  )
}

export default Favorites
