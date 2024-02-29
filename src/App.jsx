import { useEffect, useState } from 'react'
//import axios from 'axios'
import PropTypes from 'prop-types'
import Display from './components/Display'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'
import Favorites from './components/Favorites'
import './styles/App.css'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [filteredMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const getMovieRequest = async () => {
    const url = import.meta.env.VITE_REACT_API_URL

    const searchUrl = import.meta.env.VITE_REACT_API_URL_SEARCH

    const apiKey = import.meta.env.VITE_REACT_API_KEY

    const fullUrl = `${searchUrl}${search}${apiKey}`

    const response = await fetch(url)

    const searchResponse = await fetch(fullUrl)

    const responseJson = await response.json()

    const searchResponseJson = await searchResponse.json()

    console.log('response: ', responseJson.results)

    search === ''
      ? setMovies(responseJson.results)
      : setMovies(searchResponseJson.results)
  }

  useEffect(() => {
    getMovieRequest()
  }, [search])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value

    setSearch(searchTerm)
    const searchedMovie = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMovies(searchedMovie)
  }

  console.log('movies: ', movies)

  console.log('favorites: ', favorites)

  const addToFavorites = (movie) => {
    const alreadyFavorite = favorites.some(
      (newmovie) => newmovie.id === movie.id
    )

    if (!alreadyFavorite) {
      setFavorites([...favorites, movie])
      console.log('favorites: ', favorites)
    } else {
      window.alert('This movie is already added to favorites!')
    }
  }

  const handleShowFavorites = () => {
    setShowFavorites(true)
    console.log('favorites button clicked')
  }

  return (
    <>
      <Navbar />
      <button onClick={() => setShowFavorites(false)}>Main page</button>
      <button onClick={handleShowFavorites}>favorites </button>
      {showFavorites && (
        <div className="display">
          {favorites.map((favorite) => (
            <div>
              <Favorites
                favorite={favorite}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          ))}
        </div>
      )}
      {!showFavorites && (
        <div>
          <div>
            <div className="input">
              <form>
                Search:{' '}
                <input
                  type="search"
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Type movie to search"
                />
              </form>
            </div>
            <div className="display">
              <Display
                movies={movies}
                search={search}
                addToFavorites={addToFavorites}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>
        </div>
      )}
      <Bottombar />
    </>
  )
}

App.propTypes = {
  movie: PropTypes.object
}

export default App

