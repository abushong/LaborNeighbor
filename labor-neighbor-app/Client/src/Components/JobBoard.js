import React, { Component } from 'react';
import Job from "Components/Job.js";
import MyJobs from "Components/MyJobs.js";

export default class JobBoard extends Component{
	
	render(){
		
		return(
			<div className="component_jobboard">
				<div className="component_jobboard_myjobs">
					<MyJobs />
				</div>
				<div className="component_jobboard_jobs">
					<Job name="Tony Longsandles" title="Lawn mowing" desc="Mow my big ass lawn" laborers="1" price="$10/hr" distance="4.3 miles"/>
					<Job name="Jim" title="Do my laundry" />
				</div>
			</div>
		);
	}
}