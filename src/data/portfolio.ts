/**
 * Central portfolio data — generated from Gokul's resume (Gokul_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gokul S',
  displayName: 'Gokul S',
  firstName: 'Gokul',
  seriesTag: 'Cyber Security | Ethical Hacking',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'ShaHack Security Lab',
  role: 'CyberSecurity | Ethical Hacking | Exploit Development',
  tagline: ['CyberSecurity | Ethical Hacking | Exploit Development'],
  intro:
    'A Cybersecurity student CGPA(8.11) focused on ethical hacking, web application security, network analysis, and vulnerability management. Building practical skills through security labs and hands-on projects.',
  location: 'Tamil Nadu,India',
  email: 'sgokul.network@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/gokulnetwork',
    github: 'https://github.com/ShaHack',
  },
  resumePdf: 'assets/Gokul_S_Cybersecurity_Analyst_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Gokul Dasari',
  },
  interests: ['', 'Penetration tester', 'Exploit Development'],
};

export const education = [
  {
    school: 'Park College of Engineering & Technology',
    place: 'Coimbatore,TamilNadu',
    degree: 'B.E CSE (Cyber Security)',
    period: 'Sept 2023 – Sept 2027',
    cgpa: '8.1/10',
  },
];

export const experience = [
  {
    company: 'Cybersecurity Labs & Practical Training',
    role: 'CTF',
    place: 'Coimbatore, Tamil Nadu',
    period: '2026 – Present',
    points: [
      'Practicing web application security testing in authorized labs using Burp Suite and PortSwigger Web Security Academy.',
      'Learning SQL injection identification, testing methodology, and remediation.',
      'Practicing network reconnaissance and traffic analysis using Nmap and Wireshark.',
      'Studying vulnerability assessment, risk prioritization, and remediation workflows.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'apk-analysis',
    title: 'APK Analysis Project',
    year: '2026',
    genre: 'Cybersecurity • Android Security',
    logline:
      'A mobile security project focused on analysing Android application packages to investigate potential security risks.',
    stack: ['Android APK', 'Security Analysis'],
    build: [
      'Explores Android application package analysis to understand application structure and identify potential security concerns.',
      'Focuses on learning mobile application security assessment techniques.',
    ],
    features: [
      'Android application package analysis',
      'Mobile application security investigation',
      'Security risk awareness',
    ],
    metrics: [],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'shield',
  },

  {
    id: 'anti-phishing-detection',
    title: 'Anti-Phishing Detection',
    year: '2026',
    genre: 'Cybersecurity • Phishing Detection',
    logline:
      'A security project focused on identifying potentially malicious links and helping users recognise phishing threats.',
    stack: ['Python', 'Phishing Detection', 'Web Security'],
    build: [
      'Explores methods for analysing suspicious URLs and identifying potential phishing indicators.',
      'Focuses on helping users recognise potentially unsafe websites before interacting with them.',
    ],
    features: [
      'Suspicious URL analysis',
      'Phishing threat identification',
      'Web safety awareness',
    ],
    metrics: [],
    palette: {
      from: '#24060b',
      via: '#6e0d1d',
      to: '#09070a',
      accent: '#ff3d5a',
    },
    motif: 'shield',
  },

  {
    id: 'cloud-ai-automation',
    title: 'Cloud AI Automation',
    year: '2026',
    genre: 'Artificial Intelligence • Desktop Automation',
    logline:
      'A personal AI assistant inspired by JARVIS that lets users interact with an assistant and launch software through commands.',
    stack: ['Python', 'AI Assistant', 'Desktop Automation'],
    build: [
      'Designed around an interactive AI assistant that accepts user commands and helps launch applications on a computer.',
      'Explores conversational interaction and desktop automation to make everyday software tasks easier.',
    ],
    features: [
      'Interactive AI assistant',
      'Command-based software launching',
      'Desktop application automation',
      'Conversational user interaction',
    ],
    metrics: [],
    palette: {
      from: '#120822',
      via: '#3d1a6e',
      to: '#07060c',
      accent: '#b98bff',
    },
    motif: 'flow',
  },

  {
    id: 'campus-shield',
    title: 'Campus Shield',
    year: '2026',
    genre: 'Cybersecurity • Fraud Detection • Risk Assessment',
    logline:
      'A platform designed to help students assess suspicious internship offers, certificates, and job descriptions before trusting them.',
    stack: [
      'Web Technologies',
      'Document Analysis',
      'Domain Age Analysis',
      'Risk Assessment',
    ],
    build: [
      'Designed a student-focused platform where users can upload internship offer letters, certificates, or job descriptions for risk assessment.',
      'Includes a risk-scoring concept to help identify potentially suspicious or fraudulent internship and employment opportunities.',
      'Uses domain-age information as one signal to help assess the credibility of websites associated with an opportunity.',
    ],
    features: [
      'Upload internship offer letters',
      'Upload certificates for assessment',
      'Analyse job descriptions',
      'Generate a risk score',
      'Check associated website domain age',
      'Help students identify potential internship and job scams',
    ],
    metrics: [],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'shield',
  },

  {
    id: 'sign-detection',
    title: 'Sign Detection System',
    year: '2026',
    genre: 'Accessibility • Computer Vision • Sign Recognition',
    logline:
      'An assistive communication system that recognises hand signs and converts them into words, spoken output, and written notes.',
    stack: [
      'Python',
      'Computer Vision',
      'Hand Sign Recognition',
      'Speech Output',
    ],
    build: [
      'Designed to recognise hand signs performed by people with speech impairments and translate recognised signs into words.',
      'Aims to convert recognised signs into spoken output to support communication with people who may not understand sign language.',
      'Includes a written-notes concept so recognised words can also be displayed as text.',
    ],
    features: [
      'Hand sign detection',
      'Sign-to-word conversion',
      'Text output for recognised signs',
      'Speech output for recognised words',
      'Assistive communication',
      'Accessibility-focused design',
    ],
    metrics: [],
    palette: {
      from: '#1c1003',
      via: '#6b3c06',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'tenants',
  },

  {
    id: 'security-flaws-automation',
    title: 'Security Flaws Automation',
    year: '2026',
    genre: 'Cybersecurity • Workflow Automation',
    logline:
      'A workflow automation project exploring ways to organise and streamline repetitive security assessment tasks.',
    stack: ['n8n', 'Workflow Automation', 'Cybersecurity'],
    build: [
      'Explores using n8n workflows to organise repetitive tasks associated with security assessment.',
      'Designed to make security-related workflows easier to manage and follow.',
    ],
    features: [
      'Workflow automation',
      'Security task organisation',
      'Repeatable assessment workflows',
    ],
    metrics: [],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },

  {
    id: 'automated-job-finder',
    title: 'Automated Job Finder and Apply',
    year: '2026',
    genre: 'Career Automation • n8n',
    logline:
      'An automated job discovery workflow designed to find relevant opportunities and organise job-search activities.',
    stack: ['n8n', 'Job Search Automation', 'Workflow Automation'],
    build: [
      'Designed around automating parts of the job-search process to identify opportunities relevant to a candidate’s target roles.',
      'Explores organising job listings and reducing repetitive manual job-search tasks.',
    ],
    features: [
      'Automated job discovery',
      'Relevant opportunity filtering',
      'Job listing organisation',
      'Workflow-based automation',
    ],
    metrics: [],
    palette: {
      from: '#120822',
      via: '#3d1a6e',
      to: '#07060c',
      accent: '#b98bff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
  id: 'sql-injection',
  title: 'SQL Injection Testing',
  org: 'Web Application Security Labs',
  detail: 'Practiced identifying and understanding SQL injection vulnerabilities in authorized testing environments.',
  laurel: 'Web Security Practice',
},
{
  id: 'web-development',
  title: 'Web Development Experience',
  org: 'Web Development',
  detail: 'Three years of web development experience. Add specific technologies and projects that you can verify.',
  laurel: 'Development Experience',
},
{
  id: 'email-security',
  title: 'Email Security Awareness',
  org: 'Cybersecurity Learning',
  detail: 'Studied email spoofing, phishing indicators, and email security concepts.',
  laurel: 'Security Fundamentals',
},
{
  id: 'dos-security',
  title: 'Denial-of-Service Security',
  org: 'Cybersecurity Learning',
  detail: 'Learning about DoS and DDoS attacks, service availability, and defensive mitigation.',
  laurel: 'Defensive Security',
},
{
  id: 'social-engineering',
  title: 'Social Engineering Awareness',
  org: 'Cybersecurity Learning',
  detail: 'Studied phishing, baiting, and vishing techniques to understand social engineering risks.',
  laurel: 'Security Awareness',
},
{
  id: 'authentication-security',
  title: 'Authentication Security Testing',
  org: 'Authorized Security Labs',
  detail: 'Learning about OTP verification weaknesses and authentication controls in authorized test environments.',
  laurel: 'Application Security',
},
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'ISC2',
    name: 'Certified in Cybersecurity (CC)',
    link: '',
  },
  {
    issuer: 'Cappricios eC University',
    name: 'Cybersecurity & Ethical Hacking — Training Completion',
    link: '',
  },
  {
    issuer: 'Fortinet Training Institute',
    name: 'FCF - Getting Started in Cybersecurity 2.0 Self-Paced',
    link: '',
  },
  {
    issuer: 'Simplilearn SkillUp',
    name: 'Introduction to Cyber Security',
    link: '',
  },
  {
    issuer: 'Great Learning',
    name: 'Advanced Cyber Security - Threats and Governance',
    link: '',
  },
  {
    issuer: 'Great Learning',
    name: 'Cyber Forensics',
    link: '',
  },
  {
    issuer: 'Adaovi',
    name: 'Cyber Security Training',
    link: '',
  },
  {
    issuer: 'Koenig',
    name: 'Threats to Trust - How ISO 27001 Strengthens Cybersecurity & Reduces Risks — Webinar Participation',
    link: '',
  },
  {
    issuer: 'GUVI / Naan Mudhalvan / Anna University',
    name: 'Learnathon — Certificate of Participation',
    link: '',
  },
  {
    issuer: 'Cursa',
    name: 'Cyber Security CISSP Exam by CVSimpson — Course Completion',
    link: '',
  },
  {
    issuer: 'Cursa',
    name: 'Android Bug Bounty Hunting: Hunt Like a Rat — Course Completion',
    link: '',
  },
  {
    issuer: 'EC-Council Continuing Education',
    name: 'Cisco LABS Crash Course — Course Completion',
    link: '',
  },
]
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Security assessment and defensive security',
    skills: [
      { name: 'Vulnerability Assessment', mono: 'VA' },
      { name: 'Penetration Testing Fundamentals', mono: 'PT' },
      { name: 'OWASP Top 10', mono: 'OW' },
      { name: 'Network Security', mono: 'NS' },
      { name: 'Web Application Security', mono: 'WA' },
      { name: 'Unauthorized Access Detection', mono: 'AD' },
    ],
  },
  {
    id: 'security-tools',
    title: 'Security Tools',
    subtitle: 'Tools for security testing and investigation',
    skills: [
      { name: 'Wireshark', mono: 'Ws' },
      { name: 'Nmap', mono: 'Nm' },
      { name: 'Burp Suite', mono: 'Bs' },
      { name: 'Splunk', mono: 'Sp' },
      { name: 'Autopsy', mono: 'Au' },
      { name: 'FTK Imager', mono: 'FT' },
    ],
  },
  {
    id: 'networking-os',
    title: 'Networking & Operating Systems',
    subtitle: 'Network fundamentals and system environments',
    skills: [
      { name: 'Networking Fundamentals', mono: 'NF' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Windows', mono: 'Wn' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    subtitle: 'Scripting and text-pattern analysis',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Bash Scripting', mono: 'Sh' },
      { name: 'Regular Expressions', mono: 'Re' },
    ],
  },
  {
    id: 'web-technologies',
    title: 'Web Technologies',
    subtitle: 'Core web development technologies',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'version-control-automation',
    title: 'Version Control & Automation',
    subtitle: 'Source control and workflow automation',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'n8n', mono: 'N8' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'Networking': [
    'Networking fundamentals',
    'Nmap network scanning practice',
    'Wireshark traffic analysis practice',
  ],

  'Linux': [
    'Linux command-line fundamentals',
    'Kali Linux lab environment',
    'Bash scripting fundamentals',
  ],

  'Python': [
    'Python fundamentals',
    'Cybersecurity scripting practice',
  ],

  'Web Application Security': [
    'OWASP Top 10 concepts',
    'PortSwigger Web Security Academy',
    'Burp Suite practice',
  ],

  'SQL Injection': [
    'SQL injection fundamentals',
    'PortSwigger SQL injection labs',
    'SQLMap practice in authorized labs',
  ],

  'Penetration Testing': [
    'Ethical hacking fundamentals',
    'Burp Suite',
    'Nmap',
    'Authorized security lab practice',
  ],

  'Vulnerability Assessment': [
    'Vulnerability identification fundamentals',
    'Qualys vulnerability management learning',
  ],

  'Security Analysis': [
    'Wireshark packet analysis',
    'Network traffic inspection',
    'Security event investigation fundamentals',
  ],

  'Git / GitHub': [
    'Git version control',
    'GitHub project management',
  ],

  'HTML': [
    'Web fundamentals',
    'Web application structure',
  ],

  'CSS': [
    'Web styling fundamentals',
  ],

  'JavaScript': [
    'JavaScript fundamentals',
    'Web application behavior',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Cybersecurity Foundations',
    period: '2023–2024',
    synopsis:
      'Building a foundation in computer science, networking, programming, and information security.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Started developing programming, computer networking, operating system, and cybersecurity fundamentals.',
        tags: ['Networking', 'Programming', 'Security Fundamentals'],
        runtime: '2023–2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Defender',
        description:
          'Studied core cybersecurity principles, common threats, secure computing, and defensive security practices.',
        tags: ['Cybersecurity', 'Threats', 'Defense'],
        runtime: '2024',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Linux Terminal',
        description:
          'Practiced Linux commands, Windows environments, and basic scripting for cybersecurity tasks.',
        tags: ['Linux', 'Windows', 'Python', 'Bash'],
        runtime: '2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Ethical Hacking & Security Testing',
    period: '2024–2025',
    synopsis:
      'Developing practical skills in reconnaissance, web security, vulnerability identification, and security analysis.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Reconnaissance',
        description:
          'Practiced network reconnaissance and service discovery using Nmap in authorized learning environments.',
        tags: ['Nmap', 'Reconnaissance', 'Networking'],
        runtime: '2024–2025',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Web Tester',
        description:
          'Explored web application testing with Burp Suite and learned the OWASP Top 10 web security risks.',
        tags: ['Burp Suite', 'OWASP Top 10', 'Web Security'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Packet Analyst',
        description:
          'Used Wireshark to inspect network traffic and understand suspicious connections and attack patterns.',
        tags: ['Wireshark', 'Traffic Analysis', 'Network Security'],
        runtime: '2025',
        palette: jade,
      },
      {
        code: 'S02 E04',
        title: 'The Security Trainee',
        description:
          'Completed structured cybersecurity and ethical hacking training through internship and practical learning programs.',
        tags: ['Ethical Hacking', 'Vulnerability Assessment', 'Training'],
        runtime: '2024–2025',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Security Projects',
    period: '2025–2026',
    synopsis:
      'Applying cybersecurity knowledge to practical projects focused on network monitoring, scam detection, and information credibility.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Network Security Honeypot Lab',
        description:
          'Designed a honeypot lab to observe unauthorized access attempts and analyze captured network activity using Wireshark.',
        tags: ['Honeypot', 'Wireshark', 'Network Defense'],
        runtime: 'Project',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Campus Shield',
        description:
          'Developed a platform to help students assess suspicious internship and job opportunities using URL analysis, risk scoring, and domain-age information.',
        tags: ['Scam Detection', 'URL Analysis', 'Risk Scoring'],
        runtime: 'Project',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'Fact Checker Browser Extension',
        description:
          'Built a browser extension using HTML, CSS, and JavaScript to help users assess online claims and source credibility.',
        tags: ['Browser Extension', 'JavaScript', 'Information Verification'],
        runtime: 'Project',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Security Operations & Investigation',
    period: '2025–2026',
    synopsis:
      'Expanding practical knowledge in vulnerability assessment, security monitoring, digital forensics, and incident investigation.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Vulnerability Analyst',
        description:
          'Developing an understanding of vulnerability identification, risk prioritization, and remediation fundamentals.',
        tags: ['Vulnerability Assessment', 'Risk Analysis', 'Remediation'],
        runtime: 'Ongoing Learning',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The SOC Learner',
        description:
          'Learning security event monitoring and log analysis concepts, with exposure to Splunk and defensive security workflows.',
        tags: ['SOC', 'Splunk', 'Log Analysis'],
        runtime: 'Ongoing Learning',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Digital Investigator',
        description:
          'Exploring digital forensic investigation tools, including Autopsy and FTK Imager, through learning and training.',
        tags: ['Digital Forensics', 'Autopsy', 'FTK Imager'],
        runtime: 'Ongoing Learning',
        palette: violet,
      },
      {
        code: 'S04 E04',
        title: 'The Certified Learner',
        description:
          'Completed cybersecurity learning and training credentials from ISC2, Fortinet Training Institute, Adaovi, and EC-Council.',
        tags: ['ISC2 CC', 'Fortinet', 'Adaovi', 'EC-Council'],
        runtime: '2024–2025',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Security Chapter',
    period: 'Current Focus',
    synopsis:
      'Preparing for cybersecurity opportunities by strengthening hands-on skills, project documentation, and professional readiness.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Penetration Tester',
        description:
          'Continuing to practice authorized security testing, web application assessment, and vulnerability analysis in controlled labs.',
        tags: ['Penetration Testing', 'Burp Suite', 'Security Labs'],
        runtime: 'Learning Roadmap',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Security Analyst',
        description:
          'Building toward entry-level security analyst and SOC roles through networking, log analysis, and incident response fundamentals.',
        tags: ['Security Analyst', 'SOC Analyst', 'Incident Response'],
        runtime: 'Career Goal',
        palette: ocean,
      },
      {
        code: 'S05 E03',
        title: 'The Continuous Learner',
        description:
          'Continuing cybersecurity labs, professional development, and portfolio improvements while completing a degree in Computer Science and Engineering (Cyber Security).',
        tags: ['Cybersecurity', 'Practical Labs', 'Career Development'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Career Focus',
    title: 'Cybersecurity',
    detail: 'Computer Science and Engineering — Cyber Security',
    palette: amber,
  },
  {
    label: 'Security Project',
    title: 'Campus Shield',
    detail: 'Internship and job scam detection using risk scoring and domain age',
    palette: crimson,
  },
  {
    label: 'Accessibility Project',
    title: 'Sign Detection System',
    detail: 'Recognizes hand signs and converts them into text and spoken words',
    palette: ocean,
  },
  {
    label: 'AI Assistant',
    title: 'Cloud AI',
    detail: 'A Jarvis-style assistant for interacting with and opening software',
    palette: violet,
  },
  {
    label: 'Network Analysis',
    title: 'Wireshark',
    detail: 'Network traffic inspection and packet analysis',
    palette: jade,
  },
  {
    label: 'Web Security',
    title: 'Burp Suite',
    detail: 'Web application security testing and vulnerability learning',
    palette: amber,
  },
  {
    label: 'Security Fundamentals',
    title: 'Nmap',
    detail: 'Network discovery and service enumeration in authorized environments',
    palette: crimson,
  },
  {
    label: 'Cybersecurity Training',
    title: 'Certified in Cybersecurity (ISC2 CC)',
    detail: 'Cybersecurity credential — use the exact title shown on your certificate',
    palette: ocean,
  },
  {
    label: 'Security Training',
    title: 'Ethical Hacking',
    detail: 'Cybersecurity and ethical hacking training completed through CappriciosEC University',
    palette: jade,
  },
  {
    label: 'Current Goal',
    title: 'Penetration Testing',
    detail: 'Building practical skills in authorized security testing and vulnerability assessment',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E CSE-Cyber Security',
    lines: [
      'Park College of Engineering and Technology',
      'Final-year Computer Science and Engineering student',
      'Focused on cybersecurity and ethical hacking',
    ],
    chips: ['Cyber Security', 'CSE', 'Final Year'],
  },
  {
    kicker: 'Skills',
    title: 'Security Toolkit',
    lines: [
      'Nmap · Wireshark · Burp Suite · Kali Linux',
      'Python · Bash · Linux · Networking',
      'Web security · SQL injection concepts · OWASP Top 10',
    ],
    chips: ['Nmap', 'Burp Suite', 'Wireshark', 'Python'],
  },
  {
    kicker: 'Training',
    title: 'Hands-on Security Learning',
    lines: [
      'Practicing authorized web application security testing',
      'Learning vulnerability assessment and risk analysis',
      'Using controlled labs to develop practical skills',
    ],
    chips: ['Ethical Hacking', 'PortSwigger Labs', 'Vulnerability Assessment'],
  },
  {
    kicker: 'Projects',
    title: 'Cybersecurity Projects',
    lines: [
      'Campus Shield — internship and job scam risk assessment',
      'Sign Detection System — converts hand signs into text and speech',
      'Cloud AI — a Jarvis-style assistant for interacting with software',
      'Fact Checker Browser Extension — helps assess online claims',
    ],
    chips: ['Campus Shield', 'Sign Detection', 'Cloud AI', 'Browser Extension'],
  },
  {
    kicker: 'Achievements',
    title: 'Learning Milestones',
    lines: [
      'Completed cybersecurity and ethical hacking training',
      'Participated in cybersecurity learning and awareness programs',
      'Continuously developing practical security skills',
    ],
    chips: ['Cybersecurity Training', 'Ethical Hacking', 'Continuous Learning'],
  },
  {
    kicker: 'Certified',
    title: 'Cybersecurity Credentials',
    lines: [
      'Certified in Cybersecurity — ISC2 (ISC22, as provided)',
      'Fortinet — FCF: Getting Started in Cybersecurity 2.0',
      'CappriciosEC University — Cybersecurity & Ethical Hacking training',
      'Cisco, Great Learning, and other course-completion credentials',
    ],
    chips: ['ISC2', 'Fortinet', 'Cisco', 'Great Learning'],
  },
  {
    kicker: 'Current mission',
    title: 'Ethical Hacking & Defense',
    lines: [
      'Preparing for entry-level cybersecurity opportunities',
      'Building skills in penetration testing and vulnerability management',
      'Developing knowledge of security operations and incident response',
    ],
    chips: ['Penetration Testing', 'Vulnerability Management', 'SOC Analyst'],
  },
];

export type ProfileId = 'Gokul' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'Gokul',
    name: 'Gokul S',
    blurb: 'Cyber Security | Ethical Hacking',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Cybersecurity skills, projects & qualifications firstt',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Security tools, technical projects & development',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'My cybersecurity journey and learning milestones',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Hacker • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
