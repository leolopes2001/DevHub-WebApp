import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const PublicRoutes = () => (
  <AnimatePresence>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </AnimatePresence>
);

export default PublicRoutes;
