import React, { Component } from 'react';
import img from './about.jpg';
import icon from './dingus.png';
import adam from './AdamLN.jpg';
import alex from './AlexLN.jpg';
import austin from './AustinLN.jpg';
import cyree from './CyreeLN.jpg';
import luke from './LukeLN.jpg';
import tree from './TheresaLN (1).jpg';

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
						We started Labor Neighbor as a project for our senior capstone class. As college students, 
						we were looking for a reliable way to find short term work and make extra money during
						breaks from school while being able to help out members of our community. Labor Neighbor 
						connects college aged individuals seeking short term work with members of their 
						communities or the surrounding areas who are in need of labor assistance. With the click 
						of a button, we will connect you to small jobs and workers in your surrounding area. From 
						there, you decided when the work will be completed. Not only do you get the job done, but 
						now have a new connection for future short term work opportunities all through Labor Neighbor.
					</p>
				</div>
				<div className="component_about_team">
					<p className="component_about_team_header">Know Your Neighbor</p>
					<div className="component_about_team_member">
						<img src={tree} alt="team member photo" />
						<p className="component_about_team_name">Theresa</p>
						<p className="component_about_team_desc">Project Manager</p>
					</div>
					<div className="component_about_team_member">
						<img src={luke} alt="team member photo" />
						<p className="component_about_team_name">Luke</p>
						<p className="component_about_team_desc">Creative Designer</p>
					</div>
					<div className="component_about_team_member">
						<img src={austin} alt="team member photo" />
						<p className="component_about_team_name">Austin</p>
						<p className="component_about_team_desc">Research Analyst</p>
					</div>
					<div className="component_about_team_member">
						<img src={cyree} alt="team member photo" />
						<p className="component_about_team_name">Cyree</p>
						<p className="component_about_team_desc">Marketing Specialist</p>
					</div>
					<div className="component_about_team_member">
						<img src={adam} alt="team member photo" />
						<p className="component_about_team_name">Adam</p>
						<p className="component_about_team_desc">Web Designer & Copywriter</p>
					</div>
					<div className="component_about_team_member">
						<img src={alex} alt="team member photo" />
						<p className="component_about_team_name">Alex</p>
						<p className="component_about_team_desc">Lead Developer</p>
					</div>
				</div>
			</div>
		);
	}
}