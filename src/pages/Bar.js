import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import { GraphContext } from '../App';
import { Tooltip, BarChart, XAxis, YAxis, CartesianGrid, Legend, Bar, Cell } from 'recharts';

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

function Bar1() {
  const { data, handleDelete } = useContext(DataContext);
  const [showChart, setShowChart] = useState(true);

  const groupedData = groupDataByColumnName(data);
  const combinedData = calculateCollectedValues(groupedData);

  useEffect(() => {
    // Check if there is any data left, and update the chart visibility accordingly
    setShowChart(data.length > 0);
  }, [data]);

  // Function to handle deleting a data point
  const handleDeletePoint = (entry, index) => {
    const newData = data.filter((item) => item.name !== entry.name);
    // Update the shared data state with the new data using the handleDelete function
    handleDelete(newData);
  };

  return (
    <div className="bar">
      {showChart && (
        <BarChart
          width={500}
          height={300}
          data={data}
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
          <Bar dataKey="value" fill="#8884d8">
            {combinedData.map((entry, index) => (
              <Cell key={`cell-${index}`} onClick={() => handleDeletePoint(entry, index)} />
            ))}
          </Bar>
        </BarChart>
      )}
      {!showChart && <div>No data available for Bar1 chart.</div>}
    </div>
  );
}

export default Bar1;



