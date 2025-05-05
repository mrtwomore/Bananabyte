import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.logo}>Banana Byte</span>
      </Link>

      {isMobile ? (
        <>
          <div className={styles.mobileControls}>
            <button 
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/services" onClick={toggleMenu}>Services</Link>
            <Link href="/work" onClick={toggleMenu}>Work</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            <Link href="/personal-training" onClick={toggleMenu}>Personal Training</Link>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/personal-training">Personal Training</Link>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 