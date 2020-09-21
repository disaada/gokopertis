const express = require('express')
const router = express.Router()
const Model = require('../db/models')

router.post('/register', (req, res) => {
	res.send(req.body)
	/*Model.register.create(req.body)
	.then(() => {
		res.sendStatus(201)
	})
	.catch((e) => {
		res.send(e)
	})*/
})

module.exports = router