import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';

import Login from './pages/Login'
import Logout from './pages/Logout'
import Registration from './pages/Registration'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
    		<Switch>
    			<Route exact path="/" component={Login} />
    			<Route path="/registration" component={Registration} />
    			<Route path="/logout" component={Logout} />

    			<Route path="/home" component={Home} />
    		</Switch>
    	</BrowserRouter>
    </div>
  );
}

export default App;
