import React, { Component } from 'react';

export default class Field extends Component{
	render(){

		return(
			<div className="component_field">
				<input type="text" placeholder={this.props.name} >
			</div>
		);
	}
}