/* eslint-disable react/prop-types */

import { useState } from 'react';
import './style.css';

function Switch({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className='toggle-switch'>
      <input type='checkbox' checked={isToggled} onChange={onToggle} />
      <span className='switch' />
    </label>
  );
}
export default Switch;
