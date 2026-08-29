import {
  bootstrap,
  css,
  facebook,
  figma,
  git,
  github,
  html,
  instagram,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  preview,
  react,
  sass,
  tailwind,
  vite,
  redux,
  nextjs,
  fpasWebsite,
  piqueProject,
  twitterClone,
  logoFolio,
  pascualai,
  aiBlogWriter,
  aiResumeScreening,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#projects",
    title: "Projects",
  },
  {
    id: "#ai-automation",
    title: "AI Automation",
  },
  {
    id: "#skills",
    title: "Skills",
  },
  /*
  {
    id: "#skills",
    title: "Skills",
  },
*/
  {
    id: "#contact",
    title: "Contact",
  },
];

export const aboutMe = [
  {
    id: "about-1",
    title: "04+",
    context: "Years of experience",
  },
  {
    id: "about-2",
    title: "07+",
    context: "Completed projects",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link1: "https://www.instagram.com/call_me.emman/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link2: "https://www.facebook.com/emmanuel.pascua.161/",
  },
  {
    id: "social-media-3",
    icon: github,
    link3: "https://github.com/Fw1zzy",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link4: "https://www.linkedin.com/in/emmanuelpascua/",
  },
];

export const myProjects = [
  {
    title: "PascualAI",
    context:
      "An AI-powered image enhancement application leveraging advanced neural networks to upscale and restore low-resolution photos in real-time.",
    details: {
      role: "Full-Stack Developer",
      year: "2024",
      longDesc:
        "PascualAI is a production-grade image enhancement web app that lets users upload low-resolution or damaged photos and receive studio-quality results in seconds. Under the hood, it pipelines images through a fine-tuned super-resolution neural network hosted on a serverless edge function, with Supabase handling authentication, file storage, and real-time processing queues. The UI is built with React and TypeScript, featuring drag-and-drop upload, side-by-side before/after comparison sliders, and instant download.",
      highlights: [
        "Real-time AI upscaling with sub-3 s turnaround",
        "Before / after comparison slider component",
        "Supabase auth + file storage integration",
        "Deployed on Vercel edge network",
      ],
    },
    language1: "React",
    language2: "Typescript",
    language3: "Supabase",
    link2: "https://pascual-ai-enhance.vercel.app/",
    icon2: "fas fa-external-link-alt",
    image: pascualai,
  },
  {
    title: "FPAS Website",
    context:
      "A high-performance, fully responsive corporate website designed and built for the Financial Planning Association of Singapore (FPAS) during my Edufied internship.",
    details: {
      role: "Frontend Developer — Edufied Internship",
      year: "2023",
      longDesc:
        "During my internship at Edufied, I was tasked with overhauling the entire public-facing website for the Financial Planning Association of Singapore. The project involved migrating legacy content into a custom WordPress theme built from scratch, implementing WCAG accessibility standards, optimising Core Web Vitals scores to green, and creating a fully responsive layout that serves thousands of finance professionals across the region.",
      highlights: [
        "Custom WordPress theme built from scratch",
        "WCAG 2.1 AA accessibility compliance",
        "Core Web Vitals optimised to green across all metrics",
        "Responsive across all breakpoints",
      ],
    },
    language1: "WordPress",
    language2: "PHP",
    language3: " ",
    link2: "https://fpas.org.sg/",
    icon2: "fas fa-external-link-alt",
    image: fpasWebsite,
  },
  {
    title: "Pique",
    context:
      "A freelance project implementing a client's design mockup with pixel-perfect precision, optimized responsiveness, and smooth micro-interactions.",
    details: {
      role: "Freelance Frontend Developer",
      year: "2024",
      longDesc:
        "Pique was a freelance engagement where the client supplied high-fidelity Figma designs and required an exact, pixel-perfect implementation. I converted every screen into a performant Vue 3 + TypeScript application with Tailwind utility classes, wired up smooth page transitions, and ensured the layout adapted flawlessly from 320 px mobile to 4K desktop. Delivery was on-time and the client reported zero revision requests on the visual fidelity.",
      highlights: [
        "Pixel-perfect Figma-to-code implementation",
        "Vue 3 Composition API with TypeScript",
        "Smooth page transitions and micro-animations",
        "Zero visual revision requests from client",
      ],
    },
    language1: "TypeScript",
    language2: "Vue",
    language3: "Tailwind",
    link2: "https://pique-jet.vercel.app/",
    icon2: "fas fa-external-link-alt",
    image: piqueProject,
  },
  {
    title: "LogoFolio",
    context:
      "An interactive showcase designed to display original vector logos, emphasizing modern layout systems and polished CSS animations.",
    details: {
      role: "Designer & Frontend Developer",
      year: "2024",
      longDesc:
        "LogoFolio is a personal design portfolio that showcases original vector brand marks I created in Figma and Illustrator. I built the display site in Angular to experiment with the framework's component architecture, leveraging CSS Grid and custom keyframe animations to create a gallery that feels alive — logos float, rotate on hover, and transition between grid and featured-view layouts with no external animation library.",
      highlights: [
        "All logos designed in Figma & Illustrator",
        "Angular standalone components architecture",
        "Pure CSS keyframe animations — no animation library",
        "Grid ↔ featured view layout transition",
      ],
    },
    language1: "Angular",
    language2: "JavaScript",
    language3: "Tailwind",
    link2: "https://logo-folio.vercel.app/",
    icon2: "fas fa-external-link-alt",
    image: logoFolio,
  },
  {
    title: "Twitter Clone",
    context:
      "A full-featured, secure microblogging platform featuring real-time threaded conversations, search, and dynamic user activity tracking.",
    details: {
      role: "Full-Stack Developer",
      year: "2023",
      longDesc:
        "This Twitter clone replicates the core social experience with a focus on scalability and security. Built on Next.js 14 App Router with server components, it features JWT-based auth, threaded conversations, optimistic UI updates, full-text search powered by MongoDB Atlas Search, and a live activity feed. The schema is carefully indexed to keep timeline queries under 100 ms even under load.",
      highlights: [
        "Next.js 14 App Router with React Server Components",
        "JWT auth + bcrypt password hashing",
        "Real-time threaded conversations",
        "MongoDB Atlas Search full-text indexing",
      ],
    },
    language1: "NextJS",
    language2: "MongoDB",
    language3: "TypeScript",
    link2: "https://twitter-clone-typescript.vercel.app/",
    icon2: "fas fa-external-link-alt",
    image: twitterClone,
  },
];

