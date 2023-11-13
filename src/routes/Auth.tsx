import { Navigate, Route, Routes } from 'react-router-dom';

import { withUnauthorized } from '@/hoc/with-auth';
import Login from '@/pages/auth/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<Login />} />
      <Route path="*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
};

export default withUnauthorized(AuthRoutes);
