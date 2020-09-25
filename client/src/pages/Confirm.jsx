import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { server } from '../services/api'

function Confirm () {
	const { register, handleSubmit } = useForm()
	const [ notification, SetNotification ] = useState()

	const onSubmit = (data) => {
		const { whatsapp } = data

		server.putConfirmation(data)
		.then((res) => {
			SetNotification('Link sudah dikirim ke Whatsapp kamu yaa ^^')
			setTimeout(SetNotification(''), 5000)
		})
	}

	return (
		<div>
			<form className="form-signin" style={{ marginTop: '150px' }} onSubmit={handleSubmit(onSubmit)}>
				<h1 className="h3 mb-3 font-weight-normal">Konfirmasi Pendaftaran</h1>
				<label>Masukkan No. WA yang kamu daftarkan</label>
				<div className="input-group-prepend">
	              	<span className="input-group-text">+62</span>
	            	<input className="form-control" type="text" name="whatsapp" ref={register} placeholder="No WA tanpa angka nol" /> <br />
				</div>
				<br />
				<button className="btn btn-lg btn-primary btn-block" type="submit"> Konfirmasi Hadir </button>
				
			</form>
		</div>
	)
}

export default Confirm