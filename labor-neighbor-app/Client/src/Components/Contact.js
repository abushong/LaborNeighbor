import React, { Component } from 'react';
export default class Contact extends Component{
	render(){
		return(
		<div className="component_contact">
    <h2>Contact</h2>
    <p>Whether it is a problem with your work transaction or just a few questions about our service, we are always here to help! Please
    fill out the form to leave your message and a member of our team will reach out to you as soon as possible.</p>
      <form>

        <label for="fname">First Name</label>
        <input type="text" idName="fname" name="firstname" placeholder="First Name" />

        <label for="lname">Last Name</label>
        <input type="text" idName="lname" name="lastname" placeholder="Last Name" />
        <label for="lname">Email Address</label>
        <input type="text" idName="email" name="email" placeholder="Email" />
        <label for="helpcategory">What can we help you with?</label>
        <select idName="helpcategory" name="helpcategory">
          <option value="general information">General Information</option>
          <option value="website troubleshooting">Website Troubleshooting</option>
          <option value="payment problems">Payment Problem</option>
          <option value="task completion problems">Task Completion Problem</option>
          <option value="other">Other</option>
        </select>

        <label for="subject">Message</label>
        <textarea idName="subject" name="subject" placeholder="How can we help?"></textarea>

        <input type="submit" value="Submit" />

      </form>
    </div>
		);
	}
}