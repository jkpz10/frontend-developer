import { Route, Routes } from 'react-router-dom';

import { withMainData } from '@/hoc/with-main-data';

import Auth from '@/routes/auth';
import MainRoutes from '@/routes/MainRoutes';

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route path="*" element={<MainRoutes />} />
    </Routes>
  );
};

export default withMainData(IndexRoutes);
