import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getLogin } from '../services/api'

function Login () {
	const history = useHistory()
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	
	const onSubmit = (data) => {
		const { username, password } = data
		getLogin({ username, password }).then(res => {
			const token = res.data.accessToken
			console.log(token)
			if (res.status === 200) {
				dispatch({ type: 'LOGIN', token: token })
				history.push('/')
			}
			else {
				history.push('/')
			}
		})
	}

	return (
		<div>
			<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
				<h1 className="h3 mb-3 font-weight-normal">Welcome</h1>
				<input className="form-control" type="text" name="username" ref={register} placeholder="Username" /> <br />
				<input className="form-control" type="password" name="password" ref={register} placeholder="Password" /> <br />
				<button className="btn btn-lg btn-primary btn-block" type="submit"> Login </button>
			</form>
		</div>
	)
}

export default Login