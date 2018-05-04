import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');

export default class Footer extends Component{
	
	signOut = () =>{
		document.cookie = "token = ''";
		document.cookie = "user = ''";
		window.location.assign("http://ec2-18-219-101-230.us-east-2.compute.amazonaws.com");
	}

	render(){

		return(
			<footer className="component_footer">
				<div className="component_footer_text">
					<p className="component_footer_text">Find Small Jobs. Fast, smarter, easier. </p>
				 	| <a href="mailto:service@laborneighbor.com">service@laborneighbor.com</a>
				 	| <p className="component_footer_signout" onClick={() => {this.signOut()}}>sign out</p>
				 	<br></br>
				 	<a href="http://www.facebook.com"><FontAwesome className="component_footer_icon" name='fab fa-facebook' /></a>
					<a href="http://www.instagram.com"><FontAwesome className="component_footer_icon" name='fab fa-instagram' /></a>
					<a href="http://www.twitter.com"><FontAwesome className="component_footer_icon" name='fab fa-twitter' /></a>
					<a href="http://www.youtube.com"><FontAwesome className="component_footer_icon" name='fab fa-youtube' /></a>
				</div>
			</footer>
		);
	}
}