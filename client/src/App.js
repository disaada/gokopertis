import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './signin.css';

import Navigation from './components/Navigation'
import Login from './pages/Login'
import Home from './pages/Home'
import Logout from './pages/Logout'
import Registration from './pages/Registration'

function App() {
    const token = useSelector((state) => state.token)

  return (
    <div className="App">
        <BrowserRouter>
            {
                (token !== null)
                ? (<Navigation />)
                : null
            }
            <Switch>
                <Route exact path="/" component={token === null ? Login : Home} />
        	    <Route path="/registration" component={Registration} />
                <Route path="/logout" component={Logout} />
            </Switch>
    	</BrowserRouter>
    </div>
  );
}

export default App;
