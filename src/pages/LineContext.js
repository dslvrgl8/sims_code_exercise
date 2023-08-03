import React, { createContext, useContext, useState } from 'react';

const LineContext = createContext();

export function LineProvider({ children }) {
  const [lineData, setLineData] = useState([
    { name: "Sony", value: 30 },
    { name: "Microsoft", value: 23 },
    { name: "Nintendo", value: 43 },
  ]);

  const handleLineDelete = (newData) => {
    setLineData(newData);
  };

  return (
    <LineContext.Provider value={{ lineData, handleLineDelete }}>
      {children}
    </LineContext.Provider>
  );
}

export function useLineData() {
  return useContext(LineContext);
}
