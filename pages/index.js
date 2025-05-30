import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>Banana Byte | Professional Digital Content Creation in Christchurch, NZ</title>
        <meta name="description" content="Transform your brand with professional digital content creation in Christchurch. Photography, videography, AI solutions, and website content that tells your unique story." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />
        <section className={styles.hero}>
          <HeroCarousel />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Crafting Digital Stories That Make Your Brand Stand Out
            </h1>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Discover Banana Byte</h2>
            <div className={styles.textSection}>
              <div className={styles.textBlock}>
                <h3>Your Digital Story Partner</h3>
                <p>
                  From our creative hub in Christchurch, New Zealand, we transform 
                  businesses through compelling digital content. Our expertise spans 
                  from stunning photography and engaging videos to innovative AI solutions, 
                  all designed to make your brand unforgettable in the digital landscape.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h3>Why Choose Us</h3>
                <p>
                  We specialise in helping Kiwi businesses stand out in the digital world. 
                  Our approach combines creative excellence with strategic thinking, 
                  ensuring every piece of content we create not only looks exceptional 
                  but also drives real business results. Whether you're a startup or an 
                  established brand, we'll help you tell your story in a way that resonates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Expert Digital Solutions</h2>
            <div className={styles.imageGrid}>
              <Link href="/work?category=photo&project=Brand Photography Package" className={styles.imageCardLink}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/Website images/Corporate_website_content_1.JPG"
                    alt="Professional corporate website photography"
                    width={600}
                    height={400}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3>Website Photography</h3>
                    <p>Elevate your online presence with professional, brand-aligned photography that captures your true identity.</p>
                  </div>
                </div>
              </Link>
              <Link href="/work?category=photo&project=Product Photography Campaign" className={styles.imageCardLink}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/Website images/Lifestyle_photography_business_christchurch.jpg"
                    alt="Product photography for e-commerce and marketing"
                    width={600}
                    height={400}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3>Product Photography</h3>
                    <p>Showcase your products with stunning visuals that drive engagement and boost conversions.</p>
                  </div>
                </div>
              </Link>
              <Link href="/work?category=video&project=Digital Induction Transformation" className={styles.imageCardLink}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/Website images/Kings_electrical_banner.jpg"
                    alt="Professional industrial photography and videography"
                    width={600}
                    height={400}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3>Video Production</h3>
                    <p>Tell your story through compelling video content that resonates with your audience and showcases your brand.</p>
                  </div>
                </div>
              </Link>
              <Link href="/work?category=photo&project=Brand Photography Package" className={styles.imageCardLink}>
                <div className={styles.imageCard}>
                  <Image
                    src="/images/Website images/Yoga_lifestyle_2.JPG"
                    alt="Lifestyle photography services"
                    width={600}
                    height={400}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}>
                    <h3>Lifestyle Content</h3>
                    <p>Create authentic lifestyle content that connects with your audience and brings your brand to life.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Start Your Journey</h2>
            <div className={styles.textSection}>
              <div className={styles.textBlock}>
                <h3>Proudly based in Christchurch</h3>
                <p>
                  New Zealand's Garden City
                </p>
              </div>
              <div className={styles.textBlock}>
                <h3>Transform Your Brand</h3>
                <p>
                  Ready to elevate your digital presence? Let's collaborate to create 
                  content that not only captures attention but drives meaningful 
                  engagement with your audience. Book a consultation today and discover 
                  how we can bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerColumn}>
            <h4>Connect With Us</h4>
            <p>Start a conversation</p>
            <Link href="/contact" className={styles.footerLink}>ese@bananabyte.co.nz</Link>
          </div>
          <div className={styles.footerColumn}>
            <h4>Visit Us</h4>
            <p>Christchurch Central</p>
            <p>Canterbury, New Zealand</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Social Media</h4>
            <a href="https://instagram.com/Bananabyte" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
            <a href="https://linkedin.com/in/esekia-perelini" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            <a href="https://github.com/mrtwomore_" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
          </div>
          <div className={styles.footerColumn}>
            <h4>Our Solutions</h4>
            <Link href="/services" className={styles.footerLink}>Website Photography</Link>
            <Link href="/services" className={styles.footerLink}>Product Photography</Link>
            <Link href="/services" className={styles.footerLink}>AI Solutions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}