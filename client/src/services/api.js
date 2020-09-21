import Axios from 'axios'

const axios = Axios.create({
	baseURL: 'http://localhost:5000'
})

const getLogin = (data) => axios.post('/signin', data)
const getUser = (token) => axios.get('/user/disa', { headers: { 'Authorization': token } })

export {
	getLogin,
	getUser
}