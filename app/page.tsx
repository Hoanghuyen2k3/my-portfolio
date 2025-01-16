'use client';

import React, { useState, useRef } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  Code2Icon,
  DatabaseIcon,
  BrainCircuitIcon,
  MonitorIcon,
  ServerIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { SendIcon, PhoneIcon } from 'lucide-react';

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  company,
  location,
  tag,
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
        {/* Tag Section */}
        <motion.div className="flex flex-wrap gap-2 mb-4">
          {tag && tag.split(",").map((tech, i) => (  // Assuming `tag` is a comma-separated string
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
            >
              {tech.trim()}  {/* Trim to remove any extra spaces */}
            </motion.span>
          ))}
        </motion.div>

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

// Add education data
const education: Education = {
  degree: "Bachelor of Engineering Information Systems",
  school: "Humber Polytechnic",
  location: "Toronto, CA",
  period: "2022 - 2026",
  gpa: "3.7/4.0",
  expectedGraduation: "May 2026",
  major: "Internet of Things",
  scholarships: [
    "Renewable degree entrance scholarship",
    "FAST Bachelor of Engineering diversity leadership scholarship"
  ]
};

// Education Section Component
const EducationSection: React.FC<{ education: Education }> = ({ education }) => (
  <motion.div 
    className="bg-white rounded-lg p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{education.degree}</h3>
          <p className="text-lg text-gray-700">{education.school}</p>
          <p className="text-md text-gray-600">{education.location}</p>
        </div>
        <div className="text-right">
          {/* <p className="text-pink-500 font-medium">{education.period}</p> */}
          <p className="text-pink-600 font-medium">Expected: {education.expectedGraduation}</p>
          <p className="text-gray-600">GPA: {education.gpa}</p>
        </div>
      </div>
      
      <div>
        <p className="text-gray-700"><span className="font-medium">Major:</span> {education.major}</p>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-2">Scholarships & Awards</h4>
        <ul className="space-y-2">
          {education.scholarships.map((scholarship, index) => (
            <motion.li 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-pink-400 mr-2" />
              <span className="text-gray-600">{scholarship}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const experiences = [
  {
    year: "May 2024 - Present",
    title: "Junior Software Developer",
    company: "MDMToGO",
    location: "Mississauga, CA",
    tag: "ASP.NET, C#, Java, AMAPI, Full-stack Developement, Android Development, Enterprise Mobility Management (EMM) application, Firebase, Redis, Azure",
    description: [
      "Developed intuitive Front-end with robust Back-end functionality using C#, ASP.NET, Web API, and Android Management API (AMAPI), delivering scalable EMM web applications capable of handling 1M+ device requests daily",
      "Optimized SQL Server databases, reducing query latency by 50% through efficient indexing and stored procedures",
      "Improved page load times by 80% using caching techniques, lazy loading, and database query optimizations",
      "Designed and implemented end-to-end geofencing features with minimal guidance across Android app, backend APIs, front-end, and database, achieving 95% accuracy in device event detection",
      "Enabled dynamic creation and enforcement of geofence boundaries for real-time tracking across 5,000+ devices",
      "Built a high accuracy geofencing system using Java and Ray Casting Algorithm, processing updates under 200ms",
      "Integrated enforcement controls with AMAPI, including kiosk mode, lockdown, and notifications for policy compliance",
      "Reduced rule synchronization latency by 25% using Firebase Push Notifications, scaling to support 100+ geofence rules per user",
      "Reduced Azure Maps costs by 40% by implementing a multi-tier caching strategy using local disk, in-memory, and Redis",
      "Developed a secure Wi-Fi management system with backend support for client/server certificate handling, enhancing device enrollment security and boosting user autonomy by 30%",
      "Strengthened device security by allowing users to set password complexity levels and enforce encryption and compliance policies, reducing unauthorized access by 25%",
      "Automated help page generation from a private Azure repository, reducing manual updates by 80% and improving user query response time by 50% with a real-time, searchable help system",
      "Architected an event log system to track user interactions, enhancing system auditability and reducing debugging time by 40%",
      "Collaborated on DevOps workflows using Azure DevOps, implementing CI/CD pipelines and automated testing, reducing deployment times by 70%",
      "Implemented unit testing with NUnit, achieving 95% test coverage and ensuring application stability and reliability",
      "Participated in code reviews and followed Agile methodologies, improving code quality and development efficiency"
    ]
  },
  {
    year: "Sep 2022 - Aug 2023",
    title: "Math Tutor",
    company: "Humber College",
    location: "Toronto, CA",
    tag: "Teaching",
    description: [
      "Tutored complex topics, including Calculus, Linear Algebra, Discrete Mathematics, Probability & Statistics and Data Structures & Algorithms, improving student academic performance with average grades of 15%",
    ]
  }
];

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  // Refs for each section
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // const handleSectionClick = (section: string) => {
  //   setActiveSection(section);

  //   // Scroll to the corresponding section
  //   if (section === 'about' && aboutRef.current) {
  //     aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (section === 'experience' && experienceRef.current) {
  //     experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (section === 'projects' && projectsRef.current) {
  //     projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  //   } else if (section === 'contact' && contactRef.current) {
  //     contactRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100; // Adjust this value to fine-tune the scroll position
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    console.log(form.current)
    try {
      const result = await emailjs.sendForm(
        'service_t584l8k', // Replace with your EmailJS service ID
        'template_ueylhdg', // Replace with your EmailJS template ID
        form.current,
        'PnQiijukQSRGezFS0' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus('Message sent successfully!');
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };


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
      items: [
        "React.js",
        "Redux",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "SASS"
      ],
      color: "bg-pink-50"
    },
    backend: {
      icon: <ServerIcon className="w-8 h-8" />,
      title: "Backend & Mobile App",
      items: [
        "Node.js",
        "ASP.NET",
        "C#",
        "Python",
        "Java",
        "C/C++",
        "Dart",
        "Flutter"
      ],
      color: "bg-yellow-50"
    },
    databases: {
      icon: <DatabaseIcon className="w-8 h-8" />,
      title: "Databases",
      items: [
        "SQL",
        "Postgres",
        "MongoDB",
        "Redis",
        "SQL Server",
        "Firebase"
      ],
      color: "bg-orange-50"
    },
    tools: {
      icon: <Code2Icon className="w-8 h-8" />,
      title: "Tools",
      items: [
        "Git",
        "Docker",
        "AWS",
        "Azure DevOps",
        "Kubernetes",
        "Jenkins",
        "Postman",
        "Linux",
        "Jira"
      ],
      color: "bg-green-50"
    },
    dataScience: {
      icon: <Code2Icon className="w-8 h-8" />,
      title: "Data Science & ML",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-Learn",
        "Keras",
        "Seaborn",
        "TensorFlow",
        "Plotly"
      ],
      color: "bg-purple-50"
    },
    other: {
      icon: <BrainCircuitIcon className="w-8 h-8" />,
      title: "Other",
      items: [
        "Agile",
        "CI/CD",
        "REST API",
        "JUnit",
        "NUnit",
        "Problem Solving",
        "Team Work",
      ],
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
              Thi Huyen Hoang 🌷
            </motion.h1>
            <div className="flex space-x-6">
              {['about','education', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSectionClick(section)}
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text section */}
          <div className="flex-1" ref={aboutRef} id="about">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm Thi Huyen! 👋
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              A girl with a big dream, doing my 20s with a smile 😊 and navigating through the tech world 🍀.
            </motion.p>

            <motion.p
              className="text-xl text-gray-700 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              I am an innovative and detail-oriented <b>Software Engineer</b> with a strong passion for developing scalable, secure, and efficient applications. With expertise in both <b>Web and Mobile App Development</b>, I am constantly exploring new technologies to build impactful solutions.
            </motion.p>
            <motion.p
              className="text-xl text-gray-700 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
            My interests also extend to <b>AI/ML</b> and large language models (LLM), where I aim to leverage cutting-edge advancements to drive innovation.
            </motion.p>
            <motion.p
              className="text-xl text-gray-700 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
            Currently, I am seeking new opportunities where I can contribute my skills and make a meaningful impact in the tech industry.
            </motion.p>
          </div>

    {/* Image section */}
    <div className="w-full md:w-1/3 mt-6 md:mt-0 text-center md:text-left">
      <motion.img
        src="/gif/thi.jpg" // Adjust the path as necessary
        alt="Thi Huyen"
        className="rounded-full w-full h-auto object-cover max-w-[300px]  mx-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      />
    </div>
  </div>
</motion.section>

    {/* Add Education section before Skills section */}
    <motion.section 
        className="py-20 px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-6xl mx-auto" ref={educationRef} id="education"> 
          <motion.h2 
            className="text-3xl font-bold mb-12"
            variants={fadeInUp}
          >
            Education
          </motion.h2>
          <EducationSection education={education} />
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={skillRef} id="skills">
              {Object.entries(skills).map(([key, data], index) => (
                <SkillCard key={key} skill={key} data={data} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Rest of the sections with similar motion components */}
        
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
            <div className="relative" ref={experienceRef} id="experience">
              {experiences.map((exp, index) => (
                <TimelineItem 
                  key={`${exp.company}-${exp.year}`}
                  year={exp.year}
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  tag={exp.tag}
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
            <div className="grid md:grid-cols-2 gap-8" ref={projectsRef} id="projects">
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
            <h2 className="text-3xl font-bold mb-8" ref={contactRef} id="contact">Let's Connect!</h2>

            <motion.div 
              className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <MailIcon className="w-6 h-6 text-pink-500 mr-2" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <p className="text-gray-600">khanhhuyenx20@gmail.com</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <PhoneIcon className="w-6 h-6 text-pink-500 mr-2" />
                  <h3 className="text-xl font-semibold">Phone</h3>
                </div>
                <p className="text-gray-600">+1 (647) 451-9838</p>
              </div>
            </motion.div>

            <motion.form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 mb-12 bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 resize-none"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center disabled:bg-pink-300"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <SendIcon className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
      {submitStatus && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-4 text-center ${
            submitStatus.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {submitStatus}
        </motion.p>
      )}
    </motion.form>

            <div className="flex justify-center space-x-8" >
              {['linkedin', 'github', 'email'].map((platform, index) => (
                <motion.div
                  key={`${platform}-${index}`}  
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={
                      platform === 'linkedin' ? 'https://www.linkedin.com/in/thihuyen-ho30/' : 
                      platform === 'github' ? 'https://github.com/Hoanghuyen2k3' : 
                      'mailto:khanhhuyenx20@gmail.com'
                    }
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