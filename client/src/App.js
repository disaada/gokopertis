import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
	const [data, setData] = useState()

	const handleClick = () => {
		fetch('/profile')
		.then((res) => res.json())
		.then((participants) => {
			console.log(participants)
		})
		/*Axios({
			method: "GET",
			url: "http://localhost:5000/",
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response) => {
			setData(response.data)
		})*/
	}

  return (
    <div className="App">
    	<button type="button" onClick={handleClick} >
    		Get Data
    	</button>
    	{
    		data
    		&&
    		<p key={data.id}>
    			name: {data.name}
    			<br />
    			email: {data.email}
    		</p>
    	}
    </div>
  );
}

export default App;
