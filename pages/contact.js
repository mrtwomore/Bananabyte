import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ese@bananabyte.co.nz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission - Banana Byte',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Banana Byte</title>
        <meta name="description" content="Get in touch for web development projects and collaborations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

        <section className={styles.hero}>
          <h1>Get in Touch</h1>
          <p className={styles.subtitle}>Let's Create Something Amazing Together</p>
        </section>

        <div className={styles.contactContainer}>
          <section className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>ese@bananabyte.co.nz</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Location</h3>
                <p>Christchurch, New Zealand</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Social</h3>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/mrtwomore_" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://instagram.com/Bananabyte" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://linkedin.com/in/esekia-perelini" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.contactForm}>
            <h2>Send a Message</h2>
            <p className={styles.formDescription}>Fill out the form below and I'll get back to you as soon as possible.</p>
            
            {submitStatus === 'success' && (
              <div className={styles.statusMessage + ' ' + styles.success}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.statusMessage + ' ' + styles.error}>
                {errorMessage || 'Sorry, there was an error sending your message. Please try again.'}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="name">Your Name</label>
                <span className={styles.focusIndicator}></span>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="email">Your Email</label>
                <span className={styles.focusIndicator}></span>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows="6"
                  disabled={isSubmitting}
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <span className={styles.focusIndicator}></span>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Banana Byte. All rights reserved.</p>
      </footer>
    </div>
  );
} 