const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization
	if (authHeader) {
		const token = authHeader.split(' ')[1]
		jwt.verify(token, 'secret', (err, decoded_data) => {
			if (err) {
				res.status(403).end()
			}

			req.user = decoded_data
			next()
		})
	} else {
		res.status(401).end()
	}
}

module.exports = authenticateJWT