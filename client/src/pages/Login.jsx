import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { server } from '../services/api'

function Login () {
	const history = useHistory()
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const [warning, setWarning] = useState('')
	
	const onSubmit = (data) => {
		const { username, password } = data
		server.getLogin({ username, password }).then(res => {
			const token = res.data.accessToken
			if (res.status === 200) {
				dispatch({ type: 'LOGIN', token: token })
				history.push('/')
			}
			else {
				history.push('/')
				setWarning('username/password tidak valid!')
				setTimeout(() => setWarning(''), 2000)				
			}
		})
		.catch((e) => {
			console.log(e)
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
			{warning}
		</div>
	)
}

export default Login