import React from 'react';
import {Line} from 'react-chartjs-2'

const data = {
	labels: ['Mar 1', 'Mar 3', 'Mar 5',
           'Mar 7', 'Mar 9','Mar 11','Mar 13'],
  datasets: [
    {
			data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
			label: "My First dataset",
      fill: true,
      backgroundColor: 'rgb(126,172,223)',
      borderColor: 'rgb(19,70,195',
      pointBorderColor: 'rgb(19,70,195)',
      pointBackgroundColor: "rgb(22,94,206)",
      pointRadius: 4, 
      borderWidth: 3,
      pointHitRadius: 10,
		}
  ]
}


export const AreaChart = () => {
	return (
		<Line
			data={data}
		/>
	)
}