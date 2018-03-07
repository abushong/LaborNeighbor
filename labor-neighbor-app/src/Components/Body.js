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
			</div>
		);
	}
}