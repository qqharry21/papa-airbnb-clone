import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Meta from '../Meta';

const Layout = ({ children }) => {
  return (
    <div className='h-screen'>
      <Meta />
      {/* Header */}
      <Header />
      {/* <main className='flex flex-col items-center justify-center min-h-screen py-2'> */}
      {children}
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Layout;
