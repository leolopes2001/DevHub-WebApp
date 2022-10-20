/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const PrivateRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  

  if (loading) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to='/landingPage' replace />;
};

export default PrivateRoutes;
