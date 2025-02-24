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
      title: "Modern E-commerce Platform",
      description: "A full-stack e-commerce solution with a sleek, modern interface. Features include real-time inventory management, secure payments, and a responsive design that works seamlessly across all devices.",
      category: "fullstack",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
      image: "/images/ai-ecommerce-analytics.jpg",
      demoLink: "https://ecommerce-demo.bananabyte.co.nz",
      githubLink: "https://github.com/bananabyte/ecommerce-platform"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio website showcasing creative work. Built with performance and accessibility in mind, featuring smooth animations and a dark mode toggle.",
      category: "frontend",
      technologies: ["React", "Next.js", "CSS Modules", "Framer Motion"],
      image: "/images/ai-design-generation.jpg",
      demoLink: "https://portfolio-demo.bananabyte.co.nz",
      githubLink: "https://github.com/bananabyte/portfolio-template"
    },
    {
      title: "Task Management System",
      description: "A comprehensive project management tool with real-time updates, team collaboration features, and detailed analytics. Includes role-based access control and customizable workflows.",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "WebSocket", "JWT"],
      image: "/images/ai-workflow-automation.jpg",
      demoLink: "https://tasks-demo.bananabyte.co.nz",
      githubLink: "https://github.com/bananabyte/task-manager"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "An interactive dashboard displaying real-time business metrics and KPIs. Features include customizable widgets, data visualization, and automated reporting capabilities.",
      category: "fullstack",
      technologies: ["React", "D3.js", "Node.js", "WebSocket", "Redis"],
      image: "/images/ai-data-visualization.jpg",
      demoLink: "https://analytics-demo.bananabyte.co.nz",
      githubLink: "https://github.com/bananabyte/analytics-dashboard"
    },
    {
      title: "AI-Powered Content Management",
      description: "An innovative content management system leveraging AI for automated content organization, tagging, and optimization. Features smart search, content recommendations, and SEO automation.",
      category: "fullstack",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
      image: "/images/ai-content-intelligence.jpg",
      demoLink: "https://cms-demo.bananabyte.co.nz",
      githubLink: "https://github.com/bananabyte/ai-cms"
    },
    {
      title: "Mobile-First Social Platform",
      description: "A responsive social networking platform built with modern web technologies. Features include real-time messaging, media sharing, and progressive web app capabilities for offline access.",
      category: "frontend",
      technologies: ["React Native", "GraphQL", "Apollo", "Firebase", "TypeScript"],
      image: "/images/ai-social-networking.jpg",
      demoLink: "https://social-demo.bananabyte.co.nz",
      githubLink: "https://github.com/bananabyte/social-platform"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
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
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <span>GitHub</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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