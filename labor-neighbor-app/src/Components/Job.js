import React, { Component } from 'react';
import filler from './dingus.png';

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
				<img className="component_job_pic" src={filler} alt="profile picture" />
				<div className="component_job_description">
					Description
				</div>
			</div>
		);
	}
}