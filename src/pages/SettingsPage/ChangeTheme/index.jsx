import { FaMoon, FaSun } from 'react-icons/fa';

import React, { useState } from 'react';

import Switch from './Switch/index';

import { TitleStyled } from '../../../components/generics/Title';

export const ChangeTheme = () => {
  const [theme, setTheme] = useState('dark');

  console.log(theme);

  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <main>
      <FaSun />
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <FaMoon />
      <TitleStyled variant='title1' tag='h1'>
        Em dessenvolvimento
      </TitleStyled>
    </main>
  );
};
