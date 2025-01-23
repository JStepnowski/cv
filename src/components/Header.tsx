import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';

import {motion} from 'framer-motion';
import Icon from './Icon';

import {homeSharp, moon, sunny} from 'ionicons/icons';

const Header = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Przełączanie motywu
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.toggle('dark');
    } else {
      body.classList.toggle('dark');
    }
  }, [isDarkMode]);

  // TU KURWA WSZYSTKO
  return (
    <header className='relative w-full py-6 px-4 bg-gradient-to-r from-violet-700 to-purple-800 dark:from-violet-950 dark:to-purple-900 justify-between flex items-center shadow-md rounded-b-lg'>
      <div className='flex gap-4 hover:cursor-pointer font-semibold '>
        <button className='home  hover:scale-125' onClick={() => navigate('/homepage')}>
          {!isDarkMode && <Icon icon={homeSharp} color='white' classCss='w-6 h-6' />}
          {isDarkMode && <Icon icon={homeSharp} color='white' classCss='w-6 h-6' />}
        </button>

        <button
          className={`portfolio text-white px-4 py-2 rounded-lg transition-all duration-300 
            bg-transparent hover:bg-purple-600 dark:hover:bg-purple-700`}
          onClick={() => navigate('/portfolio')}
        >
          Portfolio
        </button>
        <button className='cv hover:scale-125 text-white' onClick={() => navigate('/cv')}>
          CV
        </button>
      </div>
      <div className='flex justify-end hover:scale-125'>
        <button className='px-6 text-white' onClick={toggleTheme}>
          {!isDarkMode && (
            <motion.div
              key='sunny'
              initial={{opacity: 0, rotate: -90}}
              animate={{opacity: 1, rotate: 0}}
              exit={{opacity: 0, rotate: 90}}
              transition={{duration: 0.3}}
            >
              <Icon icon={sunny} color='white' classCss='w-6' />
            </motion.div>
          )}
          {isDarkMode && (
            <motion.div
              key='moon'
              initial={{opacity: 0, rotate: -90}}
              animate={{opacity: 1, rotate: 0}}
              exit={{opacity: 0, rotate: 90}}
              transition={{duration: 0.3}}
            >
              <Icon icon={moon} color='white' classCss='w-6' />
            </motion.div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
