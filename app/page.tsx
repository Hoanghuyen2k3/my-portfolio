'use client';

import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, Code2Icon, DatabaseIcon, BrainCircuitIcon, MonitorIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
      title: "Project 1",
      description: "Full-stack web application for task management",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/username/project1",
      demo: "https://project1-demo.com",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Project 2",
      description: "Machine learning model for image classification",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/username/project2",
      demo: "https://project2-demo.com",
      image: "/api/placeholder/600/400"
    }
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

  const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLast }) => (
    <motion.div 
      className="relative flex items-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mr-4">
        <motion.div 
          className="w-3 h-3 bg-pink-500 rounded-full"
          whileHover={{ scale: 1.5 }}
        ></motion.div>
        {!isLast && <div className="w-0.5 h-full bg-pink-200"></div>}
      </div>
      <div className="pb-8">
        <p className="text-sm text-gray-500">{year}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );

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
              {['linkedin', 'github', 'email'].map((platform) => (
                <motion.div
                  key={platform}
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