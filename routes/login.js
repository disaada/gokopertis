const Model = require('../db/models')
const bcrypt = require('bcrypt')

const getLogin = async (req, res) => {
	const { username, password } = req.body
	const data = await Model.user.findOne({where: { username }})
	if(data && (bcrypt.compareSync(password, data.password))) {
		res.json({ "login_status" : true })
	} else res.json({ "login_status": false })
}

module.exports = {
	getLogin
}