import React, { Component } from 'react';

export default class Field extends Component{

	render(){

		return(
			<div className="component_field">
				<input className="component_field_box" type="text" placeholder={this.props.name} />
			</div>
		);
	}
}