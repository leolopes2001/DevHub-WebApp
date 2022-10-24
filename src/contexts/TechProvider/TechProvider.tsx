import { createContext, useContext, useState } from 'react';
import { iDefaultContextProps } from '../../@types/types';

import { iTech } from '../../service/getDataUser';
import { iTechContext } from './type';

const TechContext = createContext<iTechContext>({} as iTechContext);

export interface iContentModal {
  id: string;
  title: string;
  status: string;
}

const TechProvider = ({ children }: iDefaultContextProps) => {
  const [techList, setTechList] = useState<iTech[]>([]);

  const [isActiveModalAdd, setIsActiveModalAdd] = useState(false);

  const [contentModal, setContentModal] = useState<iTech | null>(null);

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
