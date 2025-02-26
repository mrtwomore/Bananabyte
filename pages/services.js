import Head from 'next/head';
import styles from '../styles/Services.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Videography",
      description: "Professional videography services specialising in business content creation. From internal training videos to marketing content, we deliver high-quality video solutions.",
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
      title: "AI & Technology Consultation",
      description: "Expert guidance on implementing AI solutions and technology strategies for your business. From custom chatbots to workflow automation, we help you leverage cutting-edge technology.",
      features: [
        "Custom AI Chatbot Development",
        "AI-Enhanced Web Applications",
        "Workflow Automation Solutions",
        "Technology Integration Strategy",
        "AI-Assisted Content Creation"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Services | Banana Byte</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Professional videography, photography, and AI technology services for businesses in Christchurch, New Zealand. Specialising in corporate videos, training content, and digital marketing materials." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <div className={styles.videoBackground}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={styles.backgroundVideo}
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
              <p>We specialise in videography, photography, and AI technology solutions for small and medium-sized businesses. Our services range from professional content creation for internal use and marketing to custom AI applications and technology consultation. While we have experience in event coverage, we can recommend specialists for specific event needs.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does it take to complete a project?</h3>
              <p>Project timelines vary based on scope and complexity. We start with a detailed planning meeting to discuss deliverables and scope. We maintain a focused client load to ensure quick turnarounds and minimal revisions.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can you assist in training business owners or marketing teams?</h3>
              <p>Yes! We offer comprehensive training modules and hands-on sessions. Whether it's iPhone photography, video editing software (Premier, Davinci, Capcut), or equipment consultation, we're here to help your team develop their content creation skills.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What AI solutions can you provide for my business?</h3>
              <p>We develop custom AI solutions tailored to your specific business needs. This includes AI-powered chatbots for customer service, workflow automation tools, AI-enhanced web applications, and AI-assisted content creation. Our solutions are designed to be cost-effective and practical, focusing on delivering real business value rather than implementing technology for its own sake.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you provide technology buying advice?</h3>
              <p>Absolutely! We offer vendor-neutral technology consultation to help you make informed decisions about hardware and software purchases. Whether you're setting up a new office, upgrading your equipment, or implementing new systems, we can provide recommendations based on your specific needs, budget, and long-term goals. Our advice is always focused on practical solutions that deliver the best value for your investment.</p>
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