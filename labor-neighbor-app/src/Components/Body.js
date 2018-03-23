import React, { Component } from 'react';
import icon from './dingus.png'
import img1 from './signup.png'
import img2 from './fast.png'
import img3 from './money.png'
import img4 from './map.png'
import img5 from './clock.png'
import img6 from './screwdriver.png'
import img7 from './service2.jpg'


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
					<h2>What we do</h2>
					<h4>Find Small Jobs Faster. Smarter. Easier.</h4>
						<ul>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img1} alt="work icon" />
								Free Signup</li>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img2} alt="work icon" />
								Fast Connection</li>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img3} alt="work icon" />
								Immediate Payment</li>
	
							<li>
								<img className="component_body_whatwedo_icons_single" src={img4} alt="work icon" />
								Local Parameters</li>
							<li><img className="component_body_whatwedo_icons_single" src={img5} alt="work icon" />
							On Your Own Time</li>
							<li>
								<img className="component_body_whatwedo_icons_single" src={img6} alt="work icon" />
								Short Term Work</li>
						</ul>
				</div>
				<div className="component_body_whowehelp">
					<h2>Who We Help</h2>
				</div>

			</div>
		);
	}
}