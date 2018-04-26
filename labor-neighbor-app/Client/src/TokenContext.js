import React, { createContext, Component } from 'react';

export default class TokenContext extends Component{

	state = {
		token: "nottoken"
	};

	render(){
		return(
			<TokenContext.Provider value={this.state}></TokenContext.Provider>
		);
	}	

}