export const aiAutomationProjects = [
  {
    title: "AI Blog Writer & Social Media Automation",
    context:
      "An n8n workflow triggered from Google Sheets that auto-generates a WordPress blog post via OpenRouter AI, then creates platform-tailored social media content for Twitter/X, LinkedIn, Facebook, and YouTube — all in a single automated run.",
    details: {
      role: "AI Automation Engineer",
      year: "2025",
      longDesc:
        "The workflow is triggered either from a Google Sheets row or a manual 'Execute workflow' click. It fetches the blog topic and dynamic AI prompt templates from the sheet, injects the topic into the prompts, then routes through an OpenRouter Chat Model to generate a full blog post. The HTML output is cleaned up and published directly to WordPress via API. The post content is then merged and passed to a second OpenRouter model that generates platform-specific social media copy. A Switch node routes each variant: a tweet to Twitter/X, a professional post to LinkedIn, a Facebook Graph API call for Facebook, and a Google Doc script saved for YouTube.",
      highlights: [
        "Dual triggers: Google Sheets row or manual execution",
        "Dynamic AI prompts fetched & injected from Google Sheets",
        "OpenRouter Chat Model generates & cleans full HTML blog post",
        "Auto-publishes to WordPress, then fans out to X, LinkedIn, Facebook & YouTube",
      ],
    },
    tag1: "n8n",
    tag2: "OpenRouter",
    tag3: "WordPress",
    image: aiBlogWriter,
  },
  {
    title: "AI Resume Screening Automation",
    context:
      "An n8n workflow triggered on job-application form submission that extracts, summarises, and scores candidate CVs using OpenRouter AI, then routes each applicant into Shortlisted, Maybe, or Ignored — notifying the recruiter via Gmail and logging results to Google Sheets.",
    details: {
      role: "AI Automation Engineer",
      year: "2025",
      longDesc:
        "When a candidate submits a form for a Full Stack Developer role, the workflow uploads their CV to Google Drive and runs two parallel AI extraction chains one for personal information and one for professional information extracted directly from the PDF. Both outputs are merged into a Unified Candidate Profile, which is passed through an OpenRouter Summarization Chain alongside the live job posting fetched from a document store. An 'Evaluate & Score Profile' node with a Structured Output Parser then scores the candidate against the role. A Switch node routes the result into three branches: Shortlisted candidates trigger a Gmail notification to the hiring manager and are appended to a Google Sheet; Maybe candidates are logged to the sheet only; Ignored candidates end the flow silently.",
      highlights: [
        "Triggered on job-application form submission",
        "Parallel PDF extraction: personal info + professional info via OpenRouter",
        "Structured Output Parser routes to Shortlisted / Maybe / Ignored with Gmail alerts",
      ],
    },
    tag1: "n8n",
    tag2: "OpenRouter",
    tag3: "Google Drive",
    image: aiResumeScreening,
  },
];


export const mySkills = [
  {
    icon: html,
    title: "HTML",
  },
  {
    icon: css,
    title: "CSS",
  },
  {
    icon: bootstrap,
    title: "BOOTSTRAP",
  },
  {
    icon: sass,
    title: "SASS",
  },
  {
    icon: javascript,
    title: "JAVASCRIPT",
  },
  {
    icon: git,
    title: "GIT",
  },
  {
    icon: github,
    title: "GITHUB",
  },
  {
    icon: react,
    title: "REACT",
  },
  {
    icon: tailwind,
    title: "TAILWIND",
  },
  {
    icon: redux,
    title: "REDUX",
  },
  {
    icon: nodejs,
    title: "NODEJS",
  },
  {
    icon: mongodb,
    title: "MONGODB",
  },
  {
    icon: nextjs,
    title: "NEXTJS",
  },
  {
    icon: vite,
    title: "VITE",
  },
  {
    icon: figma,
    title: "FIGMA",
  },
];
