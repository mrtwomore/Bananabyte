# Website Structure and Implementation Guide

## Overview
This is a modern, responsive Next.js website featuring a clean design with a hamburger menu navigation system for mobile devices. The website includes multiple pages with smooth transitions and interactive elements.

## Key Features
1. Responsive Navigation
   - Hamburger menu for mobile devices
   - Full navigation bar for desktop
   - Smooth transitions between states
   - Implemented in `components/Navigation.js`

2. Project Showcase
   - Modal-based project display
   - Interactive project cards
   - Detailed project information
   - Implemented in `components/ProjectModal.js`

3. Page Structure
   - Home (`pages/index.js`)
   - About (`pages/about.js`)
   - Services (`pages/services.js`)
   - Work (`pages/work.js`)
   - Contact (`pages/contact.js`)

## Technical Implementation

### Navigation Component
```javascript
// components/Navigation.js
import { useState } from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <nav className={styles.nav}>
      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={() => setIsVisible(!isVisible)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isVisible ? styles.visible : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
```

### Project Modal Implementation
```javascript
// components/ProjectModal.js
const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.visible : ''}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{project.title}</h2>
          <button onClick={onClose} className={styles.closeButton}>×</button>
        </div>
        <div className={styles.modalBody}>
          {/* Project details implementation */}
        </div>
      </div>
    </div>
  );
};
```

### Styling Structure
Key CSS modules:
- `styles/Navigation.module.css`: Navigation and hamburger menu styles
- `styles/ProjectModal.module.css`: Project modal styles
- `styles/Work.module.css`: Work page and project grid styles

### Required Dependencies
```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
```

## Responsive Design Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Implementation Guidelines

### Adding New Pages
1. Create new page in `pages` directory
2. Import Navigation component
3. Add page-specific styles in `styles` directory
4. Update navigation links

### Adding Projects
1. Add project details to data structure
2. Include project images in `public` directory
3. Update ProjectModal component if new fields are needed

### Styling New Components
1. Create new CSS module in `styles` directory
2. Use BEM-like naming convention
3. Follow existing responsive design patterns
4. Import styles in component

## Best Practices
1. Maintain consistent naming conventions
2. Keep components modular and reusable
3. Follow responsive design patterns
4. Use CSS modules for style isolation
5. Implement proper SEO practices
6. Ensure accessibility standards are met

## Future Enhancements
1. Add animations for smoother transitions
2. Implement dark mode
3. Add blog functionality
4. Enhance SEO optimization
5. Add more interactive elements
6. Implement contact form functionality

## Deployment
1. Build project: `npm run build`
2. Test production build: `npm run start`
3. Deploy to preferred hosting platform

## Maintenance
1. Regular dependency updates
2. Performance monitoring
3. Content updates
4. SEO optimization
5. Analytics implementation

## CSS Module Examples

### Navigation Styles
```css
/* styles/Navigation.module.css */
.nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.hamburger {
  display: none;
  /* Mobile-first approach */
  @media (max-width: 768px) {
    display: block;
  }
}

.navLinks {
  /* Navigation links styling */
}
```

### Project Modal Styles
```css
/* styles/ProjectModal.module.css */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}

.visible {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## File Structure
```
website/
├── components/
│   ├── Navigation.js
│   └── ProjectModal.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── about.js
│   ├── services.js
│   ├── work.js
│   └── contact.js
├── styles/
│   ├── Navigation.module.css
│   ├── ProjectModal.module.css
│   └── Work.module.css
├── public/
│   └── images/
├── prompts/
└── package.json
```

## State Management
- Local state using React's `useState` hook
- Component-level state management
- Props passing for component communication

## Performance Considerations
1. Image Optimization
   - Use Next.js Image component
   - Implement lazy loading
   - Optimize image formats and sizes

2. Code Splitting
   - Automatic code splitting by Next.js
   - Dynamic imports for larger components
   - Route-based code splitting

3. SEO Optimization
   - Implement meta tags
   - Use semantic HTML
   - Add Open Graph tags
   - Include structured data

## Development Workflow
1. Local Development
   ```bash
   npm run dev
   ```

2. Code Quality
   - ESLint configuration
   - Prettier formatting
   - Git hooks for pre-commit checks

3. Testing
   - Component testing setup
   - Integration testing
   - E2E testing considerations

## Security Best Practices
1. Input Validation
2. XSS Prevention
3. CSRF Protection
4. Secure Headers
5. Environment Variables

## Accessibility Features
1. ARIA labels
2. Keyboard navigation
3. Focus management
4. Color contrast
5. Screen reader compatibility

## Detailed Component Examples

### Page Layout Component
```javascript
// components/Layout.js
import Head from 'next/head';
import Navigation from './Navigation';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle} | Your Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your website description" />
      </Head>
      <Navigation />
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </>
  );
};

export default Layout;
```

### Project Card Component
```javascript
// components/ProjectCard.js
import Image from 'next/image';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            layout="responsive"
            width={300}
            height={200}
            priority={false}
          />
        </div>
        <div className={styles.cardContent}>
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
        </div>
      </div>
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
```

### Form Component with Validation
```javascript
// components/ContactForm.js
import { useState } from 'react';
import { validateEmail, validatePhone } from '../utils/validation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Valid email is required';
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      validationErrors.phone = 'Invalid phone format';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Form submission logic
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Form fields */}
    </form>
  );
};
```

## Environment Configuration

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.yourwebsite.com
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
CONTACT_FORM_EMAIL=contact@yourwebsite.com
SMTP_HOST=smtp.provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASSWORD=your-smtp-password
```

### Environment Configuration Setup
```javascript
// config/environment.js
const environment = {
  development: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    isDevelopment: true
  },
  production: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    isDevelopment: false
  },
  test: {
    apiUrl: 'http://localhost:3000/api',
    siteUrl: 'http://localhost:3000',
    isDevelopment: true
  }
};

const getEnvironment = () => {
  return environment[process.env.NODE_ENV || 'development'];
};

export default getEnvironment();
```

## Error Handling Patterns

### Global Error Boundary
```javascript
// components/ErrorBoundary.js
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h2>Something went wrong</h2>
          <p>Please try refreshing the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### API Error Handling
```javascript
// utils/api.js
class APIError extends Error {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export const handleAPIError = (error) => {
  if (error instanceof APIError) {
    switch (error.status) {
      case 401:
        // Handle unauthorized
        break;
      case 403:
        // Handle forbidden
        break;
      case 404:
        // Handle not found
        break;
      case 500:
        // Handle server error
        break;
      default:
        // Handle other errors
    }
  }
  return {
    error: true,
    message: error.message || 'An unexpected error occurred'
  };
};

export const fetchWithErrorHandling = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new APIError(
        response.statusText,
        response.status,
        'API_ERROR'
      );
    }

    return await response.json();
  } catch (error) {
    return handleAPIError(error);
  }
};
```

### Custom Hook for Error Handling
```javascript
// hooks/useErrorHandler.js
import { useState, useCallback } from 'react';

export const useErrorHandler = (initialState = null) => {
  const [error, setError] = useState(initialState);

  const handleError = useCallback((error) => {
    setError(error);
    // Log error to monitoring service
    console.error('Error:', error);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError
  };
};
```

This prompt serves as a comprehensive guide for rebuilding or extending the website while maintaining consistency in design and functionality. 