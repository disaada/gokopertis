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
server.getEventSetting = (token) => axios.get('/event', { headers: { 'Authorization': token } })
server.postEvent = (data, token) => axios.post('/event', data, { headers: { 'Authorization': token } })
server.putEvent = (id, data, token) => axios.put(`/event/${id}`, data, { headers: { 'Authorization': token } })

server.postRegister = (data) => axios.post('/register', data)
server.putConfirmation = (data) => axios.put('/confirm', data)

export {
	server
}