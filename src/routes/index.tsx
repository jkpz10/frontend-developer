import { Route, Routes } from 'react-router-dom';

import { withMainData } from '@/hoc/with-main-data';

import YourPageRoutes from './your-page';
import ErrorNotFound from '@/pages/404';

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<YourPageRoutes />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

export default withMainData(IndexRoutes);
