import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to='/landingPage' replace />;
};

export default PrivateRoutes;
