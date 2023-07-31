import React from 'react'

import { Tooltip, BarChart, XAxis, YAxis, CartesianGrid, Legend, Bar } from 'recharts';

function groupDataByCloumnName(data) {
	const groupedData = {};
	data.forEach((entry) => {
		const { name, value } = entry;
		if (!groupedData[name]) {
		groupedData[name] = [value];
    	} else {
      		groupedData[name].push(value);
		}
  });
  return groupedData;
}

function calculateCollectedValues(groupedData) {
	const collectedData = [];
	for (const name in groupedData) {
		const collectedValue = groupedData[name].reduce((sum, value) => sum + value, 0);
		collectedData.push({ name, value: collectedValue});
	}
	return collectedData
}

function Scatterplot1() {
	const data = [
		{name: "Facebook", value: 20000000},
		{name: "Facebook", value: 20000000},
		{name: "Instagram", value: 60000000},
		{name: "Twitter", value: 15000000},
		{name: "X", value: 15000000},

	  ]

	  const groupedData = groupDataByCloumnName(data);
	  const combinedData = calculateCollectedValues(groupedData)

    return (
		<div className="scatterplot">
			<BarChart
				width={500}
				height={300}
				data={combinedData}
				margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
				}}
				>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="value" fill="#8884d8" />
			</BarChart>		  
		</div>
	)
}
		  
export default Scatterplot1
		  