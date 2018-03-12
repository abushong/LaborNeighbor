import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logofiller.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import { Router, hashHistory as history } from "react-router-dom";
import routes from "../routes.js";

export default class Header extends Component{
	render(){
		return(
			<BrowserRouter routes={routes}>
			<header className="component_header">
				<Link to="/"><img className="component_header_img" src={logo} alt="logo" /></Link>
				<p className="component_header_text"><Link to="./SignUpSheet.js">Log In</Link></p>
				<p className="component_header_text">Post a Job</p>
			</header>
			</BrowserRouter>
		);
	}
}