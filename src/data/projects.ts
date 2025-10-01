export interface Project {
  id: string
  title: string
  category: string
  year: string
  tools: string[]
  image: string
  images: string[]
  description: string
  fullDescription: string
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    year: '2024',
    tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    ],
    description: 'A modern e-commerce platform with advanced filtering and real-time inventory management.',
    fullDescription: 'Built a full-stack e-commerce platform featuring advanced product filtering, real-time inventory tracking, secure payment integration, and a responsive admin dashboard. The platform handles thousands of products with optimized search and filtering capabilities.',
    link: 'https://example.com',
    github: 'https://github.com/example/ecommerce',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    year: '2024',
    tools: ['React Native', 'Firebase', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
    ],
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals.',
    fullDescription: 'Developed a comprehensive fitness tracking application with workout logging, nutrition tracking, progress visualization, and social features. Integrated with health APIs for automatic activity tracking.',
    link: 'https://example.com',
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    year: '2023',
    tools: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    ],
    description: 'Interactive analytics dashboard with real-time data visualization and custom reporting.',
    fullDescription: 'Created an enterprise analytics dashboard with customizable widgets, real-time data streaming, and advanced visualization options. Features include custom report generation, data export, and team collaboration tools.',
  },
  {
    id: 'social-media-app',
    title: 'Social Media Platform',
    category: 'Web Development',
    year: '2023',
    tools: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    ],
    description: 'A modern social networking platform with real-time messaging and content sharing.',
    fullDescription: 'Built a scalable social media platform with features including real-time messaging, post sharing, user profiles, follow system, and content discovery algorithms.',
  },
  {
    id: 'design-system',
    title: 'Design System',
    category: 'UI/UX Design',
    year: '2023',
    tools: ['Figma', 'React', 'Storybook', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    ],
    description: 'Comprehensive design system with reusable components and documentation.',
    fullDescription: 'Developed a complete design system including component library, design tokens, accessibility guidelines, and comprehensive documentation. Implemented in React with Storybook for component development.',
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot',
    category: 'Machine Learning',
    year: '2024',
    tools: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    ],
    description: 'Intelligent chatbot with natural language processing and contextual understanding.',
    fullDescription: 'Created an AI-powered customer service chatbot with natural language understanding, context retention, and integration with multiple platforms. Trained on custom datasets for domain-specific interactions.',
  },
]
