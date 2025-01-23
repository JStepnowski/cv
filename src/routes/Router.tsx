import {Route, Routes} from 'react-router';

import Header from '../components/Header';
import HomePage from '../pages/common/HomePage';
import NotFoundPage from '../pages/common/NotFoundPage';
import CV from '../pages/Cv';
import MyCarousel from '../pages/Portfolio';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/portfolio' element={<MyCarousel />} />
        <Route path='/cv' element={<CV />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
