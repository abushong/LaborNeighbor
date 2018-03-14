import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpSheet from "Components/SignUpSheet.js";
import Body from "Components/Body.js";

import App from "./App.js";

export default class Routes extends Component{
	render() {
    	return (
			<Switch>
				<Route exact path="/" component={Body} />
				<Route path="/signup" component={SignUpSheet} />
			</Switch>
		);
	}
}