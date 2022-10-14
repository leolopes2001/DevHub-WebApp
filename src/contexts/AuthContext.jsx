/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../service/api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = window.localStorage.getItem('userToken');
    const userId = window.localStorage.getItem('userId');

    if (!userToken || !userId) {
      setAuthentication(false);
    } else {

      api.defaults.headers.authorization = `Bearer ${userToken}`
      setAuthentication(true);
    }
  }, []);

  const loginUser = async (formData) => {
    setIsLoading(true);

    
    await api
      .post('/sessions', formData)
      .then((res) => {
        window.localStorage.clear();

        window.localStorage.setItem('userToken', res.data.token);
        window.localStorage.setItem('userId', res.data.user.id);

        api.defaults.headers.authorization = `Bearer ${res.data.token}`
        setUser(res.data.user);
        setAuthentication(true);

        setIsLoading(false);
        navigate('/');
        toast.success('Login realizado com sucesso!');
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Algo deu errado, tente novamente!');
      });
  };

  const registerUser = (formData) => {
    api
      .post('/users', formData)
      .then(() => {
        navigate('/login');
        toast.success('Registro realizado com suceeso!');
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
      });
  };

  const logout = () => {
    window.localStorage.clear();
    setAuthentication(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        isAuthenticated,
        isLoading,
        logout,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



export default AuthProvider;
