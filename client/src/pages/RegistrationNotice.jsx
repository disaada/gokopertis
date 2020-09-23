import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/notice.css'

function RegistrationNotice () {
	return (
		<div>
			<main role="main" className="inner cover">
			    <h1 className="cover-heading">Daftar sukses ! <span role="img" aria-label="">&#127881;</span></h1>
			    <p className="lead">
			    	Silahkan melakukan <Link to="/confirm"> Konfirmasi </Link> untuk mendapatkan link acara
			    	<br /> (konfirmasi dibuka pada tanggal <span role="img" aria-label="">&#128197;</span> [TANGGAL]) ^_^ jadi, <i>stay tune</i> yaaah <span role="img" aria-label="">&#128037;</span>!
			    </p>
			 </main>
		</div>
	)
}

export default RegistrationNotice