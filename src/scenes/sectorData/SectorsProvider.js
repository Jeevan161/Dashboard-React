// src/scenes/sectorData/SectorsProvider.js

import React, { createContext, useState, useEffect } from 'react';

export const SectorsContext = createContext();

export const SectorsProvider = ({ children }) => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://financialmodelingprep.com/api/v3/sectors-performance?apikey=BiZQbMgRKLsT0gmMR0ajnIv8OGLGsagz');
        const data = await response.json();
        const formattedData = data.map((item, index) => ({
          id: index + 1,
          sector: item.sector,
          changesPercentage: item.changesPercentage,
        }));
        setSectors(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SectorsContext.Provider value={sectors}>
      {children}
    </SectorsContext.Provider>
  );
};
