import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../service/api';

import { iUserData } from '../../service/getDataUser';

import { iDefaultContextProps } from '../../@types/types';
import { iAuthContext, iFormLogin, iFormRegister } from './types';

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

function AuthProvider({ children }: iDefaultContextProps) {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<iUserData>({} as iUserData);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const userToken = window.localStorage.getItem('userToken');

      if (userToken) {
        try {
          api.defaults.headers.authorization = `Bearer ${userToken}`;

          const { data } = await api.get('/profile');

          setUser(data);
          setAuthentication(true);

          switch (pathname) {
            case '/login':
            case '/register':
            case '/landingPage':
              navigate('/');
              break;
            default:
              navigate(pathname || '/');
              break;
          }
        } catch (error) {
          localStorage.clear();
          setAuthentication(false);
          navigate('/landingPage');
        }
      }

      setIsLoading(false);
    })();
  }, []);

  const loginUser: SubmitHandler<iFormLogin> = async (
    formData
  ) => {
    setIsLoading(true);

    try {
      const { data } = await api.post('/sessions', formData);

      localStorage.clear();

      localStorage.setItem('userToken', data.token);
      localStorage.setItem('userId', data.user.id);

      api.defaults.headers.authorization = `Bearer ${data.token}`;

      setUser(data.user);
      setAuthentication(true);

      navigate('/dashboard');
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!');
    } finally {
      setIsLoading(false);
    }
  };

  const registerUser: SubmitHandler<iFormRegister> = async (
    formData
  ) => {
    try {
      await api.post('/users', formData);
      navigate('/login');
      toast.success('Registro realizado com suceeso!');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      } else {
        console.log(err);
      }
    }
  };
  const logout = () => {
    localStorage.clear();
    setAuthentication(false);
    navigate('/landingPage');
  };

  const authContextValue = {
    registerUser,
    loginUser,
    isAuthenticated,
    isLoading,
    user,
    logout,
    setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
