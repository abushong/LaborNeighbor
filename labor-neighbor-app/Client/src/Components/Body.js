import React, { Component } from 'react';
import icon from './dingus.png'
import img1 from './signup.png'
import img2 from './fast.png'
import img3 from './money.png'
import img4 from './map.png'
import img5 from './clock.png'
import img6 from './screwdriver.png'
import img7 from './employer.jpg'
import img8 from './Cassi19.jpg'


export default class Body extends Component{
	render(){
		return(
			<div className="component_body">
				<div className="component_body_about">
				<div className="component_body_about_welcome">
						<h1>Welcome to Labor Neighbor</h1>
						<h3>Find Small Jobs. Faster. Smarter. Easier.</h3>
					</div>
				</div>
				<div className="component_body_whatwedo">
					<h2>What We Do</h2>
					<div className="component_whatwedo_tasks">
						<img src={img1} alt="Signup" />
						<p className="component_body_whatwedo_info">Free Signup</p>
					</div>
					<div className="component_whatwedo_tasks">
						<img src={img6} alt="Work" />
						<p className="component_body_whatwedo_info">Short Term Work</p>
					</div>
					<div className="component_whatwedo_tasks">
						<img src={img2} alt="Connect" />
						<p className="component_body_whatwedo_info">Fast Connection</p>
					</div>
					<div className="component_whatwedo_tasks">
						<img src={img3} alt="Pay" />
						<p className="component_body_whatwedo_info">Immediate Payment</p>
					</div>
					<div className="component_whatwedo_tasks">
						<img src={img4} alt="Local" />
						<p className="component_body_whatwedo_info">Local Parameters</p>
					</div>
				</div>
				<div className="component_body_whowehelp">
					<h2>Who We Help</h2>
				<div className="component_body_whowehelp_persona1">
  				<img src={img7} alt="Persona1" />
  				<p>John and Lisa</p>
  				<p>"We used Labor Neighbor to find a dog sitter at a week's notice. Finding someone to help was quick and the work done was exceptional. 
  				It is so nice to be able to find reliable help at the click of a button!"</p>
				</div>

				<div className="component_body_whowehelp_persona2">
  				<img src={img8} alt="Persona2" />
  				<p>Cassi</p>
  				<p>"I use Labor Neighbor as a way to get some extra money when I'm home on breaks from college. With so many choices of ways to help, there is
  				always a job I am interested in doing. Labor Neighbor allows me to earn money without the long term commitment of a job."</p>
				</div>
				</div>
				<div className="component_body_completing">
					<h2>Tasks Your Neighbors are Completing Now</h2>
					<ul>
						<li>
						Lawn Mowing
						</li>
						<li>
						Gardening
						</li>
						<li>
						Leave Raking
						</li>
						<li>
						Shoveling
						</li>
					</ul>
					<ul>
						<li>
						Junk Removal
						</li>
						<li>
						House Cleaning
						</li>
						<li>
						Pool Cleaning
						</li>
						<li>
						Car Wash
						</li>
					</ul>
					<ul>
						<li>
						Furniture Assembly
						</li>
						<li>
						Moving
						</li>
						<li>
						Computer Help
						</li>
						<li>
						And many more...
						</li>
					</ul>
				</div>
				

			</div>
		);
	}
}