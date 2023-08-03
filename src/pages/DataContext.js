import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [barData, setBarData] = useState([
    { name: "Sony", value: 30 },
    { name: "Microsoft", value: 23 },
    { name: "Nintendo", value: 43 },
  ]);
  const [lineData, setLineData] = useState([
    { name: "Sony", value: 30 },
    { name: "Microsoft", value: 23 },
    { name: "Nintendo", value: 43 },
  ]);

  // Create functions to handle data deletion for each graph
  const handleBarDelete = (newData) => {
    setBarData(newData);
  };
  const handleLineDelete = (newData) => {
    setLineData(newData);
  };

  return (
    <DataContext.Provider value={{ 
      barData, 
      handleBarDelete,
      lineData, 
        handleLineDelete,  
    }}>
      {children}
    </DataContext.Provider>

  );
}

export function useData() {
  return useContext(DataContext);
}

