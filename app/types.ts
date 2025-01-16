type Skill = {
    icon: React.ReactNode;
    title: string;
    items: string[];
    color: string;
  };
  
type SkillCategory = {
  [key: string]: Skill;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
};

type TimelineItemProps = {
  year: string;
  title: string;
  company: string;
  location: string;
  tag: string;
  description: string[];
  isLast?: boolean;
};

type Experience = {
  year: string;
  company: string;
  location: string;
  role: string;
  tag: string;
  description: string[];
};

type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  expectedGraduation: string;
  major: string;
  scholarships: string[];
}