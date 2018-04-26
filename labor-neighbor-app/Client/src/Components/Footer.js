import React, { Component } from 'react';

export default class Footer extends Component{
	
	signOut = () =>{
		console.log("ahhhhh");
		document.cookie = "token = ''";
		document.cookie = "user = ''";
		window.location.assign("http://localhost:3000");
	}

	render(){

		return(
			<footer className="component_footer">
			<div className="component_footer_text">
				<p>Find Small Jobs. Fast, smarter, easier. </p>
			 <a href="#"> | service@laborneighbor.com</a>
			 </div>
				<p className="component_footer_text">Find Small Jobs. Fast, smarter, easier. </p>
			 	| <a href="mailto:service@laborneighbor.com">service@laborneighbor.com</a>
			 	<br></br>
			 	<p className="component_footer_signout" onClick={() => {this.signOut()}}>sign out</p>
			</footer>
		);
	}
}