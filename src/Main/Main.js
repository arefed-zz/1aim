import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import SearchRooms from './SearchRooms/SearchRooms.js';

class Main extends Component {
	
	render (){
		return (
			<main>
			    <Switch>
			      <Route exact path='/' component={SearchRooms}/>
			    </Switch>
		  	</main>)
	}
}

export default Main;