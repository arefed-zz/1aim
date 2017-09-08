import React, { Component } from 'react';
import Style from './TimeBar.scss';


const totalMinutes = 13 * 60 ; 
const timeBarStart = 7 *60; 
const timeLabels = ['07:00', '08:00', '09:00', '10:00','11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '07:00', '19:00']; 


class TimeBar extends Component {


	render (){
		var t, start, end, width, left 
		var data = this.props.data.map((time) => {
			t=time.split(' - ');
			start = t[0].split(':');
			end = t[1].split(':');
			return {
				startMinute: Number(start[0]) * 60 + Number(start[1]),
				endMinute: Number(end[0]) * 60 + Number(end[1])
			}
		});

		var availableSlots = data.map((d) => {
			width = ((d.endMinute - d.startMinute) / totalMinutes) * 100;
			left = ((d.startMinute - timeBarStart )/ totalMinutes) * 100
			return <div key={d.startMinute} style= {{position: 'absolute', height:'10px', width: width + '%', backgroundColor:'green', left: left + '%'}}>
			</div>
		});

		var labels = timeLabels.map((l, i) => {
			left = ((i*60)/ totalMinutes ) *100 ;
			return <span key={i} style= {{position: 'absolute', left: left + '%', top: '12px', fontSize: 'x-small'}}>{l}</span>
		}); 

		var tiks = timeLabels.map((l, i) => {
			left = ((i*60)/ totalMinutes ) *100;
			return <div key={i} style= {{position: 'absolute', left: left + '%', backgroundColor: 'white', width: '1px', height:'10px'}}></div>
		}); 


		return (
			<div className={Style.timeBar}>
				{availableSlots}
				{labels}
				{tiks}
			</div>
			)
	}
}

export default TimeBar;