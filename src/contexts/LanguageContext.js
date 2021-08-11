import React, { useReducer,useState, createContext } from 'react';


export const LaunguageContext = createContext();

export const LaunguageContextProvider = props => {
  const [language, setLanguage] = useState({language:"CA"});

  return (
    <LaunguageContext.Provider value={{language, setLanguage}}>
      {props.children}
    </LaunguageContext.Provider>
  );
};
