import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{height: '100vh'}}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;