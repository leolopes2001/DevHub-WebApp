/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import dark from '../../styles/themes/dark';
import AuthProvider from '../AuthContext';

const Providers = ({ children }) => (
  <ThemeProvider theme={dark}>
    <AuthProvider>{children}</AuthProvider>
  </ThemeProvider>
);

export default Providers;
