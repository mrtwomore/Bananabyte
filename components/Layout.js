import Head from 'next/head';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
} 