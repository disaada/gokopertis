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

module.exports = authenticateJWT