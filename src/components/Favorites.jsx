import Modal from './Modal'

const Favorites = ({ favorite, isOpen, setIsOpen }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        favorite={favorite}
      />
      <img
        className="movie"
        src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`}
        alt={favorite.original_title}
        onClick={() => setIsOpen(true)}
      />
    </div>
  )
}

export default Favorites
