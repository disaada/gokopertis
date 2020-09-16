import React from 'react'
import { useForm } from 'react-hook-form'

import { getLogin } from '../services/api'

function Login () {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => {
		const { username, password } = data
		getLogin({ username, password }).then(res => {
			console.log(res)
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

export default Login