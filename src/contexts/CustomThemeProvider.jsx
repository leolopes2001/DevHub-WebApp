/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const ThemeContext = createContext({});

const CustomThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(() =>
    savedTheme === 'dark' ? dark : light
  );

  const toggleTheme = useCallback(() => {
    theme.name === 'dark'
      ? setTheme(() => {
          localStorage.setItem('theme', 'light');
          return light;
        })
      : setTheme(() => {
          localStorage.setItem('theme', 'dark');
          return dark;
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
