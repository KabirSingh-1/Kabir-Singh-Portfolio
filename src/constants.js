
// ============================
// ✅ NAVIGATION LINKS
// ============================
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'freelance', title: 'Freelance' },
  { id: 'experience', title: 'Experience' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'contact', title: 'Contact' },
];
// ============================
// ✅ SKILLS
// ============================
export const skills = [
  { name: 'html 5', icon: '/assets/html.png', alt: 'html Logo', level: 'Advanced' },
  { name: 'CSS 3', icon: '/assets/css.png', alt: 'CSS Logo', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: '/assets/tailwind.png', alt: 'Tailwind CSS Logo', level: 'Intermediate' },
  { name: 'JavaScript', icon: '/assets/JS.png', alt: 'JavaScript Logo', level: 'Advanced' },
  { name: 'React JS', icon: '/assets/React.png', alt: 'React Logo', level: 'Advanced' },
  { name: 'Node JS', icon: '/assets/Node.png', alt: 'Node.js Logo', level: 'Intermediate' },
  { name: 'Python', icon: '/assets/python.png', alt: 'Python Logo', level: 'Intermediate' },
  { name: 'Java', icon: '/assets/java.png', alt: 'Java Logo', level: 'Intermediate' },
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
    date: '2026-Batch',
    points: [
      'Studied core subjects like Data Structures, Algorithms, OS, and Database Management.',
      'Developed projects using React.js, Node.js, and MongoDB.',
      'Participated in hackathons and coding competitions to enhance problem-solving skills.',
    ],
  },
  {
    title: 'React Developer Intern',
    company_name: 'Appversal',
    icon: '/assets/appversal.png',
    iconBg: '#383E56',
    date: '18sep - 2025 to 17mar - 2026',
    points: [
  "Built and optimized responsive user interfaces using React.js, Tailwind CSS, and modern UI libraries.",
  "Integrated APIs and managed state effectively with React hooks, Context API, and Redux where required.",
  "Collaborated with backend team to connect REST APIs, ensuring seamless data flow and performance.",
  "Implemented reusable components and improved code quality through modular design and best practices.",
  "Worked with Git/GitHub for version control, feature branching, and code reviews.",
  "Enhanced user experience by adding animations, form validations, and interactive UI elements with Framer Motion.",
  "Contributed to live deployment workflows using tools like Netlify, Vercel, and Render.",
  "Participated in team discussions, sprint planning, and provided solutions to improve project scalability.",
]
,
  },
  {
    title: 'React Lead',
    company_name: 'AppStorys',
    icon: '/assets/appversal.png',
    iconBg: '#383E56',
    date: 'Mar 2026 - Present',
    points: [
      'Leading the React.js and Next.js development for core product features as React Lead.',
      'Architecting scalable, reusable component systems and enforcing best practices across the frontend team.',
      'Working on-site in Noida, Uttar Pradesh, collaborating closely with design and backend teams.',
      'Driving technical decisions around state management, performance optimization, and code quality.',
    ],
  },

];

// ============================
// ✅ PROJECTS
// ============================
export const projects = [
  {
    name: 'MehndiMuse',
    description:
      'MehndiMuse is a professional, fully responsive web application for a henna/mehndi artist. It features a beautiful portfolio, artist profiles, service details, and an appointment booking system',
    category: 'Web App',
    tags: [
      { name: 'JavaScript', color: 'text-blue-500' },
      { name: 'Node.js', color: 'text-yellow-500' },
      { name: 'HTML/CSS', color: 'text-cyan-500' },
    ],
    image: './assets/MehndiMuse.png',
    source_code_link: 'https://github.com/KabirSingh-1/MehndiMuse',
    live_demo_link: 'https://mehndimuse.art/',
  },
  {
    name: 'PragatiPath',
    description:
      'A citizen-centric platform to report & track civic issues with AI-powered classification and gamification',
    category: 'Web App',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Gemini', color: 'text-yellow-500' },
      { name: 'TailWindCSS', color: 'text-cyan-500' },
    ],
    image: './assets/pragatipath.png',
    source_code_link: 'https://github.com/KabirSingh-1/PragatiPath-',
    live_demo_link: 'https://pragati-path.netlify.app/',
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
    image: './assets/Portfolio.png',
    source_code_link: 'https://github.com/KabirSingh-1/Kabir-Singh-Portfolio',
    live_demo_link: 'https://kabir-singh.netlify.app/',
  },
  {
    name: 'Liberty Law',
    description:
      'Liberty Law: Your Freedom, Our Fight. Connect with top-tier legal defenders dedicated to protecting your rights and securing your liberty.',
    category: 'Law',
    tags: [
      { name: 'HTML/CSS', color: 'text-white' },
      { name: 'MongoDB', color: 'text-green-500' },
      { name: 'JavaScript', color: 'text-blue-400' },
    ],
    image: './assets/Liberty.png',
    source_code_link: 'https://github.com/Vidya20044pps/Liberty_Law-',
    live_demo_link: 'https://main--libertylaw.netlify.app/',
  },
];

