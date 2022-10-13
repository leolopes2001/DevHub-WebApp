import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const PrivateRoutes = () => (
  <AnimatePresence>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </AnimatePresence>
);

export default PrivateRoutes;
