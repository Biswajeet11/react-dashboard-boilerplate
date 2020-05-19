import React from 'react';
import  {Bar} from 'react-chartjs-2';

const data = {
	labels: ['January', 'February', 'March',
           'April', 'May','June'],
  datasets: [
    {
      backgroundColor: 'rgb(24,94,206)',
      data: [4215, 5312, 6251, 7841, 9821, 14984]
    }
  ]
}

export const BarChart = () => {
	return (
		<div>
      <Bar
        data={data}
        />
			</div>
	)
}