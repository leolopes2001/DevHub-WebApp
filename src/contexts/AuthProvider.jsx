/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../service/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
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
          setUser(null);
          setAuthentication(false);
          navigate('/landingPage');
        }
      }

      setIsLoading(false);
    })();
  }, []);

  const loginUser = async (formData) => {
    setIsLoading(true);

    try {
      const { data } = await api.post('/sessions', formData);

      window.localStorage.clear();

      window.localStorage.setItem('userToken', data.token);
      window.localStorage.setItem('userId', data.user.id);

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

  const registerUser = async (formData) => {
    try {
      await api.post('/users', formData);
      navigate('/login');
      toast.success('Registro realizado com suceeso!');
    } catch (error) {
      toast.error(error);
    }
  };

  const logout = () => {
    window.localStorage.clear();
    setAuthentication(false);
    navigate('/landingPage');
  };

  const authContextValue = {
    registerUser,
    loginUser,
    isAuthenticated,
    isLoading,
    logout,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
