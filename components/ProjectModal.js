import styles from '../styles/ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.modalHeader}>
          <h2>{project.title}</h2>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} />
          </div>

          <div className={styles.projectDetails}>
            <h3>Project Overview</h3>
            {project.fullDescription ? (
              <div>
                {project.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p>{project.description}</p>
            )}

            <h3>Technologies Used</h3>
            <div className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.tech}>{tech}</span>
              ))}
            </div>

            {project.demoLink && project.category === 'ai' && (
              <div className={styles.demoLink}>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  View Demo
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.icon}>
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                  </svg>
                </a>
              </div>
            )}
            
            {project.demoLink && project.category === 'video' && (
              <div className={styles.demoLink}>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Watch Video
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.icon}>
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                  </svg>
                </a>
              </div>
            )}
            
            {project.category === 'photo' && (
              <div className={styles.photoInfo}>
                <p className={styles.photoNote}>Full portfolio available upon request</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 