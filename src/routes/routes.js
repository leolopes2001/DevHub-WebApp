/* eslint-disable no-unused-vars */
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage/index';
import PrivateRoutes from './PrivateRoutes';

import { PersonalData } from '../pages/SettingsPage/PersonalData';
import ResetPassword from '../pages/SettingsPage/ResetPassword/index';
import { ChangeTheme } from '../pages/SettingsPage/ChangeTheme';

const RoutesMain = () => (
  <AnimatePresence>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<HomePage />} />

        <Route path='settings' element={<SettingsPage />}>
          <Route index element={<PersonalData />} />
          <Route path='resetPassoword' element={<ResetPassword />} />
          <Route path='changeTheme' element={<ChangeTheme />} />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Route>

      <Route path='/landingPage' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='*' element={<Navigate to='/landingPage' />} />
    </Routes>
  </AnimatePresence>
);

export default RoutesMain;
