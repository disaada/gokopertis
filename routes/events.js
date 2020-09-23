const express = require('express')
const router = express.Router()
const venom = require('venom-bot')
 
const Model = require('../db/models')

router.post('/register', async (req, res) => {
	await Model.register.create(req.body)
	.then(() => {
		res.sendStatus(201)
	})
	.catch((e) => {
		res.end(e)
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

router.post('/test', async (req, res) => {
	const { whatsapp, name } = req.body.whatsapp
	const waMessage = `💐💐💐💐💐💐💐💐💐💐 \n Assalaamualaikum ${name}, saya Disa dari [ORGANIZER] 😊 Terimakasih sudah mendaftar \n konfirmasi akan dibuka pada tanggal: \n \n 📅 *[TANGGAL]* \n \n Lakukan konfirmasi agar kamu bisa mendapatkan link acaranya yaaah~ 💕 \n 💐💐💐💐💐💐💐💐💐💐`
})

module.exports = router