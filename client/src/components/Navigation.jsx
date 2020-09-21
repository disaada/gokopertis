import React from 'react'
import { Link } from 'react-router-dom'

function Navigation () {
	const menus = [
		['/', 'Home'],
		['/logout', 'Logout']
	]

	return (
		<div>
		{
			menus.map(([path, linkname], idx) => (
				<Link to={path} key={idx}> {linkname} </Link>
		 	))
		}
		</div>
	)
}

export default Navigation