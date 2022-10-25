import { createContext, useContext, useEffect, useState } from 'react';
import { iDefaultContextProps } from '../../@types/types';

import { getDataUser, iTech } from '../../service/getDataUser';

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

  useEffect(() => {
    (async () => {
      try {
        const { techs } = await getDataUser();

        setTechList(techs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
