/* eslint-disable react/prop-types */
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import dark from '../../styles/themes/dark';
import { AuthProvider } from '../AuthContext';

const Providers = ({ children }) => (
  <BrowserRouter>

    <ThemeProvider theme={dark}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>

  </BrowserRouter>
);

export default Providers;
