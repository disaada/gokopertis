import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Logout ({logout}) {
	const history = useHistory()

	useEffect (() => {
		logout()
		history.push('/')
	})

	return ( 
		<div></div>
	)
}

const mapState = (state) => (
	{ "login_status": state.login_status }
)

const mapDispatch = (dispatch) => (
	{ "logout": () => dispatch({ type: 'logout' }) }
)

export default connect(mapState, mapDispatch)(Logout)