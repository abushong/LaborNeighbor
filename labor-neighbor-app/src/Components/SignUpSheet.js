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
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton"
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
			</div>,
			login: "component_signupsheet_loginbutton",
			signup: "component_signupsheet_signupbutton component_signupsheet_selected"
		 });	
	}

	isLogin = () => {
		this.setState({
			body:
			<div className="component_signupsheet_body">
				<Field name="email" />
				<Field name="password" />
				<Button type="login" text="Log In"/>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton"
		});
	}


	render(){
	
		return(
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
		);
	}
}