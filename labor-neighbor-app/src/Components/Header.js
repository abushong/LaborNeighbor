import React, { Component } from 'react';
import logo from './logofiller.jpg';
import { Route } from 'react-router-dom';
import routes from "../routes.js";
import { Link } from 'react-router-dom'

export default class Header extends Component{
	render(){
		return(
			<header className="component_header">
				<Link to="/">
					<img className="component_header_img" src={logo} alt="logo" />
				</Link>
				<Link to="/signup">
					<p className="component_header_text">Log In</p>
				</Link>
				<p className="component_header_text">Post a Job</p>
			</header>
		);
	}
}