import { createContext, useContext, useState } from "react";

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState({
    activePage: 0,
  });

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
