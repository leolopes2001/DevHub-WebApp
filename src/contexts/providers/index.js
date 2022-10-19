/* eslint-disable react/prop-types */
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../AuthContext';

import { CustomThemeProvider } from '../ThemeProvider';

const Providers = ({ children }) => (
  <BrowserRouter>
    <CustomThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </CustomThemeProvider>
  </BrowserRouter>
);

export default Providers;
