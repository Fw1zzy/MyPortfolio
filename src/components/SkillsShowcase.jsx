import React from 'react'
import { motion } from 'framer-motion'

// ─── Skill Data ───────────────────────────────────────────────────────────────
// icon: a Simple Icons slug (https://simpleicons.org) or 'custom' for text badges
// color: brand hex for the icon tint & glow
const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript',  icon: 'typescript',   color: '#3178C6' },
      { name: 'JavaScript',  icon: 'javascript',   color: '#F7DF1E' },
      { name: 'Python',      icon: 'python',        color: '#3776AB' },
      { name: 'C#',          icon: 'csharp',        color: '#239120' },
      { name: 'HTML5',       icon: 'html5',         color: '#E34F26' },
      { name: 'CSS3',        icon: 'css3',          color: '#1572B6' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React',       icon: 'react',         color: '#61DAFB' },
      { name: 'Next.js',     icon: 'nextdotjs',     color: '#000000', dark: '#ffffff' },
      { name: 'Vue.js',      icon: 'vuedotjs',      color: '#4FC08D' },
      { name: 'Angular',     icon: 'angular',       color: '#DD0031' },
      { name: 'Tailwind',    icon: 'tailwindcss',   color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend & APIs',
    skills: [
      { name: 'Node.js',     icon: 'nodedotjs',     color: '#339933' },
      { name: 'ASP.NET',     icon: 'dotnet',        color: '#512BD4' },
      { name: 'REST API',    icon: 'custom',        color: '#FF6B35' },
      { name: 'GraphQL',     icon: 'graphql',       color: '#E10098' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MySQL',       icon: 'mysql',         color: '#4479A1' },
      { name: 'PostgreSQL',  icon: 'postgresql',    color: '#336791' },
      { name: 'MongoDB',     icon: 'mongodb',       color: '#47A248' },
      { name: 'Firebase',    icon: 'firebase',      color: '#FFCA28' },
    ],
  },
  {
    label: 'DevOps & Version Control',
    skills: [
      { name: 'Git',         icon: 'git',           color: '#F05032' },
      { name: 'GitHub',      icon: 'github',        color: '#181717', dark: '#ffffff' },
      { name: 'Bitbucket',   icon: 'bitbucket',     color: '#0052CC' },
    ],
  },
  {
    label: 'CMS & Platforms',
    skills: [
      { name: 'WordPress',   icon: 'wordpress',     color: '#21759B' },
      { name: 'Strapi',      icon: 'strapi',        color: '#4945FF' },
      { name: 'GoHighLevel', icon: 'custom',        color: '#FF5733' },
      { name: 'Likha ERP',   icon: 'custom',        color: '#2978b5' },
    ],
  },
  {
    label: 'AI & Automation',
    skills: [
      { name: 'n8n',         icon: 'n8n',           color: '#EA4B71' },
      { name: 'Zapier',      icon: 'zapier',        color: '#FF4A00' },
      { name: 'Make',        icon: 'make',          color: '#6D00CC' },
    ],
  },
]

// Simple Icons SVG URL builder
const siSvgUrl = (slug) =>
  `https://cdn.simpleicons.org/${slug}`

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Individual skill pill
const SkillPill = ({ skill }) => {
  const isCustom = skill.icon === 'custom'

  return (
    <motion.li
      variants={itemVariants}
      className="skill-pill"
      style={{ '--skill-color': skill.color }}
    >
      {isCustom ? (
        /* Text-only badge for tools without a standard icon */
        <span className="skill-pill__text-icon font-poppins" style={{ color: skill.color }}>
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <img
          src={siSvgUrl(skill.icon)}
          alt={`${skill.name} logo`}
          className="skill-pill__icon"
          width={22}
          height={22}
          loading="lazy"
          onError={(e) => {
            // Fallback to text badge if icon fails to load
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'inline'
          }}
        />
      )}
      <span className="sr-only">{skill.name}</span>
      <span className="skill-pill__label font-poppins">{skill.name}</span>
    </motion.li>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
const SkillsShowcase = () => {
  return (
    <section className="w-full px-6 flex flex-col items-center" id="skills">
      {/* Heading */}
      <div className="mt-[7rem] flex flex-col items-center gap-3">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-poppins text-[3rem] font-bold textcolor1 dark:text-slate-100"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-poppins text-center max-w-[520px] text-[0.95rem] textcolor2 dark:text-slate-400"
        >
          Technologies, tools, and platforms I work with across the full stack.
        </motion.p>
      </div>

      {/* Groups */}
      <div className="skills-grid-wrapper">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={gi}
            className="skill-group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="skill-group__label font-poppins"
            >
              {group.label}
            </motion.h3>
            <ul className="skill-pills-row">
              {group.skills.map((skill, si) => (
                <SkillPill key={si} skill={skill} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsShowcase
