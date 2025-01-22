import {Routes, Route} from 'react-router';
import NotFoundPage from './pages/common/NotFoundPage';
import HomePage from './pages/common/HomePage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
