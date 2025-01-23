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

    // Zastosowanie trybu ciemnego lub jasnego na całej stronie
    if (isDarkMode) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className='relative w-full py-6 px-4 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary flex items-center justify-between shadow-md '>
      <div className='flex gap-4 hover:cursor-pointer font-semibold text-primary-foreground'>
        <button className='home hover:scale-125' onClick={() => navigate('/')}>
          <Icon icon={homeSharp} color='white' classCss='w-6 h-6' />
        </button>

        <button
          className='portfolio text-primary-foreground px-4 py-2 rounded-lg transition-all duration-300 bg-transparent hover:bg-accent dark:hover:bg-accent-foreground'
          onClick={() => navigate('/portfolio')}
        >
          Portfolio
        </button>

        <button
          className='portfolio text-primary-foreground px-4 py-2 rounded-lg transition-all duration-300 bg-transparent hover:bg-accent dark:hover:bg-accent-foreground'
          onClick={() => navigate('/cv')}
        >
          CV
        </button>

        <button
          className='contact text-primary-foreground px-4 py-2 rounded-lg transition-all duration-300 bg-transparent hover:bg-accent dark:hover:bg-accent-foreground'
          onClick={() => navigate('/contact')}
        >
          Contact
        </button>
      </div>

      <div className='flex justify-end hover:scale-125'>
        <button className='px-6 text-primary-foreground' onClick={toggleTheme}>
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
