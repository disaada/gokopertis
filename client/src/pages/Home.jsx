import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getUser } from '../services/api'

function Home () {
	const token = useSelector((state) => state.token)

	useEffect(() => {
		getUser(token)
		.then((res) => {
			console.log(res)
		})
	})

	return (
		<div>
			Home
		</div>
	)
}

export default Home