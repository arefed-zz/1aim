import React, { Component } from 'react';
import { List, ListItem } from 'react-toolbox/lib/list';
import Style from './RoomList.scss';
import { Container, Row, Col} from 'react-grid-system';
import Api from '../../../Api.js';
import TimeBar from '../TimeBar/TimeBar';

class RoomList extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {expanded: null};
	    this.handleExpand = this.handleExpand.bind(this);
	  }

	handleExpand = (i) => {
		this.setState ({
		  expanded: this.state.expanded === i ? -1 : i //-1 is to indicate no item is expanded
		});
	}

	createImageList = (images) => {
		var imageList =  images.map((img) => {
				return <Col sm={4} key={img}><img src={Api.getBaseUrl()+ '/' + img} alt={img} className={Style.image}/></Col>
			});
	 
		return <Row> 
					<h5>images:</h5>
					{imageList}
				</Row>
	}

	createEquipmentList = (equips) => {
		var equipmentList =  equips.map((eq) => {
			
				return <li key={eq}>
							{eq}
						</li>
			});
	 
		return <Row> 
				<h5>Equipments:</h5>
				<Col sm={12}>
					<ul>{equipmentList}</ul>
				</Col>
			</Row>
	}
		
	render () {

		let rooms = this.props.data; 
		let roomsListItems = rooms.map((room, i) => {
			return <Container key={i} className={Style.listItem + ' ' + (this.state.expanded===i ? Style.expanded : null)} onClick={() => this.handleExpand(i)}>
						<Row>
							<ListItem	
						      caption={'Room ' + room.name}
						      legend={room.location + ',  Capacity: ' + room.capacity + ', Size: ' + room.size}
						      rightIcon='expand'
				    		/>
			    		</Row>
			    		
			    		<Row className={Style.listItemExtend} style={{ padding:'15px', display: this.state.expanded === i ? 'block' : 'none'}}>
			    			<Row>
			    				<Col sm={11} style={{paddingBottom: '20px'}}>
			    					<TimeBar data={room.avail}/>
		    					</Col>
			    			</Row>
			    			<Row style={{ marginRight: 'auto', marginLeft: 'auto'}}>
				    			<Col sm={6}>{this.createEquipmentList(room.equipment)}</Col>
				    			<Col sm={6}>{this.createImageList(room.images)}</Col>
			    			</Row>
			    		</Row>
			    	</Container>
			    	
		});

		return (
			
			<List selectable ripple className={Style.list}>
				{roomsListItems}
			</List>
			
			)
		}
}

export default RoomList;