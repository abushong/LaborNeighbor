import React, { Component } from 'react';
import Field from "Components/Field.js";

export default class SignUpSheet extends Component{
	constructor(props){
		super(props);
		this.state = {
			body: 
			<div>
				<Field name="email" />
				<Field name="password" />
			</div>
			}
	}

	render(){
	
	/*function isSignup(e){
		this.setState({state.body:
			<div>
				<Field name="first name" />
				<Field name="last name" />
				<Field name="email" />
				<Field name="password" />
			</div>
		 });	
	}

	function isLogin(e){
		body =
			<div>
				<Field name="email" />
				<Field name="password" />;
			</div>;
	}*/

		return(
			<div className="component_signupsheet">
				<div className="component_signupsheet_header" >
					<div  className="component_signupsheet_loginbutton">
					login
					</div>
					<div  className="component_signupsheet_signupbutton">
					signup
					</div>
				</div>
				{this.state.body}
			</div>
		);
	}
}