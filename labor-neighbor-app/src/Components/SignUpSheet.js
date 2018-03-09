import React, { Component } from 'react';
import Field from "Components/Field.js";

export default class SignUpSheet extends Component{
	render(){

	let body = 
		<div>
			<Field name="email" />
			<Field name="password" />
		</div>;
	
	function isSignup(e){
		body = 
			<div>
				<Field name="first name" />
				<Field name="last name" />
				<Field name="email" />
				<Field name="password" />
			</div>;
	}

	function isLogin(e){
		body =
			<div>
				<Field name="email" />
				<Field name="password" />;
			</div>;
	}

		return(
			<div className="component_signupsheet">
				<div className="component_signupsheet_header" >
					<div onClick={isLogin} className="component_signupsheet_loginbutton">
					login
					</div>
					<div onClick={isSignup} className="component_signupsheet_signupbutton">
					signup
					</div>
				</div>
				{body}
			</div>
		);
	}
}