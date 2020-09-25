import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { server } from '../services/api'

function Home () {
	const token = useSelector((state) => state.token)

	/*useEffect(() => {
		server.getUser(token)
		.then((res) => {
			
		})
	})*/

	return (
		<div>
			Home
		</div>
	)
}

export default Home