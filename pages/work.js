import Head from 'next/head';
import styles from '../styles/Work.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectModal from '../components/ProjectModal';
import Navigation from '../components/Navigation';

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Digital Induction Transformation",
      description: "Modernized an engineering company's onboarding process through a comprehensive 6-part video series with custom voiceovers and visual elements. Integrated with Thinkific to create a seamless digital platform for staff and contractor training, enhancing compliance and accessibility.",
      category: "video",
      technologies: ["Video Production", "Custom Voiceover", "Thinkific Integration", "Health & Safety Compliance"],
      image: "/images/ai-workflow-automation.jpg",
      demoLink: "https://youtu.be/example1",
      fullDescription: "This project revolutionized an engineering company's traditional induction process, bringing it into the digital age. Working closely with health and safety contractors, company stakeholders, and directors, we developed a comprehensive 6-step video series that transformed their onboarding experience.\n\nThe solution featured professional voiceovers, engaging visuals, and seamless integration with Thinkific's learning platform. This allowed the company to efficiently deliver critical safety and operational training to new staff and contractors through an intuitive web interface.\n\nThe digital transformation significantly improved training consistency, reduced administrative overhead, and ensured better compliance tracking. The modular approach also allows for easy updates as regulations or company policies evolve."
    },
    {
      title: "Product Photography Campaign",
      description: "Professional product photography for a luxury homeware brand's e-commerce platform, featuring meticulously styled compositions that elevated their visual identity and increased conversion rates.",
      category: "photo",
      technologies: ["Sony A7RV", "Studio Lighting", "Photoshop", "Lightroom"],
      image: "/images/product-photography.jpg",
      fullDescription: "This comprehensive product photography campaign transformed the online presence of a luxury homeware brand looking to elevate their e-commerce experience. The client needed high-quality imagery that would showcase their products' craftsmanship while creating a cohesive visual identity across their digital platforms.\n\nWorking closely with their marketing team, we developed a photography style guide that aligned with their brand values of sophistication, quality, and timeless design. The project encompassed over 120 individual products across multiple collections, each requiring careful styling and attention to detail.\n\nOur approach included:\n\n• Creating consistent lighting setups that highlighted textures and materials\n• Styling compositions that told a story about the product's use and aesthetic\n• Developing multiple angles and detail shots for each product\n• Implementing a rigorous post-processing workflow for color accuracy and brand consistency\n\nThe final deliverables included primary product images, lifestyle compositions, and detail shots optimized for various platforms including their e-commerce site, social media, and digital advertising campaigns.\n\nFollowing implementation, the client reported a 34% increase in conversion rate and significantly longer time spent on product pages, directly attributable to the improved visual presentation."
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Custom analytics solution integrating AI for business intelligence, featuring real-time data visualization and automated reporting capabilities for a retail chain seeking to optimize operations.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      image: "/images/ai-data-visualization.jpg",
      demoLink: "https://analytics-demo.bananabyte.co.nz",
      fullDescription: "This project involved developing a sophisticated AI-powered analytics dashboard for a retail chain struggling to make sense of their growing data ecosystem. The client needed a solution that could transform raw data into actionable insights without requiring specialized data science expertise from their team.\n\nWe designed and implemented a custom analytics platform that leveraged machine learning algorithms to identify patterns, anomalies, and opportunities within their sales, inventory, and customer data. The system featured intuitive data visualizations built with D3.js and React, making complex information accessible to decision-makers at all levels.\n\nKey features included:\n\n• Predictive inventory management that reduced stockouts by 37%\n• Customer segmentation and behavior analysis that improved targeted marketing ROI\n• Automated anomaly detection for loss prevention and fraud identification\n• Customizable reporting with scheduled delivery to stakeholders\n\nThe solution integrated with their existing data sources and provided a unified view of business performance. After implementation, the client reported a 22% increase in operational efficiency and significantly improved decision-making speed across departments."
    },
    {
      title: "Startup Spotlight Series",
      description: "Created an engaging video series for a prominent Otautahi (Canterbury) startup incubator, showcasing local entrepreneurs through compelling 2-minute stories optimized for social media and web platforms.",
      category: "video",
      technologies: ["Interview Direction", "Sound Engineering", "Color Grading", "Multi-platform Formatting"],
      image: "/images/startup-spotlight.jpg",
      demoLink: "https://youtube.com/playlist?list=example2",
      fullDescription: "This comprehensive video project for a leading startup incubator in Otautahi (Canterbury) showcased the journeys and innovations of emerging local entrepreneurs. The series required a full-stack approach to video production, where we handled every aspect from concept to final delivery.\n\nWorking directly with founders, we conducted interview-style sessions that captured authentic stories and distilled them into compelling 2-minute video segments. Each video was carefully crafted to highlight the unique value proposition of each startup while maintaining a consistent series identity.\n\nOur responsibilities included developing thoughtful interview questions, directing talent (often first-time on-camera participants), capturing professional-quality audio in varied environments, and post-production excellence including editing, sound engineering, color grading, and custom graphics.\n\nThe final deliverables were optimized for multiple platforms, including social media advertising campaigns and website content. The series successfully increased engagement with the incubator's programs and provided valuable exposure for the featured startups, helping them attract attention, users, and potential investors."
    },
    {
      title: "Brand Photography Package",
      description: "Comprehensive visual identity package for a tech startup, including team portraits, workspace culture photography, and environmental shots that authentically communicated their innovative company culture.",
      category: "photo",
      technologies: ["Sony A7RV", "Environmental Portraiture", "Capture One", "Photoshop"],
      image: "/images/brand-photography.jpg",
      fullDescription: "This brand photography project was commissioned by a rapidly growing tech startup preparing for a major rebranding initiative. The company needed authentic visual assets that would communicate their innovative culture, showcase their talented team, and create a consistent visual identity across all marketing channels.\n\nThe comprehensive package included:\n\n• Professional headshots of 35+ team members with consistent styling while preserving individual personality\n• Environmental portraits of leadership and department teams in their natural work settings\n• Candid workplace culture photography capturing collaboration and the company's unique atmosphere\n• Office and workspace imagery highlighting their modern facilities and creative environment\n• Product and technology documentation for marketing materials\n\nThe project required careful planning to minimize disruption to the company's operations while ensuring we captured genuine moments that reflected their culture. We developed a shooting schedule that accommodated team availability and created comfortable, natural settings for people who weren't accustomed to being photographed professionally.\n\nThe final image library contained over 300 curated and edited photographs, organized into categories for easy implementation across their website, social media, press materials, and internal communications. The client successfully launched their rebranding with these assets, reporting significantly improved engagement on their careers page and social media profiles."
    },
    {
      title: "AI-Enhanced Business Transformation",
      description: "End-to-end digital transformation for a professional services firm, implementing AI-powered workflows, cloud migration, and custom automation solutions that reduced operational costs by 40% while improving client service delivery.",
      category: "ai",
      technologies: ["Custom AI Solutions", "Process Automation", "Cloud Migration", "Workflow Optimization"],
      image: "/images/ai-business-transformation.jpg",
      demoLink: "https://ai-demo.bananabyte.co.nz",
      fullDescription: "This comprehensive digital transformation project revolutionized operations for a professional services firm struggling with outdated systems, manual processes, and increasing competitive pressure. The client needed a strategic technology partner to guide them through a complete modernization while minimizing disruption to their client services.\n\nOur approach began with a thorough assessment of their existing workflows, identifying critical pain points and opportunities for AI-enhanced automation. We developed a phased implementation strategy that prioritized quick wins while building toward a completely transformed technology ecosystem.\n\nKey components of the transformation included:\n\n• Custom AI-powered document processing that reduced manual data entry by 85%\n• Intelligent client intake system with automated information gathering and verification\n• Cloud migration of legacy systems with enhanced security and accessibility\n• Workflow automation for routine tasks, freeing staff for higher-value activities\n• Custom dashboards providing real-time visibility into business operations\n\nThe implementation included comprehensive staff training and change management support to ensure successful adoption. We developed custom documentation and conducted hands-on workshops to build internal capability and confidence with the new systems.\n\nThe results exceeded expectations, with the client reporting a 40% reduction in operational costs, 65% faster client onboarding, and significantly improved staff satisfaction. The new AI-enhanced systems also enabled them to offer innovative service packages that differentiated them in their market."
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Work | Banana Byte</title>
        <meta name="description" content="Portfolio of web development projects showcasing frontend, backend, and full-stack applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
        <Navigation />

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
            <div 
              key={index} 
              className={styles.projectCard}
              onClick={() => handleProjectClick(project)}
            >
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
                      <button className={styles.viewDetailsButton}>
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.icon}>
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                        </svg>
                      </button>
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

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
} 