# Next.js Website Development Guide

This guide provides comprehensive documentation for building professional websites similar to this one. It covers everything from project setup to component implementation and styling.

## Table of Contents
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Key Components](#key-components)
- [Pages Structure](#pages-structure)
- [Styling](#styling)
- [Image Management](#image-management)
- [Responsive Design](#responsive-design)
- [Performance Optimization](#performance-optimization)
- [Common Features Implementation](#common-features-implementation)

## Project Structure

This project follows a standard Next.js structure:

```
website/
├── components/        # Reusable UI components
├── pages/             # Route-based page components
│   ├── api/           # API routes
│   ├── _app.js        # App wrapper component
│   ├── index.js       # Homepage
│   └── [other pages]  # Additional pages
├── public/            # Static assets
│   ├── images/        # Image assets
│   │   ├── hero/      # Hero carousel images
│   ├── videos/        # Video assets
├── styles/            # CSS Modules
│   ├── globals.css    # Global styles
│   ├── [Component].module.css  # Component-specific styles
├── package.json       # Project dependencies and scripts
└── next.config.js     # Next.js configuration
```

## Setup and Installation

### 1. Create a New Next.js Project

```bash
# Create a new Next.js project
npx create-next-app my-website
cd my-website
```

### 2. Install Required Dependencies

```bash
npm install next-themes
```

### 3. Project Configuration

**package.json Example:**
```json
{
  "name": "website",
  "version": "1.0.0",
  "private": true,
  "main": "index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.7",
    "next-themes": "^0.4.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

**next.config.js Example:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

## Key Components

### Layout Component

The Layout component wraps all pages and includes common elements like the ScrollToTop button.

**components/Layout.js:**
```jsx
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
```

### Navigation Component

Create a responsive navigation component with links to all pages.

**components/Navigation.js:**
```jsx
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Your Brand</span>
        </Link>
      </div>
      
      <button 
        className={styles.menuButton} 
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={styles.hamburger}></span>
      </button>
      
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

### Hero Carousel

Create an image carousel for the hero section that automatically rotates images.

**components/HeroCarousel.js:**
```jsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/HeroCarousel.module.css';

const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images from the public/images/hero directory
  const images = [
    '/images/hero/image1.jpg',
    '/images/hero/image2.jpg',
    '/images/hero/image3.jpg',
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
```

### Scroll to Top Button

Add a button that appears when scrolling down and smoothly scrolls back to the top.

**components/ScrollToTop.js:**
```jsx
import { useState, useEffect } from 'react';
import styles from '../styles/ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className={styles.scrollTop}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
```

## Pages Structure

### App Configuration (_app.js)

Set up your app with theme support and the layout wrapper.

**pages/_app.js:**
```jsx
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
```

### Homepage (index.js)

Create a homepage with sections for hero, about, services, and contact.

**pages/index.js (simplified structure):**
```jsx
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
        <title>Your Brand | Professional Services in Your Location</title>
        <meta name="description" content="Your SEO description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />
        
        {/* Hero Section */}
        <section className={styles.hero}>
          <HeroCarousel />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Your Main Headline Here</h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>About Section Title</h2>
            {/* About content here */}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Services Section Title</h2>
            {/* Services content here */}
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          {/* Footer content here */}
        </footer>
      </main>
    </div>
  );
}
```

## Styling

### Global Styles

**styles/globals.css (basic structure):**
```css
/* Reset styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Light theme variables */
  --background: #ffffff;
  --foreground: #000000;
  --primary: #0070f3;
  --secondary: #1e3a8a;
  --accent: #f97316;
  --muted: #f3f4f6;
}

[data-theme='dark'] {
  /* Dark theme variables */
  --background: #121212;
  --foreground: #ffffff;
  --primary: #3b82f6;
  --secondary: #93c5fd;
  --accent: #fb923c;
  --muted: #1f2937;
}

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--foreground);
  background: var(--background);
  scroll-behavior: smooth;
}

a {
  color: var(--primary);
  text-decoration: none;
}

/* Add more global styles as needed */
```

### Component-Specific Styles

Create CSS modules for each component:

**styles/Navigation.module.css:**
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navLinks {
  display: flex;
  list-style: none;
  gap: 2rem;
}

/* Add responsive styles */
@media (max-width: 768px) {
  .navLinks {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    background: var(--background);
    padding: 2rem;
    transition: right 0.3s ease;
  }
  
  .navLinks.active {
    right: 0;
  }
  
  .menuButton {
    display: block;
  }
}
```

## Image Management

### Optimizing Images

1. Use Next.js Image component for automatic optimization
2. Store images in the public/images directory
3. Create subdirectories for different sections (hero, services, etc.)
4. Use appropriate image formats (WebP for better performance)
5. Set proper width, height, and quality attributes

### Hero Image Guidelines

Create a README.md in your hero images directory:

**public/images/hero/README.md:**
```markdown
# Hero Image Guidelines

This directory contains images used in the homepage hero carousel.

## Requirements:
- Resolution: 1920x1080px (16:9 aspect ratio)
- Format: .jpg or .webp
- File size: Under 300KB (optimize before adding)
- Quality: Sharp, high-quality images that represent your brand

## To add new images:
1. Name files descriptively (e.g., "office-team-meeting.jpg")
2. Optimize the image (use tools like TinyPNG or ImageOptim)
3. Add the image to this directory
4. Update the images array in components/HeroCarousel.js
```

## Responsive Design

### Key Breakpoints

```css
/* Mobile first approach */
/* Base styles for mobile */

/* Small tablets and large phones */
@media (min-width: 640px) {
  /* Small tablet styles */
}

/* Tablets and small laptops */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Laptops and desktops */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large screens */
@media (min-width: 1280px) {
  /* Large screen styles */
}
```

## Performance Optimization

### Next.js Image Optimization

Always use the Next.js Image component for automatic optimization:

```jsx
import Image from 'next/image';

// Example usage
<Image
  src="/images/example.jpg"
  alt="Description of image"
  width={800}
  height={600}
  quality={85}
  priority={true} // For important above-the-fold images
/>
```

### Code Splitting

Next.js automatically code-splits your application. To manually implement code splitting for large components:

```jsx
import dynamic from 'next/dynamic';

// Dynamically import heavy components
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering if not needed
});
```

## Common Features Implementation

### Contact Form

**components/ContactForm.js:**
```jsx
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to your API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {submitStatus === 'success' && (
        <p className={styles.successMessage}>Message sent successfully!</p>
      )}
      
      {submitStatus === 'error' && (
        <p className={styles.errorMessage}>Failed to send message. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
```

**pages/api/contact.js:**
```jsx
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate form inputs
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Here you would typically:
    // 1. Send an email using a service like SendGrid or Nodemailer
    // 2. Store the message in a database
    // 3. Forward to a CRM system
    
    // For this example, we'll just simulate success
    console.log('Form submission:', { name, email, message });
    
    // Return success response
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Error sending message' });
  }
}
```

### Project/Portfolio Gallery

Create a component to display your work:

**components/ProjectGrid.js:**
```jsx
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectGrid.module.css';
import ProjectModal from './ProjectModal';

const ProjectGrid = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <div 
          key={project.id} 
          className={styles.projectCard}
          onClick={() => openModal(project)}
        >
          <div className={styles.imageContainer}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={600}
              height={400}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectInfo}>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        </div>
      ))}
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default ProjectGrid;
```

## Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings (usually automatic for Next.js)
4. Deploy

### Custom Server Deployment

Next.js can be deployed to any Node.js server:

1. Build your application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start npm --name "next-app" -- start
```

## SEO Optimization

### Head Component

Use Next.js Head component to add metadata to each page:

```jsx
import Head from 'next/head';

// Inside your page component
<Head>
  <title>Page Title | Brand Name</title>
  <meta name="description" content="Page description for SEO" />
  <meta name="keywords" content="keyword1, keyword2, keyword3" />
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Description for social sharing" />
  <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
  <meta property="og:url" content="https://yourdomain.com/page-url" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>
```

### Sitemap Generation

Add a sitemap for better SEO:

1. Install the package:
```bash
npm install next-sitemap
```

2. Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
  exclude: ['/admin', '/private'],
};
```

3. Add to package.json scripts:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

## Accessibility

### ARIA Attributes

Always include proper ARIA attributes:

```jsx
<button 
  aria-label="Close menu" 
  onClick={closeMenu}
>
  <span className="sr-only">Close</span>
  <svg>...</svg>
</button>
```

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```jsx
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Interactive Element
</div>
```

## Conclusion

This guide provides a comprehensive foundation for creating professional websites using Next.js. By following these patterns and best practices, you can build high-quality, performant websites that deliver excellent user experiences.

For updates and improvements to this guide, check for newer versions or contact the original author. 