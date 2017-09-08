import React, { Component } from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';

class DateSelector extends Component {

	constructor(props) {
		super (props); 
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (item, value) => {
		
	    this.props.setDate(item, value);
	};
		
	render() {
		return <DatePicker
			          label=''
			          onChange={this.handleChange.bind(this, 'date')}
			          value={this.props.value}
			          sundayFirstDayOfWeek
			        />;
		}	
}

export default DateSelector;
