import dark from '../styles/themes/dark';

type CustomTheme = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
