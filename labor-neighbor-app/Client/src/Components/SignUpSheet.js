import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Field from "./Field.js";
import Button from "./Button.js";
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
					
					<button className="component_signupsheet_submit" onClick={this.verifyLogin}>Sign In</button>
					
				</div>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton component_signupsheet_nonselected",
			first: 'filler',
			last: 'lastfiller',
			email: 'emailfiller',
			password: 'passwordfiller',
			usertype: 'userfiller'
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
					<p className="component_signupsheet_radio_left">Find Jobs</p><input type="radio" name="jobs" value="employee" checked></input>
					<p className="component_signupsheet_radio_right">Post Jobs</p><input type="radio" name="jobs" value="employer"></input>
				</div>
				<div className="component_signupsheet_submitcontainer">
					
					<button className="component_signupsheet_submit" onClick={this.addUser}>Sign Up</button>
					
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
					<button className="component_signupsheet_submit" onClick={this.verifyLogin}>Sign In</button>
				</div>
			</div>,
			login: "component_signupsheet_loginbutton component_signupsheet_selected",
			signup: "component_signupsheet_signupbutton component_signupsheet_nonselected",
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

	notValid = () => {
		this.setState({
			valid : 'invalid user information'
		});
	}

	login = () => {
		//in progress
		var data = {
			"Email" : this.state.email,
			"Password" : this.state.password
		}

		console.log(JSON.stringify(data));

		var getUserType = {
			"async" : true,
	  		"crossDomain" : true,
	  		"method" : "POST",
	  		"headers": {
    			"Content-Type": "application/json",
    			"Cache-Control": "no-cache",
    			"Postman-Token": "6515d076-4afd-4dd4-b9af-2cd11bfc4012"
  			},
  			"url" : '/api/userType',						
	    	"processData" : false,
	    	"data" : JSON.stringify(data)
		}

		//get type of user from login
		$.ajax(getUserType).done(function (response) {
			console.log("login response: " + response[0].UserType);
			if(response !== 'incorrect'){
				document.cookie="token = abcd1234";
				document.cookie="user = " + response[0].UserType;
			}
			else{
				alert("Invlaid Login Cridentials");
				console.log("invalid");
			}
		});

		var verify = {
			"async" : true,
	  		"crossDomain" : true,
	  		"method" : "POST",
	  		"headers": {
    			"Content-Type": "application/json",
    			"Cache-Control": "no-cache",
    			"Postman-Token": "6515d076-4afd-4dd4-b9af-2cd11bfc4012"
  			},
  			"url" : '/api/login',						
	    	"processData" : false,
	    	"data" : JSON.stringify(data)
		}
		$.ajax(verify).done(function (response) {
			//need to handle this response. Will get key if correct or incorrect if not
			console.log("response: " + response);
			if(response !== 'incorrect'){
				document.cookie="token = abcd1234";
				window.location.assign("http://localhost:5000/jobboard");
			}
			else{
				alert("Invlaid Login Cridentials");
				console.log("invalid");
			}
		});
	}

	addUser = () => {
	    this.addUser2();
  	}

  	addUser2 = () => {
  		var userT = "nothing";
  		var radios = document.getElementsByName('jobs');
  		for(var i=0; i<radios.length; i++){
  			if(radios[i].checked){
  				userT = radios[i].value;
  			}
  		}

  		var data = {
  			"FirstName" : this.state.first, 
  			"LastName" : this.state.last,
  			"Email" : this.state.email,
  			"Password" : this.state.password,
  			"UserType" : userT
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
	        "url" : 'http://localhost:5000/api/user2',						
	    	"processData" : false,
	    	"data" : JSON.stringify(data)
        }

        $.ajax(addUser3).done(function (response) {
        	document.cookie="token = abcd1234";
        	document.cookie="user = " + userT;
        	if(userT === "employer"){
        		window.location.assign("http://localhost:5000/postjob");
        	}
        	else{
        		window.location.assign("http://localhost:5000/jobboard");
        	}
        	console.log(document.cookie);
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