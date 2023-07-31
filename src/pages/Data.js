import React from 'react'
import './Data.css'
		  
function Data() {
	const data = [
		{name: "Facebook", value: 20000000},
		{name: "Instagram", value: 60000000},
		{name: "Twitter", value: 15000000},
	  ]
    return (
		<div className="data">
		<h1>Website Statistics</h1>
		<table>
		  <thead>
			<tr>
			  <th>Name</th>
			  <th>Value</th>
			</tr>
		  </thead>
		  <tbody>
			{data.map((item, index) => (
			  <tr key={index}>
				<td>{item.name}</td>
				<td>{item.value}</td>
			  </tr>
			))}
		  </tbody>
		</table>
		</div>
	)
}
		  
export default Data
		  