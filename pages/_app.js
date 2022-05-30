import '../styles/globals.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React from 'react';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 2,
  color: '#FE595E',
  className: 'z-80',
  delay: 100,
});

Router.events.on('routeChangeStart', () => {
  progress.start();
});
Router.events.on('routeChangeComplete', () => {
  progress.finish();
});
Router.events.on('routeChangeError', () => {
  progress.finish();
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
