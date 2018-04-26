import React, { Component } from 'react';
import logo from './LaborNeighbor.jpg';
import { Link } from 'react-router-dom';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			header: ''
		};
	}

	componentDidMount(){
		console.log("headerrr: " + document.cookie);
		var cook = document.cookie.match(new RegExp("user" + '=([^;]+)'));
		console.log("cooks: " + cook[1]);
		this.setState({
			header: cook[1]
		});
		console.log("headdd" + this.state.header)
	}

	renderHeader(){
		if(this.state.header === "employee"){
			return(
				<header className="component_header">
					<Link to="/">
						<img className="component_header_img" src={logo} alt="logo" />
					</Link>
					<Link to="/contact">
						<p className="component_header_text_right">Contact</p>
					</Link>
					<Link to="/about">
						<p className="component_header_text_right">About</p>
					</Link>
					<Link to="/jobboard">
						<p className="component_header_text_right">Jobs</p>
					</Link>
				</header>
			);
		} 
		else if(this.state.header === "employer"){
			return(
				<header className="component_header">
					<Link to="/">
						<img className="component_header_img" src={logo} alt="logo" />
					</Link>
					<Link to="/contact">
						<p className="component_header_text_right">Contact</p>
					</Link>
					<Link to="/about">
						<p className="component_header_text_right">About</p>
					</Link>
					<Link to="/postjob">
						<p className="component_header_text_right">Post Jobs</p>
					</Link>
				</header>
			);
		}
		else{
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
			);
		}
	}

	render(){
		return(
			<div>
			{this.renderHeader()}
			</div>
		);
	}
}