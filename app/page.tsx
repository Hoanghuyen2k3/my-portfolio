'use client';

import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, Code2Icon, DatabaseIcon, BrainCircuitIcon, MonitorIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  company,
  location,
  description, 
  isLast = false 
}) => (
  <motion.div 
    className="relative flex min-h-[200px] items-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Timeline line and dot */}
    <div className="flex flex-col items-center mr-8">
      {/* Line */}
      <div className="absolute left-[11px] top-0 h-full">
        <div className="w-0.5 h-full bg-pink-500" />
      </div>
      {/* Dot */}
      <motion.div 
        className="relative z-10 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow-sm"
        whileHover={{ scale: 1.2 }}
      />
    </div>

    {/* Content */}
    <div className="flex-1 pb-12">
      <div className="bg-white rounded-lg p-0 pb-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-pink-500">{year}</p>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-md text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          {description.map((item, index) => (
            <li 
              key={`${company}-${index}`}
              className="flex items-start"
            >
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gray-400 mr-2" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);


const experiences = [
  {
    year: "2022 - Present",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    description: [
      "Led a team of 5 developers in rebuilding the company's flagship product using React and TypeScript",
      "Improved application performance by 40% through code optimization and implementing lazy loading",
      "Established CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    location: "New York, NY",
    description: [
      "Developed and maintained 3 major client-facing applications using Next.js and Node.js",
      "Implemented automated testing reducing bug reports by 30%",
      "Mentored 4 junior developers and led technical training sessions"
    ]
  },
  {
    year: "2018 - 2020",
    title: "Junior Developer",
    company: "StartUp Hub",
    location: "Boston, MA",
    description: [
      "Built responsive web applications using React and Redux",
      "Collaborated with UX team to implement new design system",
      "Contributed to open-source projects and internal tools"
    ]
  }
];

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills: SkillCategory = {
    frontend: {
      icon: <MonitorIcon className="w-8 h-8" />,
      title: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind"],
      color: "bg-pink-50"
    },
    backend: {
      icon: <DatabaseIcon className="w-8 h-8" />,
      title: "Backend",
      items: ["Node.js", "Python", "MongoDB", "SQL"],
      color: "bg-yellow-50"
    },
    tools: {
      icon: <Code2Icon className="w-8 h-8" />,
      title: "Tools",
      items: ["Git", "Docker", "AWS", "Jest"],
      color: "bg-green-50"
    },
    other: {
      icon: <BrainCircuitIcon className="w-8 h-8" />,
      title: "Other",
      items: ["Agile", "CI/CD", "Problem Solving", "Team Work"],
      color: "bg-blue-50"
    }
  };

  const projects: Project[] = [
    {
      title: "Cloud based smart mornitoring system",
      description: "The smart room system enhances environmental control by monitoring temperature, humidity, light, oxygen, and occupancy. With integrated hardware, software, and cloud solutions, it features secure DNN-based facial recognition for authentication and a user-friendly website and mobile app for controlling room settings.",
      technologies: ["C", "C++", "Python", "Flutter", "Firebase", "Deep Neural Networks (DNN)", "Arduino IDE", "Networking", "Machine Learning", "Internet of Things"],
      github: "https://github.com/Hoanghuyen2k3/Cloud-based-smart-monitoring-system",
      demo: "https://youtu.be/PrwEOURVKtA?autoplay=1&mute=1",
      image: "/gif/cloud1.png"
    },
    {
      title: "So you want to be an auditor",
      description: "The app provides an engaging, gamified approach to understanding the Canadian tax system, helping immigrants, young adults, and teenagers navigate tax education through interactive levels, challenges, and an AI chatbot for support.",
      technologies: ["ReactJS", "Python", "Redis", "Cloudflare", "Docker", "FastAPI", "Artificial Intelligence", "Natural Language Processing", "Hackathon SheHacks+8"],
      github: "https://github.com/So-you-want-to-be-an-auditor/So-you-want-to-be-an-auditor",
      demo: "https://42e23502.so-you-want-to-be-an-auditor.pages.dev/",
      image: "/gif/so1.png"
    },
    {
      title: "HiFive",
      description: "HiFive is a collection of five interactive games designed to challenge and entertain users. It includes an unbeatable Tic Tac Toe powered by the Minimax algorithm, a real-time Rock-Paper-Scissors game using TensorFlow and webcam detection, a fast Puzzle game with A* algorithm optimization, a classic memory card game, and an exciting Word Search challenge.",
      technologies: ["ReactJS", "Redux", "Python", "TensorFlow", "OpenCV", "HTML", "CSS/SCSS"],
      github: "https://github.com/Hoanghuyen2k3/hifive",
      demo: "https://hoanghuyen2k3.github.io/hifive/",
      image: "/gif/hifive1.png"
    },
    {
      title: "Memoritoo",
      description: "A Flashcard website leverages OpenAI to effortlessly create flashcards and generate quizzes based on user input. It incorporates the Pomodoro technique for efficient learning, offers customizable study modes, and enhances retention with visual aids and engaging AI-generated stories. Motivational quotes, versatile learning modes, and unique quiz formats like MindCraft and GeniusMode make learning both fun and effective.",
      technologies: ["ReactJS", "Redux,", "NodeJS", "OpenAI API", "HTML", "CSS/SCSS"],
      github: "https://github.com/Hoanghuyen2k3/memoritoo",
      demo: "https://hoanghuyen2k3.github.io/memoritoo/",
      image: "/gif/mem2.png"
    },
    {
      title: "Cancer Predictor",
      description: "Cancer Predictor ML is a machine learning project that uses Logistic Regression to predict the likelihood of breast cancer and diabetes, achieving over 95% accuracy. The project features two applications: one for breast cancer with over 97% accuracy, and another for diabetes, both offering dynamic, interactive graphs based on user input.",
      technologies: ["Python", "TensorFlow", "Pandas", "Numpy", "Matplotlib", "Jupyter Notebook", "Machine Learning"],
      github: "https://github.com/Hoanghuyen2k3/Cancer-predictor-ML",
      demo: "https://cancer-predictor.streamlit.app/",
      image: "/gif/cancer1.png"
    },
    {
      title: "VNHub",
      description: "VNhub is your ultimate travel companion, offering real-time weather forecasts, destination information, and AI-powered trip planning. Explore iconic locations and hidden gems in Vietnam and around the world, read user reviews, and get expert travel advice. Plan your next adventure effortlessly with personalized recommendations and expert-guided bookings.",
      technologies: ["ReactJS", "Redux,", "NodeJS", "OpenAI API", "Weather API", "HTML", "CSS/SCSS"],
      github: "https://github.com/Hoanghuyen2k3/VNhub",
      demo: "https://hoanghuyen2k3.github.io/VNhub/",
      image: "/gif/vn1.png"
    },
  ];

  const SkillCard: React.FC<{ skill: string; data: Skill }> = ({ skill, data }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${data.color} rounded-lg p-6 cursor-pointer`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center mb-4">
          {data.icon}
          <h3 className="text-xl font-semibold ml-2">{data.title}</h3>
        </div>
        <ul className="space-y-2">
          {data.items.map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-2 w-2 bg-gray-400 rounded-full mr-2"></div>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };


  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg overflow-hidden shadow-lg"
      >
        <div className="relative h-48 w-full">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <motion.div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex space-x-4">
            <Link 
              href={project.github}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-5 h-5 mr-1" />
              Code
            </Link>
            <Link 
              href={project.demo}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-1" />
              Live Demo
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.nav 
        className="fixed top-0 w-full bg-white shadow-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              Jane Doe
            </motion.h1>
            <div className="flex space-x-6">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-pink-500 transition-colors ${
                    activeSection === section ? 'text-pink-500' : 'text-gray-600'
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        <motion.section 
          className="pt-32 pb-20 px-4 bg-gradient-to-br from-pink-50 to-yellow-50"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm Jane! 👋
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              A passionate software engineer in my 20s, turning creative ideas into elegant solutions.
              Currently seeking new opportunities to make an impact in tech.
            </motion.p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-12"
              variants={fadeInUp}
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([key, data], index) => (
                <SkillCard key={key} skill={key} data={data} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Rest of the sections with similar motion components */}
        
        // Add this section in the return statement after the Skills section
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-12"
              variants={fadeInUp}
            >
              Experience
            </motion.h2>
            <div className="relative">
              {experiences.map((exp, index) => (
                <TimelineItem 
                  key={`${exp.company}-${exp.year}`}
                  year={exp.year}
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  description={exp.description}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-12"
              variants={fadeInUp}
            >
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={`project-${project.title}-${index}`}
                  project={project}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-20 px-4 bg-gradient-to-br from-pink-50 to-yellow-50"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect!</h2>
            <div className="flex justify-center space-x-8">
              {['linkedin', 'github', 'email'].map((platform, index) => (
                <motion.div
                  key={`${platform}-${index}`}  
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={`https://${platform}.com/username`}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform === 'linkedin' && <LinkedinIcon className="w-6 h-6 mr-2" />}
                    {platform === 'github' && <GithubIcon className="w-6 h-6 mr-2" />}
                    {platform === 'email' && <MailIcon className="w-6 h-6 mr-2" />}
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;