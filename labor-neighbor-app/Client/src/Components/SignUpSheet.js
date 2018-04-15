import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Field from "Components/Field.js";
import Button from "Components/Button.js";
import $ from 'jquery';

export default class SignUpSheet extends Component{

	constructor(props){
		super(props);
		this.state = {
			body: 
			<div className="component_signupsheet_body">
				<Field name="email" onUpdate={this.onUpdate}/>
				<Field name="password" onUpdate={this.onUpdate}/>
				<div className="component_signupsheet_submitcontainer">
					<Link to="/jobboard">
					<button className="component_signupsheet_submit">Sign In</button>
					</Link>
				</div>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton component_signupsheet_nonselected",
			first: 'filler',
			last: 'lastfiller',
			email: 'emailfiller',
			password: 'passwordfiller'
		};
		this.addUser = this.addUser.bind(this);
	}

	isSignup = () => {
		this.setState({
			body:
			<div className="component_signupsheet_body">
				<Field name="first name" onUpdate={this.onUpdate}/>
				<Field name="last name" onUpdate={this.onUpdate}/>
				<Field name="email" onUpdate={this.onUpdate}/>
				<Field name="password" onUpdate={this.onUpdate}/>
				<p className="component_signupsheet_position">I would like to:</p>
				<br></br>
				<div className="component_signupsheet_radios">
					<p className="component_signupsheet_radio_left">Find Jobs</p><input type="radio" name="jobs" value="employee"></input>
					<p className="component_signupsheet_radio_right">Post Jobs</p><input type="radio" name="jobs" value="employer"></input>
				</div>
				<div className="component_signupsheet_submitcontainer">
					<Link to="/jobboard">
					<button className="component_signupsheet_submit" onClick={this.addUser}>Sign Up</button>
					</Link>
				</div>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_nonselected",
			signup: "component_signupsheet_signupbutton component_signupsheet_selected"
		 });	
	}

	isLogin = () => {
		this.setState({
			body:
			<div className="component_signupsheet_body">
				<Field name="email" onUpdate={this.onUpdate}/>
				<Field name="password" onUpdate={this.onUpdate}/>
				<div className="component_signupsheet_submitcontainer">
					<Link to="/jobboard">
					<button className="component_signupsheet_submit">Sign In</button>
					</Link>
				</div>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton component_signupsheet_nonselected"
		});
	}

	onUpdate = (val,name) => {
		if(name === "first name"){
			this.setState({
				first: val
			})
		}
		else if(name === "last name"){
			this.setState({
				last: val
			})
		}
		else if(name === "email"){
			this.setState({
				email: val
			})
		}
		else if(name === "password"){
			this.setState({
				password: val
			})
		}
	};

	verifyLogin = () => {
		this.login();
	}

	login = () => {
		//in progress
	}

	addUser = () => {
	    this.addUser2();
	      
  	}
  	addUser2 = () => {
  		var data = {
  			"FirstName" : this.state.first, 
  			"LastName" : this.state.last,
  			"Email" : this.state.email,
  			"Password" : this.state.password
  		};

  		console.log(JSON.stringify(data));

  		var addUser3 = {
	  		"async" : true,
	  		"crossDomain" : true,
	  		"method" : "POST",
	  		"headers": {
    			"Content-Type": "application/json",
    			"Cache-Control": "no-cache",
    			"Postman-Token": "e2846da5-6c79-4c07-ac5e-ef63f5068612"
  			},
	        "url" : 'http://localhost:3000/api/user2',						
	    	"processData" : false,
	    	"data" : JSON.stringify(data)
        }

        $.ajax(addUser3).done(function (response) {
			console.log(response);
		});
  	}
  	
	render(){
	
		return(
			<div className="component_signupsheet_wrapper">
			<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
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