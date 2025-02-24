import Head from 'next/head';
import styles from '../styles/Work.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Corporate Training Series",
      description: "A comprehensive series of training videos for a major retail chain, including health & safety protocols, customer service guidelines, and operational procedures.",
      category: "video",
      technologies: ["Sony FX6", "Premiere Pro", "After Effects", "Professional Audio"],
      image: "/images/ai-workflow-automation.jpg",
      demoLink: "https://video-demo.bananabyte.co.nz"
    },
    {
      title: "Product Photography Campaign",
      description: "Professional product photography for an e-commerce platform, featuring high-end merchandise with attention to detail and brand consistency.",
      category: "photo",
      technologies: ["Sony A7RV", "Studio Lighting", "Photoshop", "Lightroom"],
      image: "/images/ai-design-generation.jpg",
      demoLink: "https://photo-demo.bananabyte.co.nz"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Custom analytics solution integrating AI for business intelligence, featuring real-time data visualization and automated reporting capabilities.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      image: "/images/ai-data-visualization.jpg",
      demoLink: "https://analytics-demo.bananabyte.co.nz"
    },
    {
      title: "Event Highlight Reel",
      description: "Dynamic video coverage of a major corporate event, including keynote speeches, networking sessions, and promotional material.",
      category: "video",
      technologies: ["Sony FX6", "DJI Ronin", "Premiere Pro", "Color Grading"],
      image: "/images/ai-ecommerce-analytics.jpg",
      demoLink: "https://event-demo.bananabyte.co.nz"
    },
    {
      title: "Brand Photography Package",
      description: "Comprehensive brand photography including team headshots, office culture, and environmental shots for marketing materials.",
      category: "photo",
      technologies: ["Sony A7RV", "Aperture Lighting", "Capture One", "Photoshop"],
      image: "/images/ai-content-intelligence.jpg",
      demoLink: "https://brand-demo.bananabyte.co.nz"
    },
    {
      title: "IT Infrastructure Modernization",
      description: "Complete digital transformation project including cloud migration, AI integration, and workflow automation for improved efficiency.",
      category: "ai",
      technologies: ["Cloud Services", "Machine Learning", "Process Automation", "Data Security"],
      image: "/images/ai-social-networking.jpg",
      demoLink: "https://it-demo.bananabyte.co.nz"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'video', label: 'Videography' },
    { id: 'photo', label: 'Photography' },
    { id: 'ai', label: 'AI & IT' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Head>
        <title>Work | Banana Byte</title>
        <meta name="description" content="Portfolio of web development projects showcasing frontend, backend, and full-stack applications" />
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
          <h1>My Work</h1>
          <p className={styles.subtitle}>Selected Projects and Case Studies</p>
        </section>

        <section className={styles.categories}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </section>

        <section className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.tech}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <span>Live Demo</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.icon}>
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <h2>Interested in Working Together?</h2>
          <p>Let's discuss your next project and bring your ideas to life.</p>
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