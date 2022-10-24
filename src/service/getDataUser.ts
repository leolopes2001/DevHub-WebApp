import api from './api';

export interface iTech {
  id: string;
  title: string;
  status: string;
}

export interface iUserData {
  id: string;
  name: string;
  bio: string;
  course_module: string;
  contact: string;
  email: string;
  techs: iTech[];
}

export const getDataUser = async (): Promise<iUserData> => {
  const { data } = await api.get<iUserData>('/profile');

  return data;
};
