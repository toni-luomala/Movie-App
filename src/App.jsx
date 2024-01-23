import { useEffect, useState } from 'react'
//import axios from 'axios'
import PropTypes from 'prop-types'
import Display from './components/Display'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  //const apiKey = import.meta.env.console.log('apikey: ', apiKey)
  const getMovieRequest = async () => {
    const url = import.meta.env.VITE_REACT_API_URL
    const response = await fetch(url)
    const responseJson = await response.json()

    console.log('response: ', responseJson.results)

    const apikey = JSON.stringify(import.meta.env.VITE_REACT_API)

    console.log('apikey: ', apikey)

    setMovies(responseJson.results)
  }

  console.log('movies: ', movies)

  useEffect(() => {
    getMovieRequest()
  }, [])

  //const searchedMovie = movies.filter((movie) => {
  //return movie.Title.toLowerCase().includes(search.toLowerCase())
  //})

  console.log('movies: ', movies)

  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backGroundColor: 'red',
    padding: '10px'
  }

  const MAIN = {
    margin: '2rem',
    maxWidth: 1440
  }

  return (
    <div style={MAIN}>
      <div>
        <div className="heading">
          <h1>Find your favorite movies</h1>
        </div>
        <div>
          <form>
            Search:{' '}
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div>
          <Display
            //searchedMovie={searchedMovie}
            movies={movies}
            search={search}
          />
        </div>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </div>
  )
}

App.propTypes = {
  movie: PropTypes.object
}

export default App

