import React, { Component } from 'react';
import img from './about.jpg';
import icon from './dingus.png';

export default class About extends Component{

	render() {

    	return (
			<div className="component_about">
				<div className="component_about_pic">
					<p className="component_about_header">We Are Labor Neighbor</p>
				</div>
				<div className="component_about_story">
					<p className="component_about_story_header">Our Story</p>
					<p className="component_about_story_body">
						We started Labor Neighbor as a project for our senior capstone class. Lorem Ipsum and all that jazz. Lorem Ipsum and all that jazz. Lorem Ipsum and all that jazz. Lorem Ipsum and all that jazz.
					</p>
				</div>
				<div className="component_about_team">
					<p className="component_about_team_header">Know Your Neighbor</p>
					<div className="component_about_team_member">
						<img src={icon} alt="team member photo" />
						<p className="component_about_team_name">Austin</p>
						<p className="component_about_team_desc">Baller</p>
					</div>
					<div className="component_about_team_member">
						<img src={icon} alt="team member photo" />
						<p className="component_about_team_name">Theresa</p>
						<p className="component_about_team_desc">Shot Caller</p>
					</div>
					<div className="component_about_team_member">
						<img src={icon} alt="team member photo" />
						<p className="component_about_team_name">Cyree</p>
						<p className="component_about_team_desc">Twenty Inch</p>
					</div>
					<div className="component_about_team_member">
						<img src={icon} alt="team member photo" />
						<p className="component_about_team_name">Adam</p>
						<p className="component_about_team_desc">Blades on</p>
					</div>
					<div className="component_about_team_member">
						<img src={icon} alt="team member photo" />
						<p className="component_about_team_name">Alex</p>
						<p className="component_about_team_desc">The Impalla</p>
					</div>
				</div>
			</div>
		);
	}
}