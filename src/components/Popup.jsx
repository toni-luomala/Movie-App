//import Popup from 'reactjs-popup'
import '../styles/Popup.css'

const Popupbox = ({ popup, newMovie }) => {
  console.log('newMovie:', newMovie)
  if (!popup) return null
  return (
    <div className="popupstyles">
      <p>Added {newMovie.original_title} to favorites!</p>
    </div>
  )
}

export default Popupbox
