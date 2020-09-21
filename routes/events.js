const express = require('express')
const router = express.Router()
const Model = require('../db/models')

router.post('/register', (req, res) => {
	Model.register.create(req.body)
	.then(() => {
		res.sendStatus(201)
	})
	.catch((e) => {
		res.end(e)
	})
})

module.exports = router