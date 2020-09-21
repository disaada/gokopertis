import Axios from 'axios'

const axios = Axios.create({
	baseURL: 'http://localhost:5000'
})

const server = {}

// Login
server.getLogin = (data) => axios.post('/signin', data)

// User
server.getUser = (token) => axios.get('/user/disa', { headers: { 'Authorization': token } })

// Event
server.postRegister = (data) => axios.post('/register', data)

export {
	server
}