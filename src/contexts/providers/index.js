/* eslint-disable react/prop-types */
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider';

import { CustomThemeProvider } from '../CustomThemeProvider';
import { TechProvider } from '../TechProvider';

const Providers = ({ children }) => (
  <BrowserRouter>
    <CustomThemeProvider>
      <AuthProvider>
        <TechProvider>{children}</TechProvider>
      </AuthProvider>
    </CustomThemeProvider>
  </BrowserRouter>
);

export default Providers;
