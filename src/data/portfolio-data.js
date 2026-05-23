export const portfolioData = {
  // Personal Info
  name: "Mohamed Shaheel",
  title: "AI & Machine Learning Developer",
  tagline: "Building Real-World Intelligent Systems Through AI, Computer Vision & Deep Learning",
  email: "mohamedshaheel08@gmail.com",

  // Social Links
  social: {
    github: "https://github.com/Shaheel-08",
    linkedin: "https://www.linkedin.com/in/mohamed-shaheel-278aa8309/",
    leetcode: "https://leetcode.com/u/Mohamedshaheel/",
  },

  // Hero Section
  hero: {
    buttons: [
      {
        label: "Resume",
        variant: "primary",
        icon: "Download",
        href: "/resume.pdf",
        download: true,
      },
      {
        label: "GitHub",
        variant: "secondary",
        icon: "Github",
        href: "https://github.com/Shaheel-08",
        external: true,
      },
      {
        label: "LinkedIn",
        variant: "ghost",
        icon: "Linkedin",
        href: "https://www.linkedin.com/in/mohamed-shaheel-278aa8309/",
        external: true,
      },
      {
        label: "LeetCode",
        variant: "ghost",
        icon: "Code",
        href: "https://leetcode.com/u/Mohamedshaheel/",
        external: true,
      },
    ],
    stats: "150+ Problems Solved on LeetCode",
  },

  // About Section
  about: {
    title: "About Me",
    description: [
      "I'm a passionate AI and Machine Learning developer with expertise in building intelligent systems that solve real-world problems. With a strong foundation in computer vision, deep learning, and full-stack development, I create solutions that bridge the gap between cutting-edge AI research and practical applications.",
      "My journey in AI started with a curiosity about how machines can perceive and understand the world. Today, I leverage TensorFlow, OpenCV, and modern ML frameworks to develop systems that deliver measurable impact.",
    ],
    highlights: [
      {
        title: "AI Expertise",
        description: "Deep Learning, Computer Vision, Neural Networks, Model Optimization",
        icon: "Brain",
      },
      {
        title: "Full Stack",
        description: "React, Flask, Python, Git, Cloud Deployment",
        icon: "Code",
      },
      {
        title: "Problem Solver",
        description: "Algorithm Design, System Architecture, Production Debugging",
        icon: "Zap",
      },
    ],
  },

  // Experience Section
  experience: [
    {
      company: "InternPe",
      position: "Full Stack Developer Intern",
      type: "Remote Internship · 2 months",
      startDate: "2024",
      endDate: "2024",
      description: "Contributed to full-stack web development by building responsive frontend modules with React and integrating REST APIs. Implemented UI components with focus on user experience and accessibility. Participated in code reviews and collaborated with senior developers to optimize application performance and maintainability.",
      skills: ["React", "Python", "Flask", "REST APIs", "Responsive Design"],
    },
  ],

  // Technical Arsenal (Skills)
  skills: [
    { name: "Python", category: "Language", icon: "Code" },
    { name: "Java", category: "Language", icon: "Code" },
    { name: "Machine Learning", category: "AI/ML", icon: "Brain" },
    { name: "Deep Learning", category: "AI/ML", icon: "Brain" },
    { name: "TensorFlow", category: "Framework", icon: "Zap" },
    { name: "OpenCV", category: "Computer Vision", icon: "Eye" },
    { name: "Computer Vision", category: "AI/ML", icon: "Eye" },
    { name: "React.js", category: "Frontend", icon: "Palette" },
    { name: "Flask", category: "Backend", icon: "Server" },
    { name: "Git", category: "DevTools", icon: "GitBranch" },
    { name: "GitHub", category: "DevTools", icon: "Github" },
    { name: "VS Code", category: "DevTools", icon: "Code" },
    { name: "SQLite", category: "Database", icon: "Database" },
    { name: "LeetCode", category: "Problem Solving", icon: "Zap" },
  ],

  // Projects Section
  projects: [
    {
      id: 1,
      title: "PII Detection and Encryption System",
      description:
        "Advanced system for identifying and encrypting Personally Identifiable Information (PII) in text data. Implements machine learning algorithms for pattern recognition and secure encryption protocols for data protection.",
      category: "Security & AI",
      tags: ["Python", "Machine Learning", "Security", "Data Protection"],
      github: "https://github.com/Shaheel-08/PII-Encryption.git",
      image: "/projects/pii-detection.jpg",
      imagePrompt: "Cinematic cybersecurity workspace showing advanced secure laptop with glowing data encryption visualizations on screen, identity protection dashboard with neural network patterns, modern AI threat detection system interface, futuristic but realistic office environment with Indian startup aesthetic, cybersecurity UI elements with flowing data streams, ultra detailed, professional lighting, premium security technology theme",
      features: [
        "Real-time PII detection",
        "Multiple encryption methods",
        "Batch processing",
        "Security audit logs",
      ],
    },
    {
      id: 2,
      title: "Drone-Assisted Disaster Victim Identification",
      description:
        "Innovative AI-powered system using drone technology and computer vision to identify and assist disaster victims. Combines aerial surveillance with deep learning for rapid emergency response.",
      category: "Computer Vision & Rescue",
      tags: ["Computer Vision", "Deep Learning", "OpenCV", "TensorFlow"],
      github: "https://github.com/Shaheel-08/Disaster-Relief-Management-Through-Drone.git",
      image: "/projects/drone-disaster.jpg",
      imagePrompt: "Highly realistic cinematic disaster rescue scene inspired by flood-affected Sikkim hill regions of India. Shows rescue officers and engineers deploying drones over damaged landscape, flood destruction with collapsed roads, temporary rescue camps, civilians waiting for help, aerial surveillance drones scanning areas, AI monitoring systems in action, emergency response coordination center, Indian terrain realism, emotional storytelling, sharp cinematic lighting, ultra detailed, realistic human expressions, humanitarian technology theme",
      features: [
        "Real-time victim detection",
        "Drone integration",
        "Location mapping",
        "Emergency alerts",
      ],
    },
    {
      id: 3,
      title: "AI-Powered Skin Disease Classification",
      description:
        "Deep learning system for classifying 23 different skin diseases using advanced neural networks. Achieves high accuracy through TensorFlow and MobileNetV2, enabling accessible medical diagnosis.",
      category: "Medical AI",
      tags: ["Deep Learning", "TensorFlow", "MobileNetV2", "Medical AI"],
      liveDemo: "https://frontend-sigma-seven-58.vercel.app/",
      image: "/projects/skin-disease.jpg",
      imagePrompt: "Realistic medical AI diagnostic environment showing dermatology analysis system with AI-powered skin disease detection dashboard, close-up diagnostic interface, Indian healthcare environment, doctors reviewing AI predictions on modern displays, realistic medical imaging visualization, advanced healthcare AI system interface, hospital environment with clean medical aesthetic, ultra detailed, realistic professional lighting, clean medical technology theme",
      features: [
        "23 disease classification",
        "Real-time predictions",
        "Confidence scores",
        "Medical report generation",
      ],
    },
    {
      id: 4,
      title: "MedConnect Offline AI Chatbot",
      description:
        "Intelligent healthcare chatbot for rural communities with offline capabilities. Provides medical guidance, symptom analysis, and health information without internet connectivity.",
      category: "Healthcare & AI",
      tags: ["AI Chatbot", "Healthcare", "Python", "Offline-First"],
      github: "https://github.com/Shaheel-08/rural-health-ai.git",
      image: "/projects/medconnect.jpg",
      imagePrompt: "Realistic AI-powered rural healthcare assistance scene in India showing patients waiting for consultation at healthcare center, rural clinic environment, AI healthcare chatbot interface on displays, doctors using AI assistance tools, medicine recommendation systems, digital healthcare monitoring dashboard, personalized health plan visualization, cancer research data visualization, modern AI healthcare dashboard, Indian village healthcare atmosphere, compassionate realistic environment, cinematic lighting, ultra detailed, hopeful and socially impactful theme",
      features: [
        "Offline functionality",
        "Multi-language support",
        "Symptom analysis",
        "Health recommendations",
      ],
    },
  ],

  // Achievements Section
  achievements: [
    {
      title: "Winner — KPR Ignitron Trophy Hackathon",
      year: "2024",
      description: "First place winner for innovative AI/ML project implementation",
      icon: "Trophy",
    },
    {
      title: "Top 50 — Smart India Hackathon",
      year: "2024",
      description: "Selected among top 50 teams in national hackathon competition",
      icon: "Award",
    },
    {
      title: "Top 25 — KPR Innovcense",
      year: "2025",
      description: "Recognized as top 25 innovators in technical innovation challenge",
      icon: "Star",
    },
  ],

  // Education Section
  education: [
    {
      institution: "KPR Institute of Engineering and Technology",
      degree: "B.E Computer Science",
      startYear: "2023",
      endYear: "2027",
      cgpa: "8.05",
      details: "Specialization in AI & Machine Learning with focus on practical applications",
    },
  ],

  // Contact Section
  contact: {
    title: "Let's Transform Ideas Into Impact",
    description:
      "Have a project in mind? Let's collaborate and build something extraordinary together. I'm always interested in hearing about new opportunities and challenges.",
    email: "mohamedshaheel08@gmail.com",
    web3formsKey: "f9afe7ac-9029-42e3-a809-ca07142efefc",
  },
};
