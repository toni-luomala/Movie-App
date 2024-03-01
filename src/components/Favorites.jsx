import Modal from './Modal'
import { useState } from 'react'

const Favorites = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log('movie: ', movie)

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
    </div>
  )
}

export default Favorites
