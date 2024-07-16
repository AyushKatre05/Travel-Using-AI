import React, { createContext, useContext, useState } from 'react';

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [tripData, setTripData] = useState(null);

  const saveTripData = (data) => {
    setTripData(data);
  };

  return (
    <TripContext.Provider value={{ tripData, saveTripData }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => useContext(TripContext);
