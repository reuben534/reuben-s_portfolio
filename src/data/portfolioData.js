const baseUrl = import.meta.env.BASE_URL;

export const educationTimeline = [
  {
    title: 'Advanced Diploma in Applications Development',
    status: 'Completed',
    period: 'Completed',
    level: 'NQF Level 7',
    institution: 'Rosebank College',
  },
  {
    title: 'Diploma in Systems Development',
    status: 'Completed',
    period: 'Completed',
    level: 'NQF Level 6',
    institution: 'Boston City Campus',
  },
];

export const experienceTimeline = [
  {
    title: 'Freelance Developer',
    status: 'Current',
    period: '2020 - Present',
    description: 'Full-stack development specializing in MERN stack and ASP.NET Core applications. Building dynamic web solutions with focus on performance, security, and user experience.',
    level: 'Self-Employed',
    institution: 'Freelance',
  },
  {
    title: 'Control Room Operator',
    status: 'Completed',
    period: '2020 - 2024',
    description: 'Core operational role managing critical systems and workflows. Transitioned knowledge into software development focusing on process automation and system optimization.',
    level: 'Professional',
    institution: 'Industry Experience',
  },
];

export const projects = [
  {
    title: 'International Payment Portal',
    description: 'Application built with the MERN stack.',
    image: `${baseUrl}images/International_Payment_Portal.PNG`,
    link: 'https://youtu.be/2wTqomChTEM',
    cta: 'View Demo',
  },
  {
    title: 'EventEase App',
    description: 'Application built with ASP.NET Core MVC.',
    image: `${baseUrl}images/EvenEase.PNG`,
    link: 'https://youtu.be/Ebp0L9I9lhk',
    cta: 'View Demo',
  },
  {
    title: 'Ecommerce Website',
    description: 'Coming soon',
    image: 'https://via.placeholder.com/640x360?text=Ecommerce+Website',
    link: null,
    cta: null,
  },
  {
    title: 'Inventory Management',
    description: 'Coming soon',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIMVLA6IiqtdsdQx7mLWw3aN2g8sXL3_AdNXqCoNd379dnagwVjoy33qUNcgAV0oQrI1anPV2eOJ2s_fJMCKzuHp9IdcX5-Aab6sHe3R3qI5Zvh9J6ZIhyip-PNCTPN0B-hkyKHY66CGd4BPwBOjjzyRDPIwqg02QI3P931uQ--75L-Sd--3GUvJAJTSUToBKqMjONcpZLDXeCK1BlAELnjdPUN_2UlqHiihiVwp3WHWEyEYlPDN87OjCazgqK5NTSySBRBbLye9Wc',
    link: null,
    cta: null,
  },
];

export const skillsSections = [
  {
    heading: 'Full-Stack Development',
    icon: 'code',
    skills: [
      {
        title: 'MERN Stack',
        description: 'Building dynamic and responsive web applications with MongoDB, Express.js, React, and Node.js.',
      },
      {
        title: 'ASP.NET Core MVC',
        description: "Developing robust, scalable, and secure web applications using Microsoft's powerful framework.",
      },
    ],
  },
  {
    heading: 'Security Tools',
    icon: 'security',
    skills: [
      {
        title: 'MobSF',
        description: 'Automated mobile application security testing framework for Android & iOS.',
      },
      {
        title: 'ScoutSuite',
        description: 'Multi-cloud security auditing tool to assess cloud security posture.',
      },
      {
        title: 'SonarQube',
        description: 'Continuous code quality and security analysis for static code analysis.',
      },
    ],
  },
  {
    heading: 'DevOps & Cloud',
    icon: 'cloud',
    skills: [
      {
        title: 'Azure Deployment',
        description: 'Deploying and managing applications on Azure App Services, Functions, and managed cloud resources.',
      },
      {
        title: 'CI/CD Pipelines',
        description: 'Automating build, test, and deployment workflows with quality gates and release validation.',
      },
      {
        title: 'GitHub Actions',
        description: 'Quality-first automation using GitHub Actions for code validation, security checks, and deployment.',
      },
      {
        title: 'Playwright',
        description: 'Automated end-to-end testing for modern web applications.',
      },
      {
        title: 'JMeter',
        description: 'Performance and load testing for web applications and APIs.',
      },
    ],
  },
  {
    heading: 'Languages & Databases',
    icon: 'code',
    skills: [
      {
        title: 'Java',
        description: 'Object-oriented programming for backend services, tooling, and application logic.',
      },
      {
        title: 'C#',
        description: 'Robust application development for desktop, web, and cloud using the .NET ecosystem.',
      },
      {
        title: 'JavaScript',
        description: 'Dynamic front-end scripting and modern web application development.',
      },
      {
        title: 'HTML/CSS',
        description: 'Responsive web layout and styling for polished user experiences.',
      },
      {
        title: 'SQL / MySQL',
        description: 'Relational data modeling, querying, and database management.',
      },
    ],
  },
];

export const technologies = [
  { title: 'React', detail: 'Modern UI development with hooks and JSX.' },
  { title: 'Node.js', detail: 'JavaScript backend tooling and APIs.' },
  { title: 'Azure', detail: 'Cloud deployments, app services, and managed databases on Azure.' },
  { title: 'MongoDB', detail: 'Flexible NoSQL data modeling for web apps.' },
  { title: 'ASP.NET Core', detail: 'Enterprise-grade server-side web applications.' },
  { title: 'GitHub Actions', detail: 'Automated CI/CD pipelines and repository workflows.' },
];
