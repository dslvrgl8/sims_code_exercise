import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import { Tooltip, LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from 'recharts';

function groupDataByColumnName(data) {
	if (!data) {
	  return {};
	}
  
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
	  collectedData.push({ name, value: collectedValue });
	}
	return collectedData;
  }

  function Line1() {
	// Local data for the Line chart
	const [data, setData] = useState([
	  { name: "Sony", value: 30 },
	  { name: "Microsoft", value: 23 },
	  { name: "Nintendo", value: 43 },
	  // Add more data points as needed
	]);
  
	const [showChart, setShowChart] = useState(true);
	const { data1, handleDelete } = useContext(DataContext);
  
	const groupedData = groupDataByColumnName(data);
	const combinedData = calculateCollectedValues(groupedData);
  
	useEffect(() => {
	  // Check if there is any data left, and update the chart visibility accordingly
	  setShowChart(data.length > 0);
	}, [data]);
  
	// Function to handle deleting a data point
	const handleDeletePoint = (entry, index) => {
	  const newData = data1.filter((item) => item.name !== entry.name);
	  setData(newData);
	};
  
	return (
	  <div className="line">
		{showChart && (
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
			<Legend />
			<Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
		  </LineChart>
		)}
		{!showChart && <div>No data available for Line1 chart.</div>}
	  </div>
	);
  }
  
  export default Line1;
  
  
  
  
  

		  