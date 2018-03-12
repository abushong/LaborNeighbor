import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SignUpSheet from "Components/SignUpSheet.js";

import App from "./App.js";

export default(
	<Route path="/" component={App}>
		<Route exact path="/" component={App} />
		<Route path="./Components/SignUpSheet.js" component={SignUpSheet} />
	</Route>
);