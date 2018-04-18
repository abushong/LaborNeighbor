import React, { Component } from 'react';
import logo from './LaborNeighbor.jpg';
import { Link } from 'react-router-dom';

export default class Header extends Component{
	render(){
		return(
			<header className="component_header">
				<Link to="/">
					<img className="component_header_img" src={logo} alt="logo" />
				</Link>
				<Link to="/signup">
					<p className="component_header_text_right">Sign In</p>
				</Link>
				<Link to="/contact">
					<p className="component_header_text_right">Contact</p>
				</Link>
				<Link to="/about">
					<p className="component_header_text_right">About</p>
				</Link>
			</header>
			
			<header className="component_header">
				<Link to="/">
					<img className="component_header_img" src={logo} alt="logo" />
				</Link>
				<Link to="/signup">
					<p className="component_header_text_right">Sign In</p>
				</Link>
				<Link to="/contact">
					<p className="component_header_text_right">Contact</p>
				</Link>
				<Link to="/about">
					<p className="component_header_text_right">About</p>
				</Link>
			</header>
		);
	}
}