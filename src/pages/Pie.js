// Imports---------------------------------------------
import React from 'react'
import './Pie.css'
import { Tooltip, PieChart, Pie } from 'recharts';
// ----------------------------------------------------

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



		  
function Pie1 () {

	// Data for graph----------------------------

	const data = [
		{name: "Sony", value: 30},
		{name: "Microsoft", value: 23},
		{name: "Nintendo", value: 43},
	  ]

	//   --------------------------------------

	//   Values for graph--------------------------
	  const groupedData = groupDataByCloumnName(data);
	  const combinedData = calculateCollectedValues(groupedData)
	// ---------------------------------------------

    return (

		// Graph styling/data connection------------------------

		<div className="Pie">
	
			<PieChart width={500} height={300}>
				<Pie
				dataKey="value"
				isAnimationActive={false}
				data={combinedData}
				cx="50%"
				cy="50%"
				outerRadius={120}
				fill="#8884d8"
				label
				/>
			<Tooltip />
	  		</PieChart>		  
		</div>
	);
		// ------------------------------------------------------

};
		  
export default Pie1
		  