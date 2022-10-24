import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { iDefaultContextProps } from '../../@types/types';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { iTheme, iThemeContext } from './types';

const ThemeContext = createContext<iThemeContext>({} as iThemeContext);

const CustomThemeProvider = ({ children }: iDefaultContextProps) => {
  const [theme, setTheme] = useState<iTheme>(dark);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      setTheme(dark);
    } else {
      setTheme(() => {
        return savedTheme === 'dark' ? dark : light;
      });
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(({ name }) => {
      if (name === 'dark') {
        localStorage.setItem('theme', 'light');
        return light;
      } else {
        localStorage.setItem('theme', 'dark');
        return dark;
      }
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, CustomThemeProvider };
