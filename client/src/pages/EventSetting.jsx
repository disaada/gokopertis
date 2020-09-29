import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import { server } from '../services/api'

function EventSetting () {
	const [event, setEvent] = useState({ "id": null })
	const { register, handleSubmit, reset } = useForm()
	const history = useHistory()

	const token = useSelector((state) => state.token)
	const minDate = (moment().add(2, 'day').format()).split('T')[0]
	const maxDate = (moment().add(1, 'month').format()).split('T')[0]

	useEffect(() => {
		server.getEventSetting(token)
		.then((res) => {
			if (res.status === 200) setEvent(res.data[0]) 
		})	
	}, [token])

	const onSubmit = (data) => {

		const { event_name, date, time, event_link } = data
		if (event.id === null) {
			server.postEvent({ event_name, date, time, event_link }, token)
			.then((res) => {
				if (res.status === 200) setEvent(res.data)
			})
			reset()
		} else {
			server.putEvent(event.id, { event_name, date, time, event_link }, token)
			.then((res) => {
				if (res.status === 200) setEvent(res.data)
			})
			reset()
		}
	}

	return (
		<div>
			<div className="form-signin card mt-5 mb-3" style={{ width: '18rem' }} >
				<div className="card-body">
					{event.id === null ? 'Tidak ada event, mohon lengkapi info event' : ''}
					
					{event.id && (
						<p className="card-text" key={ event.event_name } style={{ align: 'left' }}>
							Nama acara : { event.event_name } <br />
							Tanggal : { event.date } <br />
							Waktu : { event.time } <br />
							Link : { event.event_link }
						</p>
					)}
				</div>
			</div>


			<form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
				<h1 className="h3 mb-3 font-weight-normal">Edit/Add Event</h1>
				<input className="form-control" type="text" name="event_name" ref={register} placeholder="Nama Event" /> <br />
				<input className="form-control" type="date" name="date" min={minDate} max={maxDate} ref={register} placeholder="Tanggal Acara" /> <br />
				<input className="form-control" type="time" name="time" min="08:00" max="17:00" defaultValue="00:00" ref={register} placeholder="Waktu Acara" /> <br />
				<textarea className="form-control" name="event_link" ref={register} rows="3" defaultValue="Link Webinar/Zoom/Acara Daring"></textarea><br />
				<button className="btn btn-lg btn-primary btn-block" type="submit"> Login </button>
			</form>
		</div>
	)
}

export default EventSetting