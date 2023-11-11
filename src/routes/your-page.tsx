
import { Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import { withUnauthorized } from '@/hoc/with-auth';
import YourPage from '@/pages/YourPage';

const SignageRoutes = () => {
  return (
    <Layout>
      <Routes>
        {/* Your pages here */}
        <Route path="/" element={<YourPage />} />
      </Routes>
    </Layout>
  );
};

export default withUnauthorized(SignageRoutes);