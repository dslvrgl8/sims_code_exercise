// Imports----------------------------------------
import React from 'react'

import { Tooltip, ScatterChart, XAxis, YAxis, CartesianGrid, Scatter, Legend } from 'recharts';
// -----------------------------------------------


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


function Scatterplot1() {

	// Data for graph----------------------------

	const data = [
		{name: "Sony", value: 30},
		{name: "Microsoft", value: 23},
		{name: "Nintendo", value: 43},
		{name: "Nintendo", value: 100},
	  ]

	//   --------------------------------------


	//   Values for graph--------------------------
	  
	  const groupedData = groupDataByCloumnName(data);
	  const combinedData = calculateCollectedValues(groupedData)

	//   --------------------------------------


    return (

		// Graph styling/data connection------------------------

		<div className="scatterplot">
		<ScatterChart
        width={600}
        height={300}
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
        <Scatter data={combinedData} fill="#8884d8" line shape="cross" dataKey="value" />
      </ScatterChart>	  
		</div>
	);
		// ------------------------------------------------------

};
		  
export default Scatterplot1
		  