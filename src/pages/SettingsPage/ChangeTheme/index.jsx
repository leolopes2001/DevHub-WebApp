import { FaMoon, FaSun } from 'react-icons/fa';

import React from 'react';

import Switch from './Switch/index';

import { MainStyled } from './style';

export const ChangeTheme = () => (
  <MainStyled>
    <FaMoon />  
    <Switch />
    <FaSun />
  </MainStyled>
);
