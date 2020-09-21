import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css';

import Login from './pages/Login'
import Logout from './pages/Logout'
import Registration from './pages/Registration'
import Home from './pages/Home'

function App() {
	const login_status = useSelector(state => state.login_status)

	useEffect(() => {
		console.log(login_status)
	})

  return (
    <div className="App">
    	<BrowserRouter>
    		<Switch>
    			<Route exact path="/" component={ login_status ? Home : Login} />
    			<Route path="/registration" component={Registration} />
	    		<Route path="/logout" component={Logout} />
    		</Switch>
    	</BrowserRouter>
    </div>
  );
}

export default App;
