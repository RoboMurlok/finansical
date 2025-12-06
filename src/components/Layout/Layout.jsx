import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FakeCookieBanner from '../CookieBanner/CookieBanner';
import data from '../../data/data.json';

export default function Layout() {
  useEffect(() => {
    const description = data.meta; // строка из data.json

    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'description';
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', description);
  }, []);

  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
      <FakeCookieBanner />
    </div>
  );
}


