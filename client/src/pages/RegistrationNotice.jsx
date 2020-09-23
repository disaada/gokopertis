import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/notice.css'

function RegistrationNotice () {
	return (
		<div>
			<main role="main" class="inner cover">
			    <h1 class="cover-heading">Daftar sukses ! &#127881;</h1>
			    <p class="lead">
			    	Silahkan melakukan <Link to="/confirm"> Konfirmasi </Link> untuk mendapatkan link acara
			    	<br /> (konfirmasi dibuka pada tanggal &#128197; [TANGGAL]) ^_^ jadi, <i>stay tune</i> yaaah &#128037;!
			    </p>
			 </main>
		</div>
	)
}

export default RegistrationNotice