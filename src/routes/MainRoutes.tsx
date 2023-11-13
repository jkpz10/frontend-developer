import { Route, Routes } from 'react-router-dom';

import { withAuthorized } from '@/hoc/with-auth';
import ErrorNotFound from '@/pages/404';

import Home from '@/pages/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

export default withAuthorized(MainRoutes);
