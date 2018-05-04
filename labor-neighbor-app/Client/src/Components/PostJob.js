import React, { Component } from 'react';
import Field from "./Field.js";
import MyJobs from "./MyJobs.js";
import $ from 'jquery';

export default class PostJob extends Component{

	constructor(props){
		super(props);
		this.state = {
			jobname: 'jobname filler',
			numlaborers: 'numlaborers filler',
			skills: 'skills filler',
			location: 'location, filler',
			wage: 'wage',
			description: 'description filler',
			posted: false
		}
	}

	handlePost = () =>{
		if(this.state.posted === false){
			this.setState({
				posted : true
			});
		}
		else{
			this.setState({
				posted : false
			});
		}
		
	}

	renderPost(){
		if(this.state.posted === false){
			return(
				<div className="component_postjob_wrapper">
				<div className="component_postjob_myjobs">
					<MyJobs />
				</div>
				<div className="component_postjob_extra">
					<div className="component_postjob">
						<p className="component_postjob_title">Post a Job</p>
						<div className="component_postjob_field">
							<Field name="Name of Job" onUpdate={this.onUpdate}/>
						</div>
						<div className="component_postjob_field">
							<Field className="component_postjob_field" name="Skills Required" onUpdate={this.onUpdate}/>
						</div>
						<div className="component_postjob_field">
							<Field className="component_postjob_field" name="Location" onUpdate={this.onUpdate}/>
						</div>
						<div className="component_postjob_field">
							<Field className="component_postjob_field" name="Category" onUpdate={this.onUpdate}/>
						</div>
						<div className="component_postjob_drop">
							Number of Laborers
							<select className="component_postjob_drop_size" name="Number Of Laborers">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
							</select>
						</div>
						<div className="component_postjob_drop">
							Wage Per Hour<br></br>
							$<input className="component_postjob_date_size" type="number" placeholder="7.00" min="7" max="30" step=".01" onUpdate={this.onUpdate}/>
						</div>
						<div className="component_postjob_date">
							Start Date
							<br></br>
							<input className="component_postjob_date_size" type="date" name="Start Date"/>
						</div>
						<div className="component_postjob_text">
							<textarea className="component_postjob_text_size" name="Description" placeholder="Job Description" rows="4" cols="30" maxLength="144">
							</textarea>
						</div>
						<div className="component_postjob_button">
							<button onClick={() => {this.handlePost()}} className="component_postjob_submit">Post Job</button>
						</div>
					</div>
				</div>
			</div>
			);
		}
		else{
			return(
				<div className="component_postjob_wrapper">
					<div className="component_postjob_extra">
						<div className="component_postjob_myjobs submitted">
							<MyJobs />
						</div>
						<div className="component_postjob submitted">
							<div className="component_postjob_submitted">
								<p className="component_postjob_another_title">
									Thank you for posting a job!
								</p>
								<div className="component_postjob_button">
									<button onClick={() => {this.postJob()}} className="component_postjob_submit again">Post Another Job</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}

	onUpdate = (val,name) => {
		if(name === "Name of Job"){
			this.setState({
				jobname: val
			})
		}
		else if(name === "Number of Laborers"){
			this.setState({
				numlaborers: val
			})
		}
		else if(name === "Skills Required"){
			this.setState({
				skills: val
			})
		}
		else if(name === "Location"){
			this.setState({
				location: val
			})
		}
		else if(name === "Wage"){
			this.setState({
				wage: val
			})
		}
		else if(name === "Description"){
			this.setState({
				description: val
			})
		}
	};

	postJob = () =>{

		if(this.state.posted === false){
			this.setState({
				posted : true
			});
		}
		else{
			this.setState({
				posted : false
			});
		}

		var numL = 1;
		var e = document.getElementsByName('Number Of Laborers');
		numL = e.options[e.selectedIndex].value;

		var data = {
  			"Title" : this.state.jobname, 
  			"NumLaborers" : numL,
  			"Price" : this.state.wage,
  			"Location" : this.state.password,
  			"Name" : "Mike Williams",
  			"Description" : this.state.description
  		};

  		var addJob = {
	  		"async" : true,
	  		"crossDomain" : true,
	  		"method" : "POST",
	  		"headers": {
    			"Content-Type": "application/json",
    			"Cache-Control": "no-cache",
    			"Postman-Token": "e2846da5-6c79-4c07-ac5e-ef63f5068612"
  			},
	        "url" : '/api/postjob',						
	    	"processData" : false,
	    	"data" : JSON.stringify(data)
        }

        $.ajax(addJob).done(function (response) {
			console.log(response);
		});
	}

	render(){
		return(
			<div>
				{this.renderPost()}
			</div>
		);
	}
}