import { iTech } from './../../service/getDataUser';
import { SetStateAction, Dispatch } from 'react';

export interface iTechContext {
  setTechList: Dispatch<SetStateAction<iTech[]>>;
  setContentModal: Dispatch<SetStateAction<iTech | null>>;
  setIsActiveModalAdd: Dispatch<SetStateAction<boolean>>;
  techList: iTech[];
  isActiveModalAdd: boolean;
  contentModal: iTech | null;
}
