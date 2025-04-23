//import Popup from 'reactjs-popup'
import '../styles/Popup.css'

const Popupbox = ({ popup, newMovie, alreadyFavorite }) => {
  console.log('alreadyFAvorite:', alreadyFavorite)
  const showMessage = () =>
    alreadyFavorite ? (
      <p>{newMovie.original_title} is already in favorites!</p>
    ) : (
      <p>
        Added <b>{newMovie.original_title}</b> to favorites!
      </p>
    )
  console.log('newMovie:', newMovie)
  if (!popup) return null
  return <div className="popupstyles">{showMessage()}</div>
}

export default Popupbox
