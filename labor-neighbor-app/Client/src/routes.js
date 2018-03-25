import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from "Components/About.js";
import Body from "Components/Body.js";
import SignUpSheet from "Components/SignUpSheet.js";
import JobBoard from "Components/JobBoard.js";

export default class Routes extends Component{
	render() {
    	return (
			<Switch>
				<Route exact path="/" component={Body} />
				<Route path="/signup" component={SignUpSheet} />
				<Route path="/jobboard" component={JobBoard} />
				<Route path="/about" component={About} />
			</Switch>
		);
	}
}