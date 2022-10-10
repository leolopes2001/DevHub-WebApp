import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes';
import dark from './styles/themes/dark';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => (
  <ThemeProvider theme={dark}>
    <Routes />
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
  </ThemeProvider>
);

export default App;
