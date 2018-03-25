import React, { Component } from 'react';
import logo from './logofiller.jpg';
import { Link } from 'react-router-dom'

export default class Header extends Component{
	render(){
		return(
			<header className="component_header">
				<Link to="/">
					<img className="component_header_img" src={logo} alt="logo" />
				</Link>
				<Link to="/about">
					<p className="component_header_text_left">About</p>
				</Link>
				<Link to="/jobboard">
					<p className="component_header_text_left">Job Board</p>
				</Link>
				<Link to="/signup">
					<p className="component_header_text_right">Sign In</p>
				</Link>
			</header>
		);
	}
}