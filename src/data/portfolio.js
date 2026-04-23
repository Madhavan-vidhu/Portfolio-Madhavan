import {
  Bot,
  BrainCircuit,
  Cpu,
  Database,
  GraduationCap,
  LayoutGrid,
  Palette,
  Sparkles,
  TerminalSquare,
  Trophy,
  Users,
  Workflow,
} from 'lucide-react'

export const profile = {
  name: 'Madhavan V',
  title: 'AI Engineer / Full Stack Developer',
  tagline: 'Building intelligent systems that solve real-world problems',
  email: 'madhavanvidhu@gmail.com',
  phone: '+91 7012209850',
  linkedin: 'https://www.linkedin.com/in/madhavan-vidhu',
  github: 'https://github.com/Madhavan-vidhu',
}

export const highlights = [
  { title: 'Agentic AI Systems', icon: BrainCircuit, tone: 'bg-acid' },
  { title: 'Machine Learning', icon: Cpu, tone: 'bg-volt' },
  { title: 'LLM Integration', icon: Bot, tone: 'bg-punch text-white' },
  { title: 'Intuitive UI Design', icon: Palette, tone: 'bg-ember text-white' },
]

export const skills = [
  {
    category: 'AI/ML',
    icon: BrainCircuit,
    color: 'bg-acid',
    level: 92,
    items: ['Agents', 'Machine Learning', 'LangChain', 'Deep Learning'],
  },
  {
    category: 'Backend',
    icon: Database,
    color: 'bg-volt',
    level: 90,
    items: ['Python', 'FastAPI', 'MongoDB'],
  },
  {
    category: 'Frontend',
    icon: LayoutGrid,
    color: 'bg-punch text-white',
    level: 83,
    items: ['React', 'Tailwind', 'HTML/CSS'],
  },
  {
    category: 'Others',
    icon: Cpu,
    color: 'bg-ember text-white',
    level: 86,
    items: ['Graphic Designing', 'Creative Thinking', 'SQL', 'Prompt Engineering','Git','UiPath'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'DoctorAssist',
    type: 'Full-time',
    period: 'Jul 2025 - Jan 2026',
    duration: '7 months',
    bullets: ['AI healthcare platform', 'FastAPI + MongoDB + React', 'LLM integration'],
    overview:
      'Involved in the development of an AI-enabled healthcare platform supporting clinical workflows and intelligent decision support.',
    responsibilities:
      'Commonly worked with MongoDB for storing and managing structured healthcare data, built and consumed FastAPI-based backend services, developed responsive user interfaces using HTML, Tailwind CSS, and React, and integrated LLM-based AI features into the application flow.',
    technologies: [
      'FastAPI',
      'Python',
      'MongoDB',
      'HTML',
      'Tailwind CSS',
      'React',
      'JavaScript',
      'LLM',
      'AI Models',
    ],
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Information Kerala Mission',
    type: 'Internship',
    period: 'Aug 2024 - Jan 2025',
    duration: '6 months',
    bullets: ['AI-focused public systems', 'Applied machine learning workflows', 'Real-world data and automation exposure'],
    overview:
      'Built an AI chatbot for the HarithaMithram app to assist users in waste management.',
    responsibilities:
      'Worked on chatbot behavior, retrieval-augmented responses, and designed the chatbot experience for waste management guidance.',
    technologies: ['Python', 'LangChain', 'Retrieval-Augmented Generation (RAG)', 'LLM API', 'HTML', 'CSS'],
  },
]

export const projects = [
    {
    title: 'Agentic AI Sales Intelligence System',
    alias: 'Autonomous Outreach Pipeline',
    category: 'AI',
    description:
      'A multi-agent AI system that autonomously performs client discovery, website intelligence analysis, and hyper-personalized outreach generation.',
    stack: ['LLM', 'LangChain', 'RAG', 'Python', 'FastAPI'],
    accent: 'bg-punch text-white',
    icon: Cpu,
    detail:
      'Engineered a fully autonomous agent pipeline: domain discovery to web scraping to contextual analysis to weakness detection to personalized pitch generation. A secondary critic agent evaluates and refines outputs to improve conversion quality. This system demonstrates real-world agent orchestration, tool usage, and iterative reasoning workflows.',
  },
  {
    title: 'AI Waste Management Assistant',
    alias: 'HarithaMithram',
    category: 'AI',
    description:
      'A smart assistant concept for waste management workflows, citizen guidance, and operational support using AI-driven triage.',
    stack: ['LLM', 'Python', 'React', 'FastAPI'],
    accent: 'bg-acid',
    icon: Workflow,
    detail:
      'I designed this around practical civic impact: classifying user queries, routing collection issues, explaining disposal guidance, and presenting a clean operator-facing workflow.',
  },
  {
    title: 'AI College Chatbot',
    alias: 'RAG-based',
    category: 'AI',
    description:
      'Retrieval-augmented chatbot for college information that answers grounded questions from curated institutional knowledge.',
    stack: ['RAG', 'LangChain', 'Vector Search', 'React'],
    accent: 'bg-volt',
    icon: Bot,
    detail:
      'I focused on reducing repeated administrative queries with document-grounded answers, clear fallback states, and a conversational student experience.',
  },
  {
    title: 'Food Recommendation System',
    alias: 'ML + NLP',
    category: 'ML',
    description:
      'Recommendation engine using machine learning and NLP signals to match food preferences with relevant suggestions.',
    stack: ['ML', 'NLP', 'Scikit-learn', 'Python'],
    accent: 'bg-ember text-white',
    icon: Sparkles,
    detail:
      'Combines feature extraction, preference signals, and ranking logic to produce useful recommendations instead of static category browsing.',
  }
]

export const education = [
  { label: 'B.Tech CSE (AI)', value: 'CGPA 8.48', icon: GraduationCap },
  { label: 'XII (Computer Science)', value: '97.5%', icon: Trophy },
  { label: 'X', value: '98.8%', icon: Trophy },
]

export const certifications = [
  'AI Agentic Design Patterns with AutoGen',
  'Certificate Course on Artificial Intelligence (Infosys Foundation and ICT Academy)',
  'Generative AI - 30 hours Add-on Course (GP3 Cloud Innovations)',
  'Joy Of Computing Using Python (NPTEL)',
  'Machine Learning & Computer Vision And Image Processing Fundamentals (NPTEL)',
  'Matlab Onramp Certification & Machine Learning Onramp (MathWorks)',
  'Artificial Intelligence Foundation (Infosys Springboard)',
]

export const achievements = [
  'Our project shortlisted and participated in IEDC innovation challenge',
  'Participated in national level gameathon hosted by JIT Bengaluru',
  'Participated in Smart India Hackathon 2023',
  'Developed website for AI department fest Prayag24 and college fest brahma25'
]

export const leadership = [
  { title: 'Design Lead', detail: 'CSI, Game Dev Club', icon: Users },
  { title: 'IEEE member', detail: 'Technical community and events', icon: TerminalSquare },
]
