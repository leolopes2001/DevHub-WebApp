/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';

const Authenticator = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userToken = window.localStorage.getItem('userToken');
    const userId = window.localStorage.getItem('userId');

    if (!userToken || !userId) {
      setAuthentication(false);
    } else {
      setAuthentication(true);
    }
  }, [user]);

  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route
            path='login'
            element={
              <LoginPage
                setUser={setUser}
                setAuthentication={setAuthentication}
              />
            }
          />
          <Route path='register' element={<RegisterPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <Routes>
        <Route
          path='/'
          element={<HomePage setAuthentication={setAuthentication} />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Authenticator;
