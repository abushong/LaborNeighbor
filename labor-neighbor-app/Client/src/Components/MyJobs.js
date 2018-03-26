import React, { Component } from 'react';

export default class MyJobs extends Component{

	render() {

    	return (
			<div className="component_myjobs">
				<div className="component_myjobs_title">
					<h3>My Jobs</h3>
					<div className="component_myjobs_break">.</div>
					<p>You curretnly have no jobs.</p>
				</div>
			</div>
		);
	}
}