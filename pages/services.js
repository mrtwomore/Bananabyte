import Head from 'next/head';
import styles from '../styles/Services.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Videography",
      description: "Professional videography services specializing in business content creation. From internal training videos to marketing content, we deliver high-quality video solutions.",
      features: [
        "Internal Training & Induction Videos",
        "Health & Safety Documentation",
        "AGM & Corporate Events",
        "Brand Trust Building Content",
        "Marketing Videos"
      ]
    },
    {
      title: "Photography",
      description: "Expert photography services tailored for small and medium-sized businesses. We capture the essence of your brand through professional imagery.",
      features: [
        "Product Photography",
        "Corporate Portraits",
        "Location Shoots",
        "Brand Story Photography",
        "Digital Content Creation"
      ]
    },
    {
      title: "Training & Consultation",
      description: "Empower your team with professional training in content creation and equipment usage. Available both in-person and online.",
      features: [
        "iPhone Photography/Videography",
        "Editing Software Training",
        "Equipment Consultation",
        "Marketing Team Workshops",
        "Content Strategy Planning"
      ]
    },
    {
      title: "Equipment & Technical",
      description: "Professional-grade equipment for high-quality content creation, including industry-standard cameras and lighting solutions.",
      features: [
        "Sony FX6 Camera",
        "Sony A7Siii & A7RV",
        "DJI Ronin Gimbal",
        "Aperture Lighting",
        "Amaran Lighting Systems"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Services | Banana Byte</title>
        <meta name="description" content="Professional videography and photography services for businesses in Christchurch, New Zealand. Specializing in corporate videos, training content, and digital marketing materials." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <nav className={styles.nav}>
          <Link href="/">
            <span className={styles.logo}>Banana Byte</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.videoBackground}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={styles.backgroundVideo}
              defaultMuted
            >
              <source src="/videos/web%20vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1>Our Services</h1>
            <p className={styles.subtitle}>Professional Digital Content Creation in Christchurch</p>
          </div>
        </section>

        <section className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h2>{service.title}</h2>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>What services do you provide?</h3>
              <p>We specialize in videography and photography for small and medium-sized businesses, focusing on professional content for internal use (like induction videos and health & safety materials) and marketing content. While we have experience in event coverage, we can recommend specialists for specific event needs.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does it take to complete a project?</h3>
              <p>Project timelines vary based on scope and complexity. We start with a detailed planning meeting to discuss deliverables and scope. We maintain a focused client load to ensure quick turnarounds and minimal revisions.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can you assist in training business owners or marketing teams?</h3>
              <p>Yes! We offer comprehensive training modules and hands-on sessions. Whether it's iPhone photography, video editing software (Premier, Davinci, Capcut), or equipment consultation, we're here to help your team develop their content creation skills.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help bring your vision to life.</p>
          <Link href="/contact">
            <button className={styles.ctaButton}>Get in Touch</button>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Banana Byte. All rights reserved.</p>
      </footer>
    </div>
  );
} 