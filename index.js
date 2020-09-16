const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/profile', (req, res) => {
	const participants = '{"name": "Disa", "email": "disaada@gmail.com"}'

	res.json(participants)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, () => {
	console.log(`App listening to port ${port}`)
})