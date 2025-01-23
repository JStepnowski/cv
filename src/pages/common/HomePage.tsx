import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';

import {motion} from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='min-h-screen bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary py-12 px-6 flex flex-col items-center justify-start'>
      {}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.2}}
        className='text-center mb-14'
      >
        <motion.h1
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1, delay: 0.4}}
          className='text-5xl font-extrabold text-primary-foreground mb-4 text-shadow'
        >
          Witaj na mojej stronie!
        </motion.h1>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.6}}
          className='text-lg text-primary-foreground font-light text-shadow'
        >
          Nazywam się Jakub Stepnowski. Jako pasjonat cyberbezpieczeństwa i technologii, tworzę
          przestrzeń do dzielenia się swoimi projektami oraz celami zawodowymi.
        </motion.p>
      </motion.div>

      {}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.8}}
      >
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, delay: 1}}
          className='bg-card p-8 rounded-lg shadow-lg bg-opacity-80'
        >
          <h2 className='text-3xl font-semibold mb-4 text-primary-foreground text-shadow'>
            Kim jestem?
          </h2>
          <p className='text-lg mb-4 text-primary-foreground text-shadow'>
            Jestem studentem Bezpieczeństwa Wewnętrznego, specjalizującym się w
            Cyberbezpieczeństwie. Moje zainteresowania obejmują programowanie, design i tworzenie
            aplikacji mobilnych.
          </p>
          <p className='text-lg text-primary-foreground text-shadow'>
            Dążę do zdobycia doświadczenia w dziedzinie IT, aby stać się ekspertem w zapewnianiu
            bezpieczeństwa cyfrowego. Dodatkowo, przez pewien czas zajmowałem się grafiką
            komputerową oraz projektowaniem UI/UX, co pozwala mi lepiej rozumieć potrzeby
            użytkowników oraz tworzyć estetyczne i funkcjonalne interfejsy.
          </p>
        </motion.div>

        <motion.div
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, delay: 1.2}}
          className='bg-card p-8 rounded-lg shadow-lg bg-opacity-80'
        >
          <h2 className='text-3xl font-semibold mb-4 text-primary-foreground text-shadow'>
            Moje umiejętności
          </h2>
          <ul className='list-disc pl-6 text-lg text-primary-foreground text-shadow'>
            <li>Cyberbezpieczeństwo i zarządzanie ryzykiem</li>
            <li>Programowanie (Python, JavaScript, HTML, CSS)</li>
            <li>Tworzenie aplikacji mobilnych (Flutter, React Native)</li>
            <li>Analiza i reagowanie na incydenty bezpieczeństwa</li>
            <li>Grafika komputerowa i projektowanie UI/UX</li>
            <li>Tworzenie interfejsów użytkownika z naciskiem na użyteczność i estetykę</li>
          </ul>
        </motion.div>
      </motion.div>

      {}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 1.6}}
        className='text-center mb-16'
      >
        <motion.h2
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1, delay: 1.8}}
          className='text-3xl font-semibold text-primary-foreground mb-6 text-shadow'
        >
          Cel tej strony
        </motion.h2>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 2}}
          className='text-lg max-w-3xl mx-auto text-primary-foreground text-shadow'
        >
          Ta strona ma na celu prezentowanie moich umiejętności, projektów oraz umożliwienie
          kontaktu z osobami, które podzielają moje pasje związane z IT, cyberbezpieczeństwem oraz
          designem. Chciałem stworzyć przestrzeń, gdzie mogę dzielić się moimi osiągnięciami i
          przyszłymi celami zawodowymi.
        </motion.p>
      </motion.div>

      {}
      <motion.div
        className='flex flex-col items-center gap-6'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 2.2}}
      >
        <motion.a
          href='#portfolio'
          className='px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition-all dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary dark:hover:text-white border-2 border-transparent dark:border-primary'
          whileHover={{scale: 1.05}}
        >
          Zobacz moje Portfolio
        </motion.a>
        <motion.a
          href='#contact'
          className='px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition-all dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary dark:hover:text-white border-2 border-transparent dark:border-primary'
          whileHover={{scale: 1.05}}
        >
          Skontaktuj się ze mną
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HomePage;
