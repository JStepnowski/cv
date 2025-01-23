import {Route, Routes} from 'react-router';

import Header from '../components/Header';
import CV from '../pages/common/Cv';
import HomePage from '../pages/common/HomePage';
import NotFoundPage from '../pages/common/NotFoundPage';
import ContactPage from '../pages/ContactPage';
import MyCarousel from '../pages/Portfolio';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<MyCarousel />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
