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
					</div>
				</div>
				<div className="component_body_whatwedo">
					<h2>What We Do</h2>
					<h4>Find Small Jobs Faster. Smarter. Easier.</h4>
						<ul>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img1} alt="work icon" />
								<p>Free Signup</p>
							</li>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img2} alt="work icon" />
								<p>Fast Connection</p>
							</li>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img3} alt="work icon" />
								<p>Immediate Payment</p>
							</li>
	
							<li>
								<img className="component_body_whatwedo_icons_single" src={img4} alt="work icon" />
								<p>Local Parameters</p>
							</li>
							<li>
							<img className="component_body_whatwedo_icons_single" src={img5} alt="work icon" />
							<p>On Your Own Time</p>
							</li>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img6} alt="work icon" />
								<p>Short Term Work</p>
							</li>
						</ul>
				</div>
				<div className="component_body_whowehelp">
					<h2>Who We Help</h2>
				</div>

			</div>
		);
	}
}