import React, { Component } from 'react';
import Filters from './Filters/Filters.js';
import RoomList from './RoomList/RoomList';
import Api from '../../Api.js';
import DateSelector from './DatePicker/DatePicker.js';
import { Container, Row, Col } from 'react-grid-system';
import Style from './SearchRoom.scss'

class SearchRooms extends Component {
	constructor(props) {
		super (props); 
		this.state ={
			data: [], 
			available: false, 
			name: '',
			date: new Date()
		}
	}

	updateFilters = (name , value) => {
		//update filters 
   		this.setState({...this.state, [name]: value}, this.updateData(name));
   		console.log(value);
	}

	getData = () => {
		//make a call to server to get data
		Api.getRooms({date: this.state.available ? 'now' : this.state.date.getTime()}).then(result => {
			this.setState({
				data: JSON.parse(result)
			});
			console.log(result)
		});
	}
	
	updateData = (changedFilter) => {
		if (changedFilter === 'date' || changedFilter === 'available' ) {
   			this.getData();
   		};
	}

	componentDidMount() {
		this.getData();
	}

	render (){

		//filtering results by room name 
		var	data = this.state.data.filter((room)=>{
			if(room.name.toLowerCase().indexOf(this.state.name.toLowerCase().replace('room ', '')) !== -1) {
					return room;
			};
		});
			
		return (
			<Container className={Style.pageContainer}>
			  <Row className={Style.border}>
			    <Col sm={4}>
			      	
			    </Col>
			    <Col sm={4}>
			      	<DateSelector value={this.state.date} setDate={this.updateFilters} className={Style.dateBox}/>
			    </Col>
			    <Col sm={4}>
			      
			    </Col>
		      </Row>
		      <Row className={Style.border} style={{paddingBottom: '10px'}}>
			    <Col sm={12}>
			    	<Filters roomName={this.state.name} availability={this.state.available} setFilters={this.updateFilters} className={Style.filterBox}/>
			    </Col>
			  </Row>
			  <Row className={Style.border}>
			   
			    	<RoomList data={data}/>
			    
		      </Row>
		    </Container>
			)
	}
}

export default SearchRooms;