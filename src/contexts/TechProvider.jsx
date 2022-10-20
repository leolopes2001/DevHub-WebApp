/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react';

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);

  const [isActiveModalAdd, setIsActiveModalAdd] = useState(false);

  const [contentModal, setContentModal] = useState(false);

  const techContextValue = {
    techList,
    setIsActiveModalAdd,
    isActiveModalAdd,
    setTechList,
    contentModal,
    setContentModal,
  };

  return (
    <TechContext.Provider value={techContextValue}>
      {children}
    </TechContext.Provider>
  );
};
const useTech = () => useContext(TechContext);

export { TechProvider, useTech };
