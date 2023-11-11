/* eslint-disable no-undef */
import { ComponentType } from 'react';

// import useAuth from '@/hooks/use-auth';

export function withAuthorized<T extends JSX.IntrinsicAttributes>(
  Content: ComponentType<T>,
): ComponentType<T> {
  return function AuthorizedContent(props) {
    // const { isAuthenticated } = useAuth();

    // if (!isAuthenticated) return <Navigate to="/auth/signin" />;

    return <Content {...props} />;
  };
}

export function withUnauthorized<T extends JSX.IntrinsicAttributes>(
  Content: ComponentType<T>,
): ComponentType<T> {
  return function UnauthorizedContent(props) {
    // const { isAuthenticated } = useAuth();

    // if (isAuthenticated) return <Navigate to="/dashboard" />;

    return <Content {...props} />;
  };
}