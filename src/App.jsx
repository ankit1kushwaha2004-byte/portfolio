import React, { useState } from 'react';
import {
  Code,
  Database,
  GitBranch,
  ExternalLink,
  Mail,
  Phone,
  Check,
  Copy,
  ChevronRight,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Music,
  Users
} from 'lucide-react';

// Custom SVG Brand Icons
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FigmaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 38 57" fill="currentColor">
    <path fill="#EA4C1D" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
    <path fill="#F24E1E" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
    <path fill="#A259FF" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
    <path fill="#0ACF83" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
    <path fill="#1ABCFE" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
  </svg>
);

const PROJECTS = [
  {
    id: 'delux-song',
    title: 'Delux Song – Music Web App',
    category: 'Full-Stack Audio Streaming',
    tagline: 'Stream online audio, import customized links, and manage playlists dynamically.',
    imageIcon: Music,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'SQL', 'Figma', 'Vercel'],
    liveUrl: 'https://deluxsong.vercel.app/',
    githubUrl: null,
    summary:
      'Responsive audio streaming web application hosted on Vercel. Features a custom audio URL import module, dynamic playlist CRUD actions, HTML5 Web Audio controls, and SQL persistence.',
    highlights: [
      'URL Import Engine: Stream any custom audio track by pasting direct song links directly into the player interface.',
      'Playlist CRUD: Instant track re-ordering, queue updates, and deletion of unwanted songs without page reloads.',
      'SQL Persistence: Normalized relational schema for saving custom user playlists, track metadata, and audio source links.',
      'Engineered Audio Controls: Smooth scrub bar, volume sliders, track skipping, and dynamic audio duration listeners.',
      'Figma to Code: High-fidelity prototypes converted directly into clean, responsive Tailwind CSS components.'
    ]
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    category: 'Enterprise Web Dashboard',
    tagline: 'Streamlined employee onboarding, role assignments, and department tracking.',
    imageIcon: Users,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'SQL', 'Git', 'GitHub'],
    liveUrl: null,
    githubUrl: 'https://github.com/ankit1kushwaha2004-byte/employee-manangement-system-',
    summary:
      'Enterprise dashboard designed to streamline internal employee administration, attendance logs, and department hierarchy using relational SQL and responsive Next.js views.',
    highlights: [
      'Relational SQL Architecture: Designed tables with referential integrity for employees, departments, and attendance records.',
      'Complete Administration CRUD: Add, update credentials, change departments, and remove outdated records with modal confirmation.',
      'Fast Search & Multi-Column Filters: Implemented responsive debounced search and filtering for swift data lookup.',
      'Adaptive Interface: Clean Next.js dashboard UI with collapsible sidebars, status chips, and tabular data layouts.',
      'Strict Version Control: Maintained modular Git commit history with branch management hosted on GitHub.'
    ]
  }
];

const SKILLS_DATA = [
  {
    category: 'Frontend Engineering',
    icon: Code,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    skills: [
      { name: 'React.js', level: 90, note: 'Components, Hooks, Context API' },
      { name: 'Next.js', level: 85, note: 'App router, Server/Client components' },
      { name: 'JavaScript (ES6+)', level: 88, note: 'Async/Await, DOM manipulation, APIs' },
      { name: 'Tailwind CSS', level: 94, note: 'Utility-first styling & responsiveness' },
      { name: 'HTML5 & CSS3', level: 95, note: 'Semantic markup & modern layouts' }
    ]
  },
  {
    category: 'Database & Backend Foundations',
    icon: Database,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    skills: [
      { name: 'SQL', level: 82, note: 'Schema design, Joins, CRUD operations' },
      { name: 'Data Normalization', level: 80, note: 'Table integrity & indexing' },
      { name: 'REST APIs Integration', level: 88, note: 'JSON data parsing & state updates' }
    ]
  },
  {
    category: 'Design & Prototyping',
    icon: FigmaIcon,
    color: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    skills: [
      { name: 'Figma', level: 85, note: 'Wireframing, UI Layouts & Component Libraries' },
      { name: 'Responsive Web Design', level: 92, note: 'Mobile-first, Flexbox, CSS Grid' },
      { name: 'Design-to-Code Translation', level: 90, note: 'Pixel-perfect UI development' }
    ]
  },
  {
    category: 'Version Control & Workflow',
    icon: GitBranch,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    skills: [
      { name: 'Git & GitHub', level: 88, note: 'Branching, clean commit workflow' },
      { name: 'VS Code & CLI Tools', level: 90, note: 'Fast debugging, linting, extensions' },
      { name: 'Vercel Deployment', level: 86, note: 'CI/CD preview deployments' }
    ]
  }
];

