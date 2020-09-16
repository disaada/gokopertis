const Model = require('../db/models')
const bcrypt = require('bcrypt')

const getLogin = async (req, res) => {
	const { username, password } = req.body
	const data = await Model.user.findOne({where: { username }})
	if(data && bcrypt.compareSync(data.password, password)) {
		res.json({ "login" : "success" })
	} else res.json({ "login": "failed" })
}

module.exports = {
	getLogin
}