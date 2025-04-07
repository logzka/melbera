import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout relative">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
