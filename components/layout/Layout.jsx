import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Meta from '../Meta';

const Layout = ({ children, title, placeholder }) => {
  return (
    <div className='h-screen'>
      <Meta title={title} />
      {/* Header */}
      <Header placeholder={placeholder} />
      {/* <main className='flex flex-col items-center justify-center min-h-screen py-2'>
      </main> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
