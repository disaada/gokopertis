const express = require('express')
const router = express.Router()
const venom = require('venom-bot')
 
const Model = require('../db/models')
const authenticateJWT = require('../auth') 

router.post('/register', async (req, res) => {
	await Model.register.create(req.body)
	.then(() => {
		res.status(201).end()
	})

	const name = (req.body.name).split('-')[1]
	console.log(name)
	const client = await venom.create({ 
		useChrome: false,
		debug: true,
		disableSpins: true,
		disableWelcome: true,
		updates: false,
	})
	const waMessage = `💐💐💐💐💐💐💐💐💐💐 \n\n Assalaamualaikum ${name}, saya Disa dari [ORGANIZER] 😊 Terimakasih sudah mendaftar \n konfirmasi akan dibuka pada tanggal: \n\n 📅 *[TANGGAL]* \n\n Lakukan konfirmasi agar kamu bisa mendapatkan link acaranya yaaah~ 💕 \n\n 💐💐💐💐💐💐💐💐💐💐`
	client.sendText(`${req.body.whatsapp}@c.us`, waMessage)
	.then(() => res.end())
})

router.get('/event', authenticateJWT, (req, res) => {
	Model.event.findAll()
	.then((data) => {
		if (data.length > 0) res.json(data)
		else res.status(204).end()
	})
	.catch((err) => console.log(err))
})

router.post('/event', authenticateJWT, (req, res) => {
	Model.event.create(req.body)
	.then((data) => {
		res.send(data)
	})
})

router.put('/event/:id', authenticateJWT, (req, res) => {
	const id = req.params.id
	Model.event.update(req.body, { where: { id } })
	.then(() => {
		let data = req.body
		data.id = id
		res.send(data)
	})
})

router.put('/confirm', (req, res) => {

	console.log(req.body)
})

module.exports = router