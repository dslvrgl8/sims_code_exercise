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

function Bar1() {
	const data = [
		{name: "Nintendo", value: 43},
		{name: "Microsoft", value: 23},
		{name: "Sony", value: 30},

	  ]

	  const groupedData = groupDataByCloumnName(data);
	  const combinedData = calculateCollectedValues(groupedData)

    return (
		<div className="bar">
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

export default Bar1