import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';

import Login from './pages/Login'

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
    		<Switch>
    			<Route exact path="/" component={Login} />
    		</Switch>
    	</BrowserRouter>
    </div>
  );
}

export default App;
