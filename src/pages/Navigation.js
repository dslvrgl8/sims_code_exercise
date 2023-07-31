import React, {useState} from 'react'
import './Navigation.css'
import Pie from './Pie'
import Scatterplot from './Scatterplot'
import Line from './Line'
		  
function Navigation() {
	const [activeChart, setActiveChart]	= useState('Pie')	

	const handleButtonClick = (chart) => {
		setActiveChart(chart);
	}
    return (
		<div className="navigation">
			<div>
				<button onClick={() => handleButtonClick('Pie')}>Pie Graph</button>
				<button onClick={() => handleButtonClick('Scatterplot')}>Scatterplot</button>
				<button onClick={() => handleButtonClick('Line')}>Line Graph</button>
			</div>
			{activeChart === 'Pie' ? <Pie /> : null}
			{activeChart === 'Scatterplot' ? <Scatterplot /> : null}  
			{activeChart === 'Line' ? <Line /> : null}   
		</div>
	);
};
		  
export default Navigation
		  