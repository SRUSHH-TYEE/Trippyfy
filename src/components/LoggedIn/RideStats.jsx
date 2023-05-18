import React, { Component } from 'react';
import CanvasJSReact from '../../statsCharts/canvasjs-chart-3.7.6/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart; 

class RideStats extends Component {
	constructor() {
		super();
		this.addSymbols = this.addSymbols.bind(this);
	}
	
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
		
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
 
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;	
	}
	
	render() {	
		const options = {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title: {
				text: "Your Ride Statistics - May 2023"
			},
			axisY: {
				title: "Number of Rides Shared",
				labelFormatter: this.addSymbols,
				scaleBreaks: {
				autoCalculate: true
			}
			},
			axisX: {
				title: "Connected with people",
				labelAngle: 0
			},
			data: [{
				type: "column",
				dataPoints: [
					{ label: "dep1", y: 23},
					{ label: "dep2", y: 45},
					{ label: "dep3", y: 15},
					{ label: "dep4", y: 21},
				]
			}]
		}
						
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	} 			
}

 
export default RideStats;     