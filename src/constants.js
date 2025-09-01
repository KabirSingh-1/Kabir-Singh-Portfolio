
// ============================
// ✅ NAVIGATION LINKS
// ============================
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

// ============================
// ✅ SKILLS
// ============================
export const skills = [
  { name: 'HTML 5', icon: '/assets/HTML.png', alt: 'HTML Logo', level: 'Advanced' },
  { name: 'CSS 3', icon: '/assets/CSS.png', alt: 'CSS Logo', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: '/assets/tailwind.png', alt: 'Tailwind CSS Logo', level: 'Intermediate' },
  { name: 'JavaScript', icon: '/assets/JS.png', alt: 'JavaScript Logo', level: 'Advanced' },
  { name: 'React JS', icon: '/assets/React.png', alt: 'React Logo', level: 'Advanced' },
  { name: 'Node JS', icon: '/assets/Node.png', alt: 'Node.js Logo', level: 'Intermediate' },
  { name: 'Python', icon: '/assets/Python.png', alt: 'Python Logo', level: 'Intermediate' },
  { name: 'Java', icon: '/assets/JAVA.png', alt: 'Java Logo', level: 'Intermediate' },
  { name: 'MongoDB', icon: '/assets/MongoDB.png', alt: 'MongoDB Logo', level: 'Intermediate' },
  { name: 'OOP with Java', icon: '/assets/OOPs.png', alt: 'OOP Java Logo', level: 'Intermediate' },
  { name: 'Git & GitHub', icon: '/assets/Git.png', alt: 'Git Logo', level: 'Intermediate' },
  { name: 'Jenkins', icon: '/assets/Jenkins.png', alt: 'Jenkins Logo', level: 'Beginner' },
  { name: 'Docker', icon: '/assets/docker.png', alt: 'Docker Logo', level: 'Beginner' },
  { name: 'GitHub Actions', icon: '/assets/GitHubActions.png', alt: 'GitHub Actions Logo', level: 'Beginner' },
];

// ============================
// ✅ EXPERIENCES
// ============================
export const experiences = [
  {
    title: 'B.Tech in Computer Science',
    company_name: 'GL Bajaj Institute of Technology & Management',
    icon: '/assets/GL.png',
    iconBg: '#383E56',
    date: 'Aug 2021 - May 2025',
    points: [
      'Studied core subjects like Data Structures, Algorithms, OS, and Database Management.',
      'Developed projects using React.js, Node.js, and MongoDB.',
      'Participated in hackathons and coding competitions to enhance problem-solving skills.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company_name: 'Tech Startup Inc.',
    icon: 'https://picsum.photos/id/160/60/60', // Replace with actual logo
    iconBg: '#E6DEDD',
    date: 'June 2024 - Aug 2024',
    points: [
      'Developed and maintained web applications using React.js and Next.js.',
      'Worked closely with designers and PMs to deliver high-quality products.',
      'Ensured responsive design and cross-browser compatibility.',
    ],
  },
];

// ============================
// ✅ PROJECTS
// ============================
export const projects = [
  {
    name: 'AI-Powered E-commerce Platform',
    description:
      'A platform offering AI-driven recommendations and personalized shopping experience.',
    category: 'Web App',
    tags: [
      { name: 'React', color: 'text-blue-500' },
      { name: 'Firebase', color: 'text-yellow-500' },
      { name: 'Tailwind CSS', color: 'text-cyan-500' },
    ],
    image: 'https://picsum.photos/seed/project1/500/300',
    source_code_link: 'https://github.com/',
    live_demo_link: 'https://your-live-demo.com',
  },
  {
    name: '3D Portfolio Website',
    description:
      'Interactive 3D portfolio built with Three.js and Framer Motion for a dynamic UX.',
    category: 'Portfolio',
    tags: [
      { name: 'React', color: 'text-blue-500' },
      { name: 'Three.js', color: 'text-green-500' },
      { name: 'Framer Motion', color: 'text-pink-500' },
    ],
    image: 'https://picsum.photos/seed/project2/500/300',
    source_code_link: 'https://github.com/',
    live_demo_link: 'https://your-live-demo.com',
  },
  {
    name: 'Task Management App',
    description:
      'A tool for organizing tasks, deadlines, and progress tracking with a clean UI.',
    category: 'Productivity',
    tags: [
      { name: 'Next.js', color: 'text-white' },
      { name: 'MongoDB', color: 'text-green-500' },
      { name: 'TypeScript', color: 'text-blue-400' },
    ],
    image: 'https://picsum.photos/seed/project3/500/300',
    source_code_link: 'https://github.com/',
    live_demo_link: 'https://your-live-demo.com',
  },
];
