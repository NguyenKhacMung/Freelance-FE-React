import React from 'react'
import './style.scss'
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from '..';

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;