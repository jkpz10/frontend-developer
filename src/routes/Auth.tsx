import { Navigate, Route, Routes } from 'react-router-dom';

import { withUnauthorized } from '@/hoc/with-auth';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<div />} />
      <Route path="*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
};

export default withUnauthorized(AuthRoutes);
