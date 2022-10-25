import { iDefaultContextProps } from '../../@types/types';
import { useAuth } from '../../contexts/AuthProvider/AuthProvider';
import { LoadingBackground } from './LoadingBackground/LoadingBackground';

export const GlobalLoading = ({ children }: iDefaultContextProps) => {
  const { isLoading } = useAuth();
  return <>{isLoading ? <LoadingBackground /> : <>{children}</>}</>;
};
