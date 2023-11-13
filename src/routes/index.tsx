import { Route, Routes } from 'react-router-dom';

import { withMainData } from '@/hoc/with-main-data';

import MainRoutes from '@/routes/MainRoutes';
import Auth from '@/routes/Auth';

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<Auth />} />

      <Route path="*" element={<MainRoutes />} />
    </Routes>
  );
};

export default withMainData(IndexRoutes);
