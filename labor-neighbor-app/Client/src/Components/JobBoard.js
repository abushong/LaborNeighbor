import React, { Component } from 'react';
import Job from "Components/Job.js";
import MyJobs from "Components/MyJobs.js";
import $ from 'jquery';

export default class JobBoard extends Component{

	constructor(props){
		super(props);
		this.renderJobs = this.renderJobs.bind(this);
		this.getJobs = this.getJobs.bind(this);
	}

	getJobs(){
		var jobList = [];
		var numJobs = 0;

		var jobs = {
		  "async": false,
		  "crossDomain": true,
		  "url": "http://localhost:3000/api/jobs",
		  "method": "GET",
		  "headers": {
		    "Cache-Control": "no-cache",
		    "Postman-Token": "8cc4fbbc-e987-41e3-8f02-b47afb480490"
		  }
		}

		$.ajax(jobs).done((response) => {
		  console.log("jobs: " + response.length);
		  numJobs = response.length;
		  for(var i=0; i<response.length; i++){
		  	jobList.push(response[i]);
		  }
		  //return(this.renderJobs(jobList, numJobs));
		});
		console.log("jskdlfj: " + numJobs);
		var loadJobs = [];
		for(var i=0; i<numJobs; i++){
			loadJobs.push(<Job name={jobList[i].Name} title={jobList[i].Title} laborers={jobList[i].NumLaborers} price={jobList[i].Price} distance="dist" desc={jobList[i].Description} />);
		}
		return loadJobs;
	}


	render(){
		return(
			<div className="component_jobboard">
				<div className="component_jobboard_myjobs">
					<MyJobs />
				</div>
				<div className="component_jobboard_jobs">
					{this.getJobs()}
				</div>
				<div className="component_jobboard_filterjobs">
				
				</div>
			</div>
		);
	}
}