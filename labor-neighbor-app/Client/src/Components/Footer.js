import React, { Component } from 'react';

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
				 	<FontAwesome className="component_footer_icon" name='fab fa-facebook' />
					<FontAwesome className="component_footer_icon" name='far fa-star' />
					<FontAwesome className="component_footer_icon" name='star' />
					<FontAwesome className="component_footer_icon" name='far fa-star' />
				</div>
			</footer>
		);
	}
}