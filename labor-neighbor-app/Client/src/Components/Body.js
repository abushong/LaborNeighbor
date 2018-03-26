import React, { Component } from 'react';
import icon from './dingus.png'
import img1 from './signup.png'
import img2 from './fast.png'
import img3 from './money.png'
import img4 from './map.png'
import img5 from './clock.png'
import img6 from './screwdriver.png'


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
						<img src={img1} alt="Who we help" />
					</div>
					<div className="component_body_whowehelp_persona2">
					<img src={img1} alt="Who we help" />
					</div>
				</div>
				<div className="component_body_completing">
					<h2>Tasks Your Neighbors are Completing Now</h2>
					<ul>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
					</ul>
					<ul>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
					</ul>
					<ul>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
						<li>
						<img src={icon} />
						Task
						</li>
					</ul>

				</div>

			</div>
		);
	}
}