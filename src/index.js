import ReactDOM from 'react-dom';
import App from './App';
import Header from './Components/Header';
import CreateForm from './Components/CreateForm';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import React, { Component } from 'react'


const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/add" component={CreateForm} />
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



