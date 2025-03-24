import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/HeroCarousel.module.css';

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images from the public/images/hero directory
  const images = [
    '/images/hero/_DSC4181.jpg',
    '/images/hero/LEL_headshots 5.JPG',
    '/images/hero/Still 2024-07-17 191245_1.3.1.JPG',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroBackground}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.heroImageContainer} ${
            index === currentImageIndex ? styles.active : ''
          }`}
        >
          <Image
            src={src}
            alt={`Hero image ${index + 1}`}
            className={styles.heroImage}
            width={1920}
            height={1080}
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel; 