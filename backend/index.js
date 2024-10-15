const express = require('express')
const app = express()

app.use(express.json())

let movies = []

const cors = require('cors')

app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/favorites', (request, response) => {
  response.json(movies)
})

app.delete('/api/favorites/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter((note) => note.id !== id)

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
  const id = request.params.id
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
