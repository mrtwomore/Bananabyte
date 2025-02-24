import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.logo}>Banana Byte</span>
      </Link>

      {isMobile ? (
        <>
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/services" onClick={toggleMenu}>Services</Link>
            <Link href="/work" onClick={toggleMenu}>Work</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        </>
      ) : (
        <div className={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 