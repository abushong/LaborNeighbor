import React, { Component } from 'react';

export default class Field extends Component{
	constructor(props){
		super(props);
		this.state = {value: ''};
	}

	update = (event) => {
		this.props.onUpdate(event.target.value, this.props.name);
		this.setState({value: event.target.value});
	};

	render(){

		return(
			<div className="component_field">
				<input className="component_field_box" value={this.state.value} onChange={this.update} type="text" placeholder={this.props.name} />
			</div>
		);
	}
}