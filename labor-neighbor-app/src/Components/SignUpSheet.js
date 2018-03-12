import React, { Component } from 'react';
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
				<Button type="login" text="Log In"/>
			</div>
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
				<Button type="signup" text="Sign Up"/>
			</div>
		 });	
	}

	isLogin = () => {
		this.setState({body:
			<div className="component_signupsheet_body">
				<Field name="email" />
				<Field name="password" />
				<Button type="login" text="Log In"/>
			</div>
		});
	}


	render(){
	
		return(
			<div className="component_signupsheet">
				<div className="component_signupsheet_header" >
					<div onClick={this.isLogin} className="component_signupsheet_loginbutton">
					Login
					</div>
					<div onClick={this.isSignup} className="component_signupsheet_signupbutton">
					Sign Up
					</div>
				</div>
				{this.state.body}
			</div>
		);
	}
}