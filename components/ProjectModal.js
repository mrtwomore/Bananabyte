import styles from '../styles/ProjectModal.module.css';
import { useState, useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  if (!project) return null;
  
  // Check if this project has multiple images
  const hasMultipleImages = project.images && project.images.length > 1;
  
  // Function to navigate to the next image
  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  // Function to navigate to the previous image
  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Effect to set images as loaded
  useEffect(() => {
    if (project.images && project.images.length > 0) {
      setImagesLoaded(true);
    }
  }, [project.images]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.modalHeader}>
          <h2>{project.title}</h2>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.imageContainer}>
            {hasMultipleImages ? (
              <>
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.images[currentImageIndex]}`);
                    e.target.src = project.image || '/images/placeholder.svg';
                  }}
                />
                <div className={styles.imageNavigation}>
                  <button onClick={prevImage} className={styles.navButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.icon}>
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" />
                    </svg>
                  </button>
                  <span className={styles.imageCounter}>
                    {currentImageIndex + 1} / {project.images.length}
                  </span>
                  <button onClick={nextImage} className={styles.navButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.icon}>
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
                    </svg>
                  </button>
                </div>
                <div className={styles.thumbnailContainer}>
                  {project.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`} 
                        onError={(e) => {
                          console.error(`Failed to load thumbnail: ${img}`);
                          e.target.src = project.image || '/images/placeholder.svg';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                onError={(e) => {
                  console.error(`Failed to load main image: ${project.image}`);
                  e.target.src = '/images/placeholder.svg';
                }}
              />
            )}
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