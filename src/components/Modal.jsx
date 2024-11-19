import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import '../styles/Modal.css'

/*
const CONTENT_STYLES = {
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexDirection: 'column',
  maxWidth: '80%',
  maxHeight: '35%',
  fontSize: '5px',
  textAlign: 'center'
}
  */

0
const Modal = ({ open, onClose, movie }) => {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div className="overlaystyles" />
      <div className="modalstyles">
        <div className="contentstyles">
          <img
            className="imagestyles"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <h3>{movie.original_title}</h3>
          <p>{movie.overview}</p>
          <p>
            <b>release_date: </b> {movie.release_date}
          </p>
          <button onClick={onClose}>Close</button>
        </div>
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
