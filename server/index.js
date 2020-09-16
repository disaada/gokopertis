const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
	const participants = '{"name": "Disa", "email": "disaada@gmail.com"}'

	res.send(participants)
	console.log(participants)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(port, () => {
	console.log(`App listening to port ${port}`)
})