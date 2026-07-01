import { bootstrap, css, facebook, figma, git, github, html, instagram, javascript, linkedin, mongodb, nodejs, preview, react, sass, tailwind, vite, redux, nextjs, fpasWebsite, piqueProject, twitterClone, logoFolio } from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#projects",
    title: "Projects",
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
    context: "Years of experience"
  },
  {
    id: "about-2",
    title: "07+",
    context: "Completed projects"
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
    title: "FPAS Website",
    context: "A website built during my internship at Edufied for the FPAS client, delivered with great satisfaction.",
    language1: "WordPress",
    language2: "PHP",
    language3: " ",
    link2: "https://fpas.org.sg/",
    icon2: "fas fa-external-link-alt",
    image: fpasWebsite,
  },
  {
    title: "Pique",
    context: "A freelance website built from a client-provided design, showcasing pixel-perfect implementation skills.",
    language1: "TypeScript",
    language2: "Vue",
    language3: "Tailwind",
    link1: "https://github.com/Fw1zzy/Pique",
    link2: "https://pique-jet.vercel.app/",
    icon1: "fab fa-github",
    icon2: "fas fa-external-link-alt",
    image: piqueProject,
  },
  {
    title: "LogoFolio",
    context: "A fun personal project to sharpen CSS skills and responsive design techniques.",
    language1: "Angular",
    language2: "JavaScript",
    language3: "Tailwind",
    link1: "https://github.com/Fw1zzy/LogoFolio",
    link2: "https://logo-folio.vercel.app/",
    icon1: "fab fa-github",
    icon2: "fas fa-external-link-alt",
    image: logoFolio,
  },
  {
    title: "Twitter Clone",
    context: "A full-stack Twitter clone with auth, threads, and real-time data using NextJS and MongoDB.",
    language1: "NextJS",
    language2: "MongoDB",
    language3: "TypeScript",
    link1: "https://github.com/Fw1zzy/threads",
    link2: "https://twitter-clone-typescript.vercel.app/",
    icon1: "fab fa-github",
    icon2: "fas fa-external-link-alt",
    image: twitterClone,
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
]
