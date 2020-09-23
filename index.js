const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const cors = require('cors')
app.use(cors())
  
const users = require('./routes/users')
app.use('/', users)

const events = require('./routes/events')
app.use('/', events)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`App listening to port ${port}`)
})