// ============================
// ✅ FREELANCE PROJECTS
// ============================
export const freelanceProjects = [
  {
    name: 'Sikar Mehndi',
    description:
      'Luxury mehndi artistry business website specializing in Bridal, Arabic, Traditional, and Custom Mehndi designs, with online appointment booking.',
    category: 'Client Website',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Next.js', color: 'text-white' },
      { name: 'Tailwind CSS', color: 'text-cyan-500' },
    ],
    image: '/assets/SikarMehndi.png',
    live_demo_link: 'https://sikarmehndi.in/',
  },
  {
    name: 'BhaiLog',
    description:
      "Event and ticketing site for Desi Comedy Live's Bollywood comedy nights, with a rewards program, gallery, and ticket purchasing.",
    category: 'Client Website',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Next.js', color: 'text-white' },
      { name: 'Node.js', color: 'text-yellow-500' },
    ],
    image: '/assets/BhaiLog.png',
    live_demo_link: 'https://bhailog.desicomedylive.com/',
  },
  {
    name: 'Gurugram Mehndi',
    description:
      'Business website for a luxury mehndi artistry studio in Gurugram, featuring service listings, pricing, testimonials, and appointment booking.',
    category: 'Client Website',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Next.js', color: 'text-white' },
      { name: 'Tailwind CSS', color: 'text-cyan-500' },
    ],
    image: '/assets/GurugramMehndi.png',
    live_demo_link: 'https://gurugrammehndi.in/',
  },
  {
    name: 'Akshay Argade',
    description:
      'Premium real estate advisory website showcasing property listings, services, and consultation booking for a real estate business.',
    category: 'Client Website',
    tags: [
      { name: 'React.js', color: 'text-blue-500' },
      { name: 'Next.js', color: 'text-white' },
      { name: 'Tailwind CSS', color: 'text-cyan-500' },
    ],
    image: '/assets/AkshayArgade.png',
    live_demo_link: 'https://akshayargade.com/',
  },
];

// ============================
// ✅ CERTIFICATIONS (New Section)
// ============================
export const certifications = [
  {
    name: 'Cloud Virtual Internship',
    issuer: 'EduSkill',
    date: 'During Sep-Nov 2023',
    image: './assets/AWS-Cloud-Certificate.jpeg', 
    link: '#',
  },
  {
    name: 'AI-ML Virtual Internship ',
    issuer: 'EduSkill',
    date: 'During Apr-Jun 2024',
    image: '/assets/AI-ML.jpg', 
    link: 'https://www.freecodecamp.org/certification/your-username/javascript-algorithms-and-data-structures', 
  },
  {
    name: 'SAP Certified Associate - Back-End Developer - ABAP Cloud',
    issuer: 'SAP recognizes',
    date: 'Issued on: Sep 09, 2025',
    image: '/assets/SAP-ABAP.jpg', 
    link: 'https://www.credly.com/badges/45f5ebd7-68f9-4f78-a123-e67f8fb7e639', 
  },
  {
    name: 'Agentic AI Day - Hackathon-Finalist',
    issuer: 'HACK2SKILL',
    date: '26th-Jul-2025',
    image: '/assets/Hack2skill-Certificate.png', 
    link: 'https://certificate.hack2skill.com/user/aidayfinalist-1/2025H2S06AID-F01921', 
  },
  {
    name: 'SIH-2024 Internal Hackathon',
    issuer: 'GLBITM',
    date: '6th sep-2024',
    image: '/assets/SIH(2024).jpg', 
    link: '#', 
  },
  {
    name: 'HACK JNU 3.0 Certificate Of Participation',
    issuer: 'JNU',
    date: '27th-28th Jan-2024',
    image: '/assets/HackJnu.png', 
    link: 'https://certificate.givemycertificate.com/c/89c6c2ee-95fe-48d9-bbc4-e0feea3d5453',
  },
  {
    name: 'Certificate Of Participation ',
    issuer: 'GDSC-GLBITM',
    date: '5th-6th Dec-2023',
    image: '/assets/Dev-On.png', 
    link: 'https://certificate.givemycertificate.com/c/ba754dbf-93a4-4688-98f7-d43bbfd00ed0', 
  },
  {
    name: 'SQL (Basic) Certificate ',
    issuer: 'HackerRank',
    date: '21st July-2025',
    image: '/assets/SQL-Hackerank.png', 
    link: 'https://www.hackerrank.com/certificates/fdf80b117493', 
  },
  {
    name: ' Python (Basic) Certificate',
    issuer: 'HackerRank',
    date: '22 Jun-2025',
    image: '/assets/Python-Hackerank.png', 
    link: 'https://www.hackerrank.com/certificates/b54efb42e69d', 
  },
  {
    name: 'JavaScript (Basic) Certificate',
    issuer: 'HackerRank',
    date: '22 Jun-2025',
    image: '/assets/Java-Script-Hackerank.png', 
    link: 'https://www.hackerrank.com/certificates/aa63a75341a4', 
  },
];