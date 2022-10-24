import { BrowserRouter } from 'react-router-dom';
import { iDefaultContextProps } from '../@types/types';
import { AuthProvider } from './AuthProvider/AuthProvider';
import { CustomThemeProvider } from './CustomThemeProvider/CustomThemeProvider';
import { TechProvider } from './TechProvider/TechProvider';



const Providers = ({ children }:iDefaultContextProps) => (
  <BrowserRouter>
    <CustomThemeProvider>
      <AuthProvider>
        <TechProvider>{children}</TechProvider>
      </AuthProvider>
    </CustomThemeProvider>
  </BrowserRouter>
);

export default Providers;
