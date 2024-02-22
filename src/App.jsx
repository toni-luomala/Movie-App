import { useEffect, useState } from 'react'
//import axios from 'axios'
import PropTypes from 'prop-types'
import Display from './components/Display'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'
import './styles/App.css'

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

  //console.log('movies: ', movies)

  useEffect(() => {
    getMovieRequest()
  }, [])

  //const searchedMovie = movies.filter((movie) => {
  //return movie.Title.toLowerCase().includes(search.toLowerCase())
  //})

  //console.log('movies: ', movies)

  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="input">
            <form>
              Search:{' '}
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
          <div className="display">
            <Display
              //searchedMovie={searchedMovie}
              movies={movies}
              search={search}
            />
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

App.propTypes = {
  movie: PropTypes.object
}

export default App

