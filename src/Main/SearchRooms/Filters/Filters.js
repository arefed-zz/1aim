import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';
import { Container, Row, Col } from 'react-grid-system';
import Style from './Filters.scss';

class Filters extends Component {

	handleChange = (name, value) => {
    	this.props.setFilters(name, value);
  	};

	render (){

		return (
			<Container>
				<Row>
					<Col sm={6}>
						<Input type='text' 
							label='Search Rooms by Name' 
							name='roomName' value={this.props.roomName} 
							onChange={this.handleChange.bind(this, 'name')} 
							maxLength={16} 
							style={{borderBottom: '1px solid #D3D3D3'}}/> 
			        </Col>
			        <Col sm={6}>
			        	<Checkbox
				          checked={this.props.availability}
				          label="Available now"
				          onChange={this.handleChange.bind(this, 'available')}
				          className={Style.margin}
			        	/>
			        </Col>
				</Row>
			</Container>
			)
	}
}

export default Filters;