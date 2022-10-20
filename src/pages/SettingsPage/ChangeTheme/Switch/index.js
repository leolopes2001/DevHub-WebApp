/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */

import { useTheme } from '../../../../contexts/CustomThemeProvider';
import './style.css';

function Switch() {
  const { toggleTheme, theme } = useTheme();

  return (
    <label className='toggle-switch'>
      <input
        type='checkbox'
        checked={theme.name === 'dark'}
        onChange={toggleTheme}
      />
      <span className='switch' />
    </label>
  );
}
export default Switch;
