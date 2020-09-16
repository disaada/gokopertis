const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const login = require('./routes/login')
app.post('/login', login.getLogin)

/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})*/

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`App listening to port ${port}`)
})