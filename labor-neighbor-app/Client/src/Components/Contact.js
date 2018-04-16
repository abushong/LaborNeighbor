import React, { Component } from 'react';

export default class Footer extends Component{
	render(){
		return(
		<div className="component_contact">
  <form>

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First Name" />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last Name" />

    <label for="country">What can we help you with?</label>
    <select id="country" name="country">
      <option value="general information">General Information</option>
      <option value="website troubleshooting">Website Troubleshooting</option>
      <option value="payment problems">Payment Problem</option>
      <option value="task completion problems">Task Completion Problem</option>
    </select>

    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit" />

  </form>
</div>
		);
	}
}