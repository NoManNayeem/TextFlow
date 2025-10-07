'use client';

import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Bot,
  Users,
  Award,
  MapPin,
  Calendar,
  Building,
  Star,
  ChevronRight,
} from 'lucide-react';

export default function NayeemPortfolio() {
  const skills = {
    'Web & Mobile': [
      'React',
      'Next.js',
      'Node.js',
      'React Native',
      'Tailwind CSS',
      'JavaScript',
      'Python',
    ],
    'AI & ML': [
      'TensorFlow',
      'PyTorch',
      'LangChain',
      'Hugging Face',
      'OpenCV',
      'Generative AI',
    ],
    'Cloud & DevOps': [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Google Cloud',
    ],
    'Data Science': [
      'Pandas',
      'PySpark',
      'Hadoop',
      'SQL Server',
      'MySQL',
      'Data Visualization',
    ],
  };

  const experiences = [
    {
      title: 'Senior Software Development Engineer',
      company: 'JB Connect Ltd.',
      period: 'Nov 2024 - Present',
      description:
        'Leading software development initiatives, managing full SDLC, and integrating complex systems.',
      achievements: ['API Integration', 'System Architecture', 'Team Leadership'],
    },
    {
      title: 'Project Lead (Digimart)',
      company: 'hSenid Mobile Solutions',
      period: 'Aug 2023 - Oct 2024',
      description:
        'Pioneered Digimart development, enhancing telco product usage and revenue by 70%.',
      achievements: [
        '70% Revenue Increase',
        'Cross-functional Leadership',
        'Grameenphone Partnership',
      ],
    },
    {
      title: 'Telco Data & Product Development Specialist',
      company: 'ADA (Axiata Digital Bangladesh)',
      period: 'Aug 2021 - Aug 2023',
      description:
        'Spearheaded SMS Automation projects with 200% efficiency improvement.',
      achievements: [
        '200% Efficiency Gain',
        '5 Enterprise Apps',
        '20% Customer Engagement Boost',
      ],
    },
    {
      title: 'Tech Consultant',
      company: 'Blockstak.ai',
      period: 'Jul 2023 - Present',
      description:
        'Guiding AI engineers in developing advanced AI-driven solutions.',
      achievements: ['RAG Chatbot', '35% Engagement Increase', 'Enterprise Applications'],
    },
  ];

  const projects = [
    {
      name: 'Digimart',
      description:
        'Telco Products and Payment Platform enabling revenue generation through telecom asset integration',
      tech: ['React', 'Node.js', 'Payment Gateway', 'Telecom APIs'],
      link: 'https://dev.digimart.store',
    },
    {
      name: 'MABNIS-AI',
      description:
        'Generative AI Omni-Channel Solution (ERP) with NextJS frontend and DRF backend',
      tech: ['Next.js', 'Django', 'AI/ML', 'ERP'],
      link: '#',
    },
    {
      name: 'DataAlchemyLab',
      description:
        'Open-source educational repository for SQL, Python, and data science tutorials',
      tech: ['Python', 'SQL', 'Tutorials', 'Open Source'],
      link: 'https://github.com/NoManNayeem/DataAlchemyLab',
    },
    {
      name: 'FlaSQL',
      description:
        'MS SQL Server monitoring platform with real-time insights and database management',
      tech: ['Flask', 'SQL Server', 'Monitoring', 'Real-time'],
      link: '#',
    },
  ];

  const certifications = [
    'OpenCV Bootcamp - OpenCV University (2024)',
    'Diploma in Project Management - Alison (2023)',
    'Fundamentals of Waterfall Project Management - PMI (2023)',
    'Google Cloud Big Data and Machine Learning Fundamentals',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Nayeem Islam</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Engineering Tomorrow, Today!</p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Full-Stack Developer | AI Strategist | Tech Consultant | Community Architect
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Telecom Expert
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Generative AI
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:islam.nayeem@outlook.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="https://nayeem-islam.vercel.app/Resume/Nayeem_Islam_Lead_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Download Resume
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                With over 5 years of experience, I am a dynamic force in transforming bold ideas into reality across diverse sectors including <strong>Telecommunications</strong>, <strong>AdTech</strong>, <strong>OTT</strong>, <strong>Omnichannel</strong>, <strong>FinTech</strong>, and <strong>Generative AI</strong>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                My deep expertise in Python and JavaScript enables me to turn data into actionable insights and innovative, user-centric solutions. I thrive on the challenge of integrating cutting-edge technology with business strategies to drive growth and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">+880 1781912704</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Code className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">70%</h3>
                <p className="text-gray-600 dark:text-gray-400">Revenue Increase with Digimart</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Database className="text-green-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">200%</h3>
                <p className="text-gray-600 dark:text-gray-400">Efficiency Improvement</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Bot className="text-purple-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">5+</h3>
                <p className="text-gray-600 dark:text-gray-400">Enterprise AI Applications</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Users className="text-red-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">35%</h3>
                <p className="text-gray-600 dark:text-gray-400">Customer Engagement Boost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology stack spanning modern web development, AI/ML, cloud infrastructure, and data science
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Leading technology initiatives across telecom, AI, and enterprise solutions
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Innovative solutions spanning telecom, AI, and enterprise applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <Award className="text-yellow-600 flex-shrink-0" size={24} />
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 text-blue-100">Ready to transform your ideas into innovative solutions?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:islam.nayeem@outlook.com"
              className="flex items-center gap-3 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <Mail size={20} />
              islam.nayeem@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/nayeemislam60053"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/NoManNayeem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors font-medium"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://medium.com/@nomannayeem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors font-medium"
            >
              <ExternalLink size={20} />
              Medium
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">© 2025 Nayeem Islam. Engineering Tomorrow, Today!</p>
        </div>
      </footer>
    </div>
  );
}


