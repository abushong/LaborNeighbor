import React, { Component } from 'react';

export default class Header extends Component{
	render(){
		return(
			<header className="component_header">
				<img className="component_header_img" src="logofiller.jpg" alt="logo" />
				<p className="component_header_text">Log In</p>
				<p className="component_header_text">Sign Up</p>
			</header>
		);
	}
}