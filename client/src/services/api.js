import Axios from 'axios'

const axios = Axios.create({
	baseURL: 'http://localhost:5000'
})

const getLogin = (data) => axios.post('/login', data)

export {
	getLogin
}