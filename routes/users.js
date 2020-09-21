const express = require('express')
const router = express.Router()
const Model = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization
	if (authHeader) {
		const token = authHeader.split(' ')[1]
		jwt.verify(token, 'secret', (err, decoded_data) => {
			if (err) {
				res.sendStatus(403)
			}

			req.user = decoded_data
			next()
		})
	} else {
		res.sendStatus(401)
	}
}

router.post('/signup', (req, res) => {
	const data = {
		"email": req.body.email,
		"username": req.body.username,
		"password": bcrypt.hashSync(req.body.password, 10)
	}
	Model.user.create(data)
	.then((data) => {
		res.json({ message: 'signup success!' })
	})
	.catch((e) => {
		res.json(e)
	})
})

router.post('/signin', (req, res) => {
	const { username, password } = req.body
	Model.user.findOne({ where: { username } })
	.then((data) => {
		if (data && (bcrypt.compareSync(password, data.password))) {
			const token = 'Bearer ' + jwt.sign({ data }, 'secret', { expiresIn: '1h' })

			res.json({ accessToken: token })	
		}
		else res.json({ message: 'invalid username or password!' })
	})
	.catch((e) => {
		res.json(e)
	})
})

router.get('/user/:id', authenticateJWT, (req, res) => {
	 res.json('user home page')
})

router.put('/user/:id', (req, res) => {
	 res.send('Birds home page')
})

router.delete('/user/:id', (req, res) => {
	 res.send('Birds home page')
})

module.exports = router