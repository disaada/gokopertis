const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.send('hello world')
})

app.listen(port, () => {
	console.log(`App listening to port ${port}`)
})