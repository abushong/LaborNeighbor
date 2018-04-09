import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Field from "Components/Field.js";
import Button from "Components/Button.js";

export default class SignUpSheet extends Component{
	constructor(props){
		super(props);
		this.state = {
			body: 
			<div className="component_signupsheet_body">
				<Field name="email" />
				<Field name="password" />
				<Link to="/jobboard">
					<Button type="login" text="Log In"/>
				</Link>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton component_signupsheet_nonselected"
		}
	}

	isSignup = () => {
		this.setState({
			body:
			<div className="component_signupsheet_body">
				<Field name="first name" />
				<Field name="last name" />
				<Field name="email" />
				<Field name="password" />
				<p className="component_signupsheet_position">I would like to:</p>
				<br></br>
				<div className="component_signupsheet_radios">
					<p className="component_signupsheet_radio_left">Find Jobs</p><input type="radio" name="jobs" value="employee"></input>
					<p className="component_signupsheet_radio_right">Post Jobs</p><input type="radio" name="jobs" value="employer"></input>
				</div>
				<Link to="/jobboard">
					<Button type="signup" text="Sign Up"/>
				</Link>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_nonselected",
			signup: "component_signupsheet_signupbutton component_signupsheet_selected"
		 });	
	}

	isLogin = () => {
		this.setState({
			body:
			<div className="component_signupsheet_body">
				<Field name="email" />
				<Field name="password" />
				<Link to="/jobboard">
					<Button type="login" text="Log In"/>
				</Link>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton component_signupsheet_nonselected"
		});
	}


	render(){
	
		return(
			<div className="component_signupsheet_wrapper">
				<div className="component_signupsheet">
					<div className="component_signupsheet_header" >
						<div onClick={this.isLogin} className={this.state.login}>
						Login
						</div>
						<div onClick={this.isSignup} className={this.state.signup}>
						Sign Up
						</div>
					</div>
					{this.state.body}
				</div>
			</div>
		);
	}
}