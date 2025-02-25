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
      description: "Modernized an engineering company's onboarding process through a comprehensive 6-part video series with custom AI-generated voiceovers and visual elements. Integrated with Thinkific to create a seamless digital platform for staff and contractor training, enhancing compliance and accessibility.",
      category: "video",
      technologies: ["Video Production", "11labs AI Voice", "Custom Voiceover", "Thinkific Integration", "Health & Safety Compliance"],
      image: "/images/Website images/Drone image.webp",
      demoLink: "https://youtu.be/6SY_Vqmo-NI",
      fullDescription: "This project revolutionized an engineering company's traditional induction process, bringing it into the digital age. Working closely with health and safety contractors, company stakeholders, and directors, we developed a comprehensive 6-step video series that transformed their onboarding experience.\n\nA standout innovation in this project was the implementation of 11labs AI technology to create custom, professional-quality voiceovers. This approach provided several significant advantages:\n\n• Cost savings of thousands of dollars compared to traditional voice talent recording sessions\n• Seamless script revisions without requiring additional studio time\n• Consistent voice quality across all modules and future updates\n• Rapid turnaround for content adjustments as company policies evolved\n\nThe solution featured these AI-generated professional voiceovers alongside engaging visuals and seamless integration with Thinkific's learning platform. This allowed the company to efficiently deliver critical safety and operational training to new staff and contractors through an intuitive web interface.\n\nThe digital transformation significantly improved training consistency, reduced administrative overhead, and ensured better compliance tracking. The modular approach, combined with the flexibility of AI-generated voiceovers, allows for easy updates as regulations or company policies evolve, ensuring the training content remains current without incurring substantial re-recording costs."
    },
    {
      title: "Product Photography Campaign",
      description: "Professional product photography services for multiple brands across various industries, featuring meticulously styled compositions that elevate visual identity and increase conversion rates for e-commerce and marketing platforms.",
      category: "photo",
      technologies: ["Sony A7RV", "50mm f/1.8", "24-70mm f/2.8", "Full Frame", "Studio Lighting", "Capture One", "Photoshop", "Lightroom", "Shopify"],
      image: "/images/Website images/Baby_bottle_mobile_warmer.jpg",
      images: [
        "/images/Website images/Baby_bottle_mobile_warmer.jpg",
        "/images/Website images/20201029-DSC06312-scaled.jpg",
        "/images/Website images/Brand_asset_image.jpg",
        "/images/Website images/Lifestyle_photography_business_christchurch.jpg",
        "/images/Website images/Lifestyle_photography_business_christchurch_2.jpg",
        "/images/Website images/Lifestyle_photography_business_christchurch_4.jpg"
      ],
      fullDescription: "This portfolio showcases a collection of product photography campaigns executed for multiple clients across diverse industries, from startups and established businesses to e-commerce stores throughout New Zealand.\n\nRather than a single project, this represents a series of 3-5 distinct photography engagements, each tailored to the specific needs and goals of different clients. While each project had unique requirements, they all followed a proven methodology that consistently delivered exceptional results.\n\nThe standard approach for these projects included:\n\n• Initial consultation and creative brainstorming sessions with each client\n• Collection of reference imagery and inspiration to establish visual direction\n• Development of custom photography strategies based on product type, brand identity, and intended use cases\n• Professional styling and composition tailored to each product category\n• Technical execution using professional-grade equipment and lighting techniques\n• Comprehensive post-production workflow ensuring color accuracy and brand consistency\n\nA key strength across these engagements was providing creative direction and marketing guidance, particularly valuable for businesses without dedicated marketing teams. This consultative approach ensured clients not only received exceptional photography but also strategic advice on how to leverage these assets effectively across their digital platforms.\n\nThe final deliverables typically included primary product images, lifestyle compositions, and detail shots optimized for various platforms including e-commerce sites (often integrated directly with Shopify), social media, and digital advertising campaigns.\n\nClients consistently reported significant improvements in conversion rates and customer engagement after implementing these professional product images, demonstrating the critical importance of high-quality visual assets in today's digital marketplace."
    },
    {
      title: "AI-Enhanced Fitness Chatbot",
      description: "Custom AI fitness assistant integrated with Telegram for bootcamp clients, providing personalized workout programs and answering complex fitness questions. Built with Make.com using customized node modules to ensure accurate, hallucination-free responses based on specialized fitness knowledge.",
      category: "ai",
      technologies: ["Make.com", "Node.js", "Telegram API", "AI Integration", "Custom Data Processing"],
      image: "/images/Website images/Desktop_AI_Make_automation.png",
      demoLink: "https://analytics-demo.bananabyte.co.nz",
      fullDescription: "This project involved developing an AI-enhanced personal training and fitness chatbot integrated into Telegram for clients of our group training bootcamps. The primary goal was to provide users with a familiar, accessible interface to interact with a sophisticated AI system capable of building custom workouts and answering complex fitness-related questions.\n\nBy leveraging the Telegram messaging service as the interface, we eliminated the learning curve typically associated with new applications, allowing users to engage with advanced AI capabilities through a platform they already used daily. This strategic choice significantly increased adoption rates and user satisfaction.\n\nThe technical implementation was built on Make.com's flexible platform, utilizing customized node modules specifically designed to:\n\n• Generate personalized workout programs tailored to individual fitness levels and goals\n• Provide accurate, contextually relevant answers to fitness questions without hallucinations or topic deviation\n• Maintain conversation context for natural, flowing interactions\n• Format responses appropriately for the Telegram interface\n\nA key innovation was our approach to knowledge engineering. We incorporated specialized fitness data in CSV and PDF formats to provide the AI with comprehensive domain knowledge, ensuring responses were grounded in established fitness principles and best practices.\n\nThe system included sophisticated safeguards, including a vetting step that double-checked all AI-generated content before delivery to users, preventing potential misinformation or inappropriate recommendations that could lead to injury.\n\nRemarkably, this entire solution was developed and deployed in just two weeks. Once operational, the ongoing costs were minimal—approximately $20 per month in token charges—making it an exceptionally cost-effective solution for enhancing client services and engagement.\n\nThe chatbot has become an invaluable extension of our training programs, providing clients with 24/7 access to personalized fitness guidance and support between in-person sessions."
    },
    {
      title: "Startup Spotlight Series",
      description: "Created an engaging video series for a prominent Otautahi (Canterbury) startup incubator, showcasing local entrepreneurs through compelling 2-minute stories optimized for social media and web platforms.",
      category: "video",
      technologies: ["Interview Direction", "Sound Engineering", "Color Grading", "Multi-platform Formatting"],
      image: "/images/Website images/Corporate_showcase_startup_videography.JPG",
      demoLink: "https://www.youtube.com/watch?v=Ip5zM6nKDR0",
      fullDescription: "This comprehensive video project for a leading startup incubator in Otautahi (Canterbury) showcased the journeys and innovations of emerging local entrepreneurs. The series required a full-stack approach to video production, where we handled every aspect from concept to final delivery.\n\nWorking directly with founders, we conducted interview-style sessions that captured authentic stories and distilled them into compelling 2-minute video segments. Each video was carefully crafted to highlight the unique value proposition of each startup while maintaining a consistent series identity.\n\nOur responsibilities included developing thoughtful interview questions, directing talent (often first-time on-camera participants), capturing professional-quality audio in varied environments, and post-production excellence including editing, sound engineering, color grading, and custom graphics.\n\nThe final deliverables were optimized for multiple platforms, including social media advertising campaigns and website content. The series successfully increased engagement with the incubator's programs and provided valuable exposure for the featured startups, helping them attract attention, users, and potential investors."
    },
    {
      title: "Brand Photography Package",
      description: "Comprehensive visual identity package for a tech startup, including team portraits, workspace culture photography, and environmental shots that authentically communicated their innovative company culture.",
      category: "photo",
      technologies: ["Sony A7RV", "Environmental Portraiture", "Capture One", "Photoshop"],
      image: "/images/Website images/Corporate_website_stock_image_Startup_7.jpg",
      images: [
        "/images/Website images/Corporate_website_stock_image_Startup_7.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_8.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_2.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_6.jpg",
        "/images/Website images/Corporate_website_stock_image_Startup_4.jpg"
      ],
      fullDescription: "This brand photography project was commissioned by a growing company looking to refresh their visual presence across website, print materials, and social media platforms.\n\nThe client needed a comprehensive visual identity package that would present a professional corporate image while maintaining authenticity and relatability. Rather than using stock photography, they made the strategic decision to feature their actual staff members in all imagery.\n\nThe comprehensive package included:\n\n• Professional headshots of team members with consistent styling while preserving individual personality\n• Lifestyle photography showcasing the company culture and work environment\n• Service-focused imagery highlighting their core offerings and expertise\n• Versatile content for newsletters, LinkedIn campaigns, and other marketing channels\n\nThis approach of using real staff members in their marketing materials created several distinct advantages:\n\n• Potential clients encounter familiar faces when engaging with the company's digital content before meeting in person\n• Faster rapport-building during initial client meetings\n• Enhanced perception of local expertise and authentic New Zealand business values\n• Stronger connection with the community they serve\n\nThe project required careful planning to capture genuine moments that reflected their culture while maintaining a professional aesthetic. We developed shooting schedules that accommodated team availability and created comfortable, natural settings for people who weren't accustomed to being photographed professionally.\n\nThe final image library contained carefully curated and edited photographs organized into categories for easy implementation across their website, social media, print materials, and digital communications. Following implementation, the client reported significantly improved engagement metrics and positive feedback from customers who appreciated the authentic representation of their brand."
    },
    {
      title: "Custom Web App Solutions",
      description: "Developed specialised web applications addressing industry-specific challenges, including a comprehensive mortgage amortisation calculator with multiple export formats and a professional workout programme formatter that reduced admin time from 45 to 10 minutes for personal trainers.",
      category: "ai",
      technologies: ["AI-Assisted Development", "Web App Design", "UI/UX", "PDF Generation", "Data Export", "LLM Integration"],
      image: "/images/ai-business-transformation.jpg",
      demoLink: "https://ai-demo.bananabyte.co.nz",
      fullDescription: "This project addressed specific industry challenges through the development of two specialised web applications that delivered immediate value to their target users. Drawing on extensive experience working with Canterbury business leaders across various sectors, we identified and solved pain points that existing solutions had failed to address.\n\nThe first application tackled the limitations of online mortgage amortisation calculators, which typically lacked the ability to generate downloadable files for offline analysis and record-keeping. We developed a comprehensive solution that not only provided accurate calculations but also enabled users to export their results in multiple formats including PDF, CSV, and Excel.\n\nKey features of the mortgage calculator included:\n\n• Intuitive interface for inputting loan details and viewing payment schedules\n• Multiple export formats for flexibility in financial planning and record-keeping\n• Customisable scenarios for comparing different loan terms and conditions\n• Mobile-responsive design ensuring accessibility across all devices\n\nThe second application addressed the challenges faced by personal trainers who needed to create professional workout programmes without investing in expensive subscription services or learning complex design software. Our solution dramatically streamlined this process, reducing the time required from 30-45 minutes to just 10 minutes per client programme.\n\nThe workout programme formatter delivered these benefits:\n\n• Streamlined workflow from programme creation to client delivery\n• Professional, branded output that enhanced the trainer's market positioning\n• Intuitive interface requiring minimal training to master\n• Consistent formatting that elevated the perceived value of the service\n\nBoth applications were developed using AI-assisted coding techniques combined with deep domain knowledge and strong UI/UX principles. This approach allowed for rapid development while ensuring the final products precisely addressed the specific needs of their target users.\n\nThe success of these projects demonstrates how targeted web applications can solve specific business challenges more effectively than generic solutions, providing significant time savings and professional advantages to users in specialised fields."
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