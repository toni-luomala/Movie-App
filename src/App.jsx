import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Display from './components/Display'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'
import Favorites from './components/Favorites'
import favoritesService from './services/favorites'
import Popupbox from './components/Popup'
import './styles/App.css'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [filteredMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)

  const getMovieRequest = async () => {
    const mainUrl = import.meta.env.VITE_REACT_API_URL

    const searchUrl = import.meta.env.VITE_REACT_API_URL_SEARCH

    const apiKey = import.meta.env.VITE_REACT_API_KEY

    const url =
      search === '' ? `${mainUrl}${apiKey}` : `${searchUrl}${search}${apiKey}`

    const response = await fetch(url)
    const responseJson = await response.json()

    setMovies(responseJson.results)
  }

  useEffect(() => {
    getMovieRequest()
  }, [search])

  const getFavorites = () => {
    favoritesService.getAll().then((favoriteMovies) => {
      setFavorites(favoriteMovies)
    })
  }

  useEffect(() => {
    getFavorites()
  }, [])

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
        getFavorites()
        setFavorites([...favorites, returnedMovie])
      })
      window.alert(`Added ${movie.original_title} succesfully to favorites.`)
    } else {
      setFavorites(favorites)
      window.alert(`${movie.original_title} is already added to favorites.`)
    }
  }

  const favoriteCount = (favorites) => {
    if (favorites.length === 0) {
      return null
    } else {
      return `(${favorites.length})`
    }
  }

  const showTitle = () => (search === '' ? <h1>Top 20 New Movies</h1> : null)

  console.log('showfavorites: ', showFavorites)

  return (
    <>
      <Navbar />
      <button className="top-button" onClick={() => setShowFavorites(false)}>
        Main page
      </button>
      <button className="top-button" onClick={() => setShowFavorites(true)}>
        favorites {favoriteCount(favorites)}
      </button>
      <Popupbox></Popupbox>
      {showFavorites && (
        <div className="display" key={favorites.id}>
          <Favorites
            getFavorites={getFavorites}
            setFavorites={setFavorites}
            favorites={favorites}
          />
        </div>
      )}
      {!showFavorites && (
        <div>
          <div>
            <div className="input">
              <form>
                Search:{' '}
                <input
                  className="element"
                  type="search"
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Type movie to search"
                />
              </form>
            </div>
            <div className="title">{showTitle()}</div>
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

