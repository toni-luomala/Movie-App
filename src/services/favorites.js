import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/favorites'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const add = (favoriteMovie) => {
  const request = axios.post(baseUrl, favoriteMovie)
  return request.then((response) => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data)
}

export default {
  getAll,
  add,
  remove
}
