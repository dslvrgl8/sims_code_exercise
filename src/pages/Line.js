// Imports
import React from 'react'
import './Line.css'
import { Tooltip, LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
// --------------------------------------------------------------------------------

// Functions for setting up up new entries on the graph and adding to already existing data sources-----

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
// --------------------------------------------------

function Line1() {

	// Data for graph----------------------------
	const data = [
		{name: "Nintendo", value: 43},
		{name: "Microsoft", value: 23},
		{name: "Sony", value: 30},
	  ];
	//   --------------------------------------

	//   Values for graph--------------------------
	  const groupedData = groupDataByCloumnName(data);
	  const combinedData = calculateCollectedValues(groupedData)
	// ---------------------------------------------
    return (

		// Graph styling/data connection------------------------

		<div className="line">
			<LineChart
				width={510}
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
				<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
			</LineChart>		  
					  
		</div>
	);
		// ------------------------------------------------------
};
		  
export default Line1
		  