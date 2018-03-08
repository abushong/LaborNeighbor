import React, { Component } from 'react';
import Field from "Components/Field.js";

export default class SignUpSheet extends Component{
	render(){
		return(
			<div className="component_signupsheet">
				<div className="component_signupsheet_logo" >
					<img src="" alt="logo" />
				</div>
				<Field name="test" />
				<Field name="testy" />
			</div>
		);
	}
}