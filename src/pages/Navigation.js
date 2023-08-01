import React, { useState } from 'react';
import './Navigation.css';
import Pie from './Pie';
import Scatterplot from './Scatterplot';
import Line from './Line';

function Navigation() {

	// Admin functionality to turn off buttons-----------
  const [activeChart, setActiveChart] = useState('');
  const [showPieButton] = useState(true);
  const [showScatterplotButton] = useState(true);
  const [showLineButton] = useState(true);
//   ----------------------------------

  const handleButtonClick = (chart) => {
	setActiveChart(chart);
  };

  return (
    <div className="navigation">
      <div>

	  
        {/* Buttons to switch to different graphs */}
        {showPieButton && (
          <button onClick={() => handleButtonClick('Pie')}>Pie Graph</button>
        )}
        {showScatterplotButton && (
          <button onClick={() => handleButtonClick('Scatterplot')}>Scatterplot</button>
        )}
        {showLineButton && (
          <button onClick={() => handleButtonClick('Line')}>Line Graph</button>
        )}
      </div>


      {/* Render active chart based on state */}
      {activeChart === 'Pie' && <Pie />}
      {activeChart === 'Scatterplot' && <Scatterplot />}
      {activeChart === 'Line' && <Line />}
    </div>
  );
}

export default Navigation;

		  