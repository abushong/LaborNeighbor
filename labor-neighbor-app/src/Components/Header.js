import React, { Component } from 'react';
import logo from './logofiller.jpg'

export default class Header extends Component{
	render(){
		return(
			<header className="component_header">
				<img className="component_header_img" src={logo} alt="logo" />
				<p className="component_header_text">Log In</p>
				<p className="component_header_text">Post a Job</p>
			</header>
		);
	}
}