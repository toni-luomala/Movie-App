import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  color: 'black'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000
}

const Modal = ({ open, onClose, movie }) => {
  //console.log('moviesOnModal: ', movie)
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h2>{movie.Title}</h2>
        <p>{movie.overview}</p>
        <p>
          <b>release_date: </b> {movie.release_date}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  movie: PropTypes.object
}

export default Modal
