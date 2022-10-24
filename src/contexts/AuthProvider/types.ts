import { iUserData } from './../../service/getDataUser';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface iFormRegister {
  id:
    | 'name'
    | 'email'
    | 'password'
    | 'bio'
    | 'contact'
    | 'course_module'
    | 'confirmPassword';
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  course_module: string;
  contact: string;
}

export interface iAuthContext {
  loginUser: SubmitHandler<iFormLogin>;
  registerUser: SubmitHandler<iFormRegister>;
  setUser: Dispatch<SetStateAction<iUserData>>;
  logout: () => void;
  user: iUserData;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface iFormLogin {
  email: string;
  password: string;
}
