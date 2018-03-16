import React, { Component } from 'react';

export default class Job extends Component{

	render() {

    	return (
			<div className="component_job">
				<h3 className="component_job_title">Job Title</h3>
				<div className="component_job_details">
					<p>Laborers:</p>
					<p>Description:</p>
					<p>Price</p>
				</div>
			</div>
		);
	}
}