const EXPERIENCE_BULLETS = [
  'Architected responsive, high-performance web applications using React.js and modern JavaScript standards.',
  'Translated design wireframes from Figma into production-ready, accessible, mobile-first interfaces using Tailwind CSS.',
  'Engineered database-driven features using SQL to manage structured data schemas and streamline CRUD operations.',
  'Integrated asynchronous REST APIs and audio streaming interfaces with robust client-side error handling.',
  'Maintained consistent version control practices utilizing Git and GitHub for modular codebases.'
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const phoneText = '+91 8595822122';
  const emailText = 'ankit1kushwaha2004@gmail.com';
  const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailText}`;
  const linkedinUrl = 'https://linkedin.com/in/ankit-kushwahas';
  const githubUrl = 'https://github.com/ankit1kushwaha2004-byte';

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(phoneText);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Hi Ankit,\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailText}&su=${subject}&body=${body}`, '_blank');
    setFormSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              AK
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Ankit Kushwaha
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-400 ml-2 font-mono bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={gmailDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5" />
              Direct Gmail
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 py-5 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-1"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href={gmailDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950"
              >
                <Mail className="w-4 h-4" /> Open in Gmail
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="relative z-10">
        <section id="about" className="pt-16 pb-20 md:pt-24 md:pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Available for Frontend & Web Roles
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Ankit Kushwaha</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-4">
              Frontend Developer & Web Application Architect
            </p>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
              Results-driven web developer with <strong className="text-slate-200 font-semibold">1 year of hands-on experience</strong> specializing in React.js, Next.js, and modern frontend architectures to build intuitive, fast, accessible digital products and full-featured dashboards.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                Explore Projects
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={gmailDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Connect via Gmail
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-all"
                title="GitHub Repositories"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Tech Stack Ticker */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-2">Core Stack:</span>
              {['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'SQL', 'Figma', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-slate-900/40 border-y border-slate-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">
                  <Briefcase className="w-4 h-4" />
                  Practical Background
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  1 Year of Hands-on Web Development
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  Throughout a focused year of active engineering, I have turned ideas and design concepts into fast, maintainable applications. My workflow bridges human-centric UI design with robust state management and SQL database architectures.
                </p>

                <div className="space-y-3.5">
                  {EXPERIENCE_BULLETS.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span className="text-sm text-slate-300 leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="w-24 h-24 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-cyan-400 mb-1">1+ Year</div>
                  <div className="text-sm font-semibold text-white mb-2">Hands-on Engineering</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dedicated focus building full-featured SPAs, streaming interfaces, and relational database dashboards with clean code and Git version control.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-xs text-slate-400">Maharshi Dayanand University (MDU)</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rohtak, Haryana. Foundational coursework in core programming, relational database systems (SQL), and web application structures.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                      <FigmaIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Design-First Engineering</h4>
                      <p className="text-xs text-slate-400">Figma to Pixel-Perfect Tailwind</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Prototyping interactive wireframes in Figma before implementing clean, accessible components that render fluidly across mobile and desktop.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Technical Skills & Tools</h2>
            <p className="text-slate-400 text-sm mt-3">
              Technologies and tools applied across frontend development, data architecture, and interface design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_DATA.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-900/70 border ${cat.borderColor} hover:bg-slate-900 transition-all`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-slate-800/90 ${cat.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-white">{cat.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between items-center text-xs mb-1.5">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="text-slate-400 font-mono">{skill.note}</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Portfolio</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Featured Projects</h2>
                <p className="text-slate-400 text-sm mt-2 max-w-xl">
                  Real-world web applications built with React, Next.js, relational SQL schemas, and mobile-first Tailwind design.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PROJECTS.map((proj) => {
                const ProjectIcon = proj.imageIcon;
                return (
                  <div
                    key={proj.id}
                    className="flex flex-col justify-between rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden shadow-xl shadow-black/40 group"
                  >
                    <div className={`p-6 sm:p-7 bg-gradient-to-br ${proj.gradient} border-b border-slate-800/70`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-md">
                          <ProjectIcon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950/80 text-cyan-400 border border-cyan-500/20">
                          {proj.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                        {proj.tagline}
                      </p>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-5">
                          {proj.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition shadow-md shadow-cyan-500/20"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}

                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 transition"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            GitHub Repo
                          </a>
                        )}

                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition ml-auto"
                        >
                          Architecture Details
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">Let's Connect</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Looking for a dedicated Frontend Developer with 1 year of hands-on experience in React.js, Tailwind CSS, and SQL? Feel free to reach out directly via Gmail or LinkedIn.
              </p>

              <div className="space-y-4">
                <a
                  href={gmailDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 group transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-400 font-medium">Direct Gmail</div>
                      <div className="text-sm font-semibold text-slate-200 truncate">{emailText}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0 transition" />
                </a>

                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                      <a href={`tel:${phoneText}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400">
                        {phoneText}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <LinkedinIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Professional Network</div>
                      <div className="text-sm font-semibold text-slate-200">linkedin.com/in/ankit-kushwahas</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition" />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Source Code</div>
                      <div className="text-sm font-semibold text-slate-200">github.com/ankit1kushwaha2004-byte</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill this out to generate an instant Gmail draft pre-addressed to <span className="text-cyan-400">{emailText}</span>.
                </p>

                {formSent ? (
                  <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">Gmail Draft Opened!</h4>
                    <p className="text-xs text-slate-300 mb-4">
                      Your message details have been passed directly to your Gmail compose window.
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message / Role Details</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Hello Ankit, we would love to speak with you regarding a Frontend Developer position..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Open Draft in Gmail
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{selectedProject.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 mb-6">{selectedProject.summary}</p>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-3">Key Technical Highlights</h4>
              <ul className="space-y-2.5">
                {selectedProject.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-cyan-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Live Application
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Explore Source Code
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="ml-auto px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Ankit Kushwaha. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href={gmailDirectUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              Gmail
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}