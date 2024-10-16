import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Display from './components/Display'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'
import Favorites from './components/Favorites'
import favoritesService from './services/favorites'
import './styles/App.css'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [filteredMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)

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
      console.log('favoritemovie: ', movie)
      favoritesService.add(movie).then((returnedMovie) => {
        setFavorites([...favorites.concat(returnedMovie)])
      })
      window.alert(`Added ${movie.original_title} succesfully to favorites.`)
    } else {
      window.alert(`${movie.original_title} is already added to favorites.`)
    }
  }

  return (
    <>
      <Navbar />
      <button className="top-button" onClick={() => setShowFavorites(false)}>
        Main page
      </button>
      <button className="top-button" onClick={() => setShowFavorites(true)}>
        favorites{' '}
      </button>
      {showFavorites && (
        <div className="display">
          {favorites.map((movie) => (
            <div>
              <Favorites movie={movie} />
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

