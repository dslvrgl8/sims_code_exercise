import React, { useState } from 'react';
import './Navigation.css';
import Pie from './Pie';
import Scatterplot from './Scatterplot';
import Line from './Line';
import Bar from './Bar';

function Navigation() {
  const [activeChart, setActiveChart] = useState('');
  const [selectedGraph, setSelectedGraph] = useState('');
  const [showPieButton, setShowPieButton] = useState(true);
  const [showScatterplotButton, setShowScatterplotButton] = useState(true);
  const [showLineButton, setShowLineButton] = useState(true);
  const [showBarButton, setShowBarButton] = useState(true);

  const handleGraphSelection = (event) => {
    const selectedGraph = event.target.value;
    setSelectedGraph(selectedGraph);
    setActiveChart(selectedGraph); // Immediately set the active chart
    setShowPieButton(selectedGraph === 'Pie'); // Hide other graph options
    setShowScatterplotButton(selectedGraph === 'Scatterplot');
    setShowLineButton(selectedGraph === 'Line');
    setShowBarButton(selectedGraph === 'Bar');
  };

  const handleBackButtonClick = () => {
    setSelectedGraph(''); // Clear the selected graph
    setShowPieButton(true); // Show all graph options again
    setShowScatterplotButton(true);
    setShowLineButton(true);
    setShowBarButton(true);
    setActiveChart(''); // Reset the active chart
  };

  return (
    <div className="navigation">
      <div>
        {/* Control which graphs are visible */}
        {showPieButton && (
          <button value="Pie" onClick={handleGraphSelection}>
            Pie Graph
          </button>
        )}
        {showScatterplotButton && (
          <button value="Scatterplot" onClick={handleGraphSelection}>
            Scatterplot
          </button>
        )}
        {showLineButton && (
          <button value="Line" onClick={handleGraphSelection}>
            Line Graph
          </button>
        )}
        {showBarButton && (
          <button value="Bar" onClick={handleGraphSelection}>
            Bar Graph
          </button>
        )}

        {/* Render active chart based on state */}
        {activeChart === 'Pie' && <Pie />}
        {activeChart === 'Scatterplot' && <Scatterplot />}
        {activeChart === 'Line' && <Line />}
        {activeChart === 'Bar' && <Bar />}

        {/* Back button to reset visibility */}
        {selectedGraph && <button onClick={handleBackButtonClick}>Back</button>}
      </div>
    </div>
  );
}

export default Navigation;


		  