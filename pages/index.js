import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';

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
          <div className={styles.heroBackground}>
            <Image
              src="/images/_DSC4181.jpg"
              alt="Charming street view in Aix-en-Provence"
              className={styles.heroImage}
              width={1920}
              height={1080}
              priority
              quality={85}
            />
          </div>
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
                  We specialize in helping Kiwi businesses stand out in the digital world. 
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
              <div className={styles.imageCard}>
                <Image
                  src="/images/dish1.jpg"
                  alt="Professional website photography services"
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3>Website Photography</h3>
                  <p>Elevate your online presence with professional, brand-aligned photography that captures your true identity.</p>
                </div>
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/images/dish2.jpg"
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
              <div className={styles.imageCard}>
                <Image
                  src="/images/dish3.jpg"
                  alt="AI-powered business solutions"
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3>AI Integration</h3>
                  <p>Streamline your operations and enhance customer experience with custom AI solutions tailored to your needs.</p>
                </div>
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="/images/dish4.jpg"
                  alt="Strategic content creation services"
                  width={600}
                  height={400}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3>Content Strategy</h3>
                  <p>Build a powerful online presence with strategic content that engages your audience and drives growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Start Your Journey</h2>
            <div className={styles.textSection}>
              <div className={styles.textBlock}>
                <h3>Visit Our Studio</h3>
                <p>
                  Based in the heart of Christchurch<br />
                  New Zealand's Creative Hub
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