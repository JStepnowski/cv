import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';

const HomePage = () => {
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

  return <div></div>;
};

export default HomePage;
