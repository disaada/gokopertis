import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { getLogin } from '../services/api'

function Login ({login_status, login}) {
	const history = useHistory()
	const { register, handleSubmit } = useForm()
	
	const onSubmit = (data) => {
		const { username, password } = data
		getLogin({ username, password }).then(res => {
			if (res.data.login_status === true) {
				login()
				history.push('/home')
				console.log('login success')
			}
			else {
				history.push('/')
				console.log('login failed')
			}
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="username" ref={register} placeholder="Username" /> <br />
				<input type="password" name="password" ref={register} placeholder="Password" /> <br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}

const mapState = (state) => (
	{ "login_status": state.login_status }
)

const mapDispatch = (dispatch) => (
	{ "login": () => dispatch({ type: 'login' }) }
)

export default connect(mapState, mapDispatch)(Login)