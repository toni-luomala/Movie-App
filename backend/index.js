const express = require('express')
const app = express()

app.use(express.json())

let movies = []

const cors = require('cors')

app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Movies Backend</h1>')
})

app.get('/api/favorites', (request, response) => {
  console.log('movies: ', movies)
  response.json(movies)
})

app.delete('/api/favorites/:id', (request, response) => {
  const id = Number(request.params.id)
  movies = movies.filter((movie) => movie.id !== id)
  console.log('movie deleted')
  response.status(204).end()
})

app.post('/api/favorites', (request, response) => {
  const movie = request.body
  console.log('movie:', movie)
  if (!movie.original_title) {
    return response.status(400).json({
      error: 'movie title missing'
    })
  }

  movies.push(movie)
  console.log('movies:', movies)
  response.json(movies)
})

app.get('/api/favorites/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log('id: ', typeof id)
  const movie = movies.find((movie) => movie.id === id)

  if (movie) {
    response.json(movie)
  } else {
    response.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
