import Head from 'next/head';
import styles from '../styles/About.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>About Me | Banana Byte</title>
        <meta name="description" content="Learn more about my journey, skills, and passion for web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <Image
                src="/images/headshot-image.png"
                alt="Ese Sanguinetti"
                width={240}
                height={240}
                className={styles.avatar}
                priority
                quality={95}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <h1>Ese Sanguinetti</h1>
            <p className={styles.subtitle}>Founder & Creative Director</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.bio}>
            <h2>About Me</h2>
            <p>
              At my core, I'm a problem solver and strategic thinker who sees patterns where others might not. 
              While videography is one of my creative outlets, my real strength lies in the intersection of 
              technology, AI, and human connection. I've got this knack for breaking down complex tech concepts 
              into bite-sized pieces that actually make sense to people.
            </p>
            <p>
              What sets me apart is how I blend technical expertise with genuine communication. Whether it's 
              crafting visual stories through video and photography or diving deep into AI solutions, I'm all 
              about creating meaningful work that resonates. I'm drawn to projects that challenge the status 
              quo and clients who share my enthusiasm for innovation. For me, it's all about collaboration - 
              finding that sweet spot where your vision aligns with my creative drive.
            </p>
          </div>

          <div className={styles.achievements}>
            <h2>Milestones</h2>
            <div className={styles.timelineStrip}>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2019</span>
                <h3>Founded Banana Byte Media</h3>
                <p>Vertically integrated videography & photography company</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2021</span>
                <h3>AI-Enhanced Training Platform</h3>
                <p>Custom voice models with 11labs for inductions & safety</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2022</span>
                <h3>Client-Facing AI Solutions</h3>
                <p>Custom chatbots for business interactions & queries</p>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.year}>2024</span>
                <h3>AI-Generated Web Solutions</h3>
                <p>Reduced implementation & developer costs</p>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <h2>Technical Expertise</h2>
            <div className={styles.skillGrid}>
              <div className={styles.skillCard}>
                <h3>Visual Content</h3>
                <div className={styles.skillList}>
                  <div className={styles.skillItem}>
                    <span>Videography</span>
                    <p>Professional video production with cinematic storytelling</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Photography</span>
                    <p>High-impact visual content for brands and businesses</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Corporate Training</span>
                    <p>Specialised in creating engaging induction, HR, and health & safety training videos</p>
                  </div>
                </div>
              </div>
              <div className={styles.skillCard}>
                <h3>AI & Technology Solutions</h3>
                <div className={styles.skillList}>
                  <div className={styles.skillItem}>
                    <span>AI Integration</span>
                    <p>Making complex AI solutions accessible and practical for business growth</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Tech Strategy</span>
                    <p>Transforming businesses through smart technology adoption and training</p>
                  </div>
                  <div className={styles.skillItem}>
                    <span>Team Development</span>
                    <p>Empowering teams with the skills to leverage modern tech solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.interests}>
            <h2>Where Innovation Meets Implementation</h2>
            <div className={styles.interestGrid}>
              <div className={styles.interestCard}>
                <h3>Technology & AI Solutions</h3>
                <p>Bridging the gap between complex technology and practical business applications. I help executives and teams leverage AI and digital solutions in ways that actually make sense for their business.</p>
              </div>
              <div className={styles.interestCard}>
                <h3>Strategic Communication</h3>
                <p>Transforming technical concepts and business stories into clear, engaging content. Perfect for training materials, stakeholder presentations, and marketing campaigns that resonate with your audience.</p>
              </div>
              <div className={styles.interestCard}>
                <h3>Creative Problem Solving</h3>
                <p>Bringing a unique blend of technical expertise and creative thinking to your challenges. Whether it's through video, AI, or strategic planning, I help you find innovative solutions that drive results.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Banana Byte. All rights reserved.</p>
      </footer>
    </div>
  );
} 