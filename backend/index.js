const express = require('express')
const app = express()

app.use(express.json())

let movies = [
  {
    id: '1',
    original_title: "Rocky 7: Adrian's Revenge",
    important: true
  },
  {
    id: '2',
    original_title: 'Ace Ventura 3',
    important: false
  },
  {
    id: '3',
    original_title: 'Commando 2',
    important: true
  }
]

const cors = require('cors')

app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/favorites', (request, response) => {
  response.json(movies)
})

app.get('/api/favorites/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find((note) => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/favorites/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter((note) => note.id !== id)

  response.status(204).end()
})

app.post('/api/favorites', (request, response) => {
  const movie = request.body
  console.log(movie)
  if (!movie.original_title) {
    return response.status(400).json({
      error: 'movie title missing'
    })
  }

  response.json(movie)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
