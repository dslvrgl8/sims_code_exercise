import React, { useState } from 'react';
import './App.css';
import Navigation from './pages/Navigation';
import AdminPanel from './pages/Admin';
import { LineProvider } from './pages/LineContext'; // Step 1: Import LineProvider
import Line1 from './pages/Line'; // Step 1: Import Line1

// Create a new DataContext using React.createContext
export const DataContext = React.createContext();

function App() {
  // Initial data state
  const initialData = [
    { name: "Sony", value: 30 },
    { name: "Microsoft", value: 23 },
    { name: "Nintendo", value: 43 },
  ];

  // State to hold the data
  const [data, setData] = useState(initialData);

  // Function to handle deleting a data point
  const handleDelete = (newData) => {
    setData(newData);
  };

  return (
    // Provide the data state and handleDelete function to the children using the DataContext.Provider
    <DataContext.Provider value={{ data, handleDelete }}>
      <LineProvider> {/* Step 2: Add LineProvider */}
        <div className="App">
          <h1>Years Spent Making Games</h1>
          <Navigation />
          <AdminPanel />
        </div>
      </LineProvider> {/* Step 2: Close LineProvider */}
    </DataContext.Provider>
  );
}

export default App;

