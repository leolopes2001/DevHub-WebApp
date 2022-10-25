import { FaMoon, FaSun } from 'react-icons/fa';

import Switch from './Switch/index';

import { MainStyled } from './style';
import { AnimatePresence, motion } from 'framer-motion';

export const ChangeTheme = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, x: '-03%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '0%' }}
      transition={{ duration: 0.6 }}
    >
      <MainStyled>
        <FaMoon />
        <Switch />
        <FaSun />
      </MainStyled>
    </motion.div>
  </AnimatePresence>
);
