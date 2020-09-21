import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { server } from '../services/api'

function Registration () {
	const { register, handleSubmit } = useForm()
	const history = useHistory()

	const onSubmit = (data) => {																																							
		const { name, whatsapp, email, community, job, event_source } = data
		server.postRegister({
			name: `EVT-${name}`,
			whatsapp: `62${whatsapp}`,
			email,
			community,
			job,
			event_source})									
		.then((res) => {
			if (res.status === 201) {
				history.push('/notice')
			} else {
				history.push('/registration')
			}
		})
		.catch((e) => {
			console.log(e)
		})
	}																				

	return (
		<div>						
			<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
				<h1 className="h3 mb-3 font-weight-normal">Form Pendaftaran</h1>
				<div className="input-group-prepend">
	              	<span className="input-group-text">EVT-</span>
	            	<input className="form-control" type="text" name="name" ref={register} placeholder="Nama" />
	            </div>
	            <br />
	            <div className="input-group-prepend">
	              	<span className="input-group-text">+62</span>
	            	<input className="form-control" type="text" name="whatsapp" ref={register} placeholder="No WA tanpa angka nol" /> <br />
				</div>
				<br />
				<input className="form-control" type="email" name="email" ref={register} placeholder="E-Mail" /> <br />
				<input className="form-control" type="text" name="community" ref={register} placeholder="Lembaga/Komunitas/Instansi" /> <br />
				<h4 style={{ textAlign: 'left' }}>Pekerjaan</h4>
				<div className="from-check ml-4" style={{ textAlign:'left' }}>
					<input className="form-check-input" type="radio" name="job" ref={register} value="karyawan swasta" /> Karyawan Swasta <br />
					<input className="form-check-input" type="radio" name="job" ref={register} value="mahasiswa" /> Mahasiswa <br />
					<input className="form-check-input" type="radio" name="job" ref={register} value="pelajar" /> Pelajar <br />
					<input className="form-check-input" type="radio" name="job" ref={register} value="ibu rt" /> Ibu RT <br />				
				</div>
				<br />
				<h4 style={{ textAlign: 'left' }}>Dapat info acara dari : </h4>
				<div className="from-check ml-4" style={{ textAlign:'left' }}>
					<input className="form-check-input" type="radio" name="event_source" ref={register} value="leaflet" /> Leaflet <br />
					<input className="form-check-input" type="radio" name="event_source" ref={register} value="teman" /> Teman <br />
					<input className="form-check-input" type="radio" name="event_source" ref={register} value="sosial media" /> Social Media <br />
				</div>
				<br />
				<button className="btn btn-lg btn-primary btn-block" type="submit"> Daftar </button>
			</form>
		</div>
	)
}

export default Registration