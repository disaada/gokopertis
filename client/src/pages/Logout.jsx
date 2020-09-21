import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Logout () {
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect (() => {
		dispatch({ type: 'LOGOUT' })
		history.push('/')
	})

	return ( 
		<div></div>
	)
}

export default Logout