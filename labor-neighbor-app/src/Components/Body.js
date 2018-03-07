import React, { Component } from 'react';
import icon from './dingus.png'

export default class Body extends Component{
	render(){
		return(
			<div className="component_body">
				<div className="component_body_intro">
					<h1> Welcome to Labor Neighbor </h1>
					<div className="component_body_intro_icons">
						<img className="component_body_intro_icons_single" src={icon} alt="work icon" />
						<img className="component_body_intro_icons_single" src={icon} alt="work icon" />
						<img className="component_body_intro_icons_single" src={icon} alt="work icon" />
						<img className="component_body_intro_icons_single" src={icon} alt="work icon" />
					</div>
				</div>
				<div className="component_body_about">
					<h2>Find Small Jobs Faster. Smarter. Easier.</h2>
						<p>A world of small jobs and workers surround you. We’ll help you find them.</p>
						<ul>
							<li>Free Signup</li>
							<li>Fast Connection</li>
							<li>Immediate Payment</li>
						</ul>
						<ul>
							<li>Local Parameters</li>
							<li>On Your Own Time</li>
							<li>Short Term Work</li>
						</ul>
				</div>
			</div>
		);
	}
}