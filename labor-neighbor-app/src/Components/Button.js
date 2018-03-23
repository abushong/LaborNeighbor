import React, { Component } from 'react';

export default class Button extends Component{

	render(){

		return(
			<div className="component_button_container">
				<button className="component_button" type="button">{this.props.text}</button>
			</div>
		);
	}
}