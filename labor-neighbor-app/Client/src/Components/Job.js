import React, { Component } from 'react';
import filler from './dingus.png';
var FontAwesome = require('react-fontawesome');

export default class Job extends Component{

	render() {

    	return (
			<div className="component_job">
				<h3 className="component_job_title">{this.props.title}</h3>
				<div className="component_job_details">
					<p className="component_job_details_category">Laborers: {this.props.laborers}</p>
					<p className="component_job_details_category">Price: {this.props.price}</p>
					<p className="component_job_details_category ">Location: {this.props.distance}</p>

				</div>
				<div className="component_job_user">
					<img className="component_job_pic" src={filler} alt="profile picture" />
					<div className="component_job_container">
						<h4 className="component_job_name">{this.props.name}</h4>
						<FontAwesome className="component_job_star" name='fas fa-star' />
						<FontAwesome className="component_job_star" name='far fa-star' />
						<FontAwesome className="component_job_star" name='star' />
						<FontAwesome className="component_job_star" name='far fa-star' />
						<FontAwesome className="component_job_star" name='star' />
					</div>
				</div>
				<div className="component_job_description">
					<p className="component_job_distance">Description: {this.props.desc}</p>
					<a href="mailto:ab017@lvc.edu"><FontAwesome name='envelope' className="component_job_envelope" size="2x"/></a>
				</div>
			</div>
		);
	}
}