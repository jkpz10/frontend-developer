import { useLoginMutation } from '@/store/features/api/api-slice';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const isAuthenticated = Cookies.get('token');

  const [doLogin, { data, isSuccess }] = useLoginMutation();

  const doLogout = () => {
    Cookies.remove('token');
    navigate('/auth/signin');
  };

  useEffect(() => {
    if (data && isSuccess) {
      console.log({ data, isSuccess });

      Cookies.set('token', data);
      navigate('/');
    }
  }, [data, isSuccess]);

  return { doLogin, doLogout, isAuthenticated };
};
