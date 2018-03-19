import React, { Component } from 'react';
import filler from './dingus.png';
var FontAwesome = require('react-fontawesome');

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
				<div className="component_job_user">
					<h4>Username</h4>
				</div>
				<div className="component_job_description">
					<p>Distance to job</p>
					<FontAwesome name='envelope' className="component_job_envelope" size="2x"/>
				</div>
			</div>
		);
	}
}