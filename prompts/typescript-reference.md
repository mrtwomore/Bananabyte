# TypeScript Reference Guide for Next.js Website

## What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript. It adds static type definitions that can help catch errors early during development rather than at runtime. TypeScript is developed and maintained by Microsoft and compiles down to plain JavaScript.

## Benefits of TypeScript

### 1. Type Safety and Error Prevention
- Catches type-related errors during development
- Prevents common mistakes like undefined properties
- Validates function arguments and return values
- Ensures components receive the correct props

### 2. Better Developer Experience
- Enhanced IDE support with intelligent code completion
- Improved refactoring capabilities
- Clearer understanding of data structures
- Better navigation through code (go to definition, find references)

### 3. Improved Maintainability
- Self-documenting code through type definitions
- Easier onboarding for new team members
- More confidence when making changes
- Clearer interfaces between components

### 4. Better Integration with Modern Libraries
- First-class support from React, Next.js, and most modern libraries
- Access to type definitions for third-party packages
- More accurate IntelliSense for imported modules

## Adding TypeScript to an Existing Next.js Project

### Basic Setup

1. Install TypeScript and type definitions:
```bash
npm install --save-dev typescript @types/react @types/node @types/react-dom
```

2. Create a `tsconfig.json` file in the root directory:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

3. Rename files incrementally:
   - `.js` → `.ts` for utility files
   - `.jsx` → `.tsx` for React components

### Example: Converting a React Component

#### Before (JavaScript):
```jsx
import React from 'react';

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img 
        src={project.coverImage} 
        alt={project.title} 
        onError={(e) => {
          e.target.src = '/placeholder.svg';
        }}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
```

#### After (TypeScript):
```tsx
import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images?: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img 
        src={project.coverImage} 
        alt={project.title} 
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = '/placeholder.svg';
        }}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
```

## Gradual Adoption Strategy

1. Start with the most critical components or those with complex props
2. Create interfaces for your data models (projects, gallery items, etc.)
3. Add type annotations to utility functions
4. Allow TypeScript to coexist with JavaScript using the `allowJs: true` option
5. Enable stricter type checking gradually by adjusting `tsconfig.json`

## TypeScript with Next.js API Routes

```tsx
// pages/api/projects.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | { message: string }>
) {
  try {
    // Fetch projects logic
    const projects: Project[] = [/* project data */];
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load projects' });
  }
}
```

## Resources for Learning TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js TypeScript Documentation](https://nextjs.org/docs/basic-features/typescript)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) 