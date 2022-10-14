import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/globalStyle';
import 'react-toastify/dist/ReactToastify.min.css';
import { useAuth } from './contexts/AuthContext';

import PublicRoutes from './routes/publicRoutes';
import PrivateRoutes from './routes/privateRoutes';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      <GlobalStyle />
      <ToastContainer
        position='top-right'
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
