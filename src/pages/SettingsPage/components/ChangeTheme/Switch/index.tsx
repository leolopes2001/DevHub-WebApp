
import { useTheme } from '../../../../../contexts/CustomThemeProvider/CustomThemeProvider';
import './style.css';

function Switch() {
  const { toggleTheme, theme } = useTheme();

  return (
    <label className='toggle-switch'>
      <input
        type='checkbox'
        checked={theme.name === 'light'}
        onChange={toggleTheme}
      />
      <span className='switch' />
    </label>
  );
}
export default Switch;
