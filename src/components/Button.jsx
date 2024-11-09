import '../styles/Button.css'

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      remove
    </button>
  )
}

export default Button
