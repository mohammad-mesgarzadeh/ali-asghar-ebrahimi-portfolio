import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { skills } from '../data/skills';

type Skill = (typeof skills)[number];

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const pad = (n: number) => String(n).padStart(2, '0');

/* Same grouping logic as before: first-seen category order is preserved. */
const groupedSkills = skills.reduce<SkillGroup[]>((acc, skill) => {
  const existing = acc.find((g) => g.category === skill.category);
  if (existing) {
    existing.skills.push(skill);
  } else {
    acc.push({ category: skill.category, skills: [skill] });
  }
  return acc;
}, []);

/* ------------------------------------------------------------------ */
/* One skill row: index, extending rule + marker, title                */
/* ------------------------------------------------------------------ */
interface SkillItemProps {
  skill: Skill;
  index: number;
  variants: Variants;
  reduceMotion: boolean;
}

const SkillItem = ({ skill, index, variants, reduceMotion }: SkillItemProps) => (
  <motion.li variants={variants} className="group/skill border-t border-accent/10 last:border-b">
    {/* RTL: content starts on the right, so hover nudges it inward (left) */}
    <motion.div
      whileHover={reduceMotion ? undefined : { x: -4 }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-4 py-3.5"
    >
      <span dir="ltr" className="w-6 shrink-0 font-mono text-xs tabular-nums text-accent/70">
        {pad(index + 1)}
      </span>
      <span aria-hidden="true" className="flex w-12 shrink-0 items-center gap-1.5">
        <span className="h-px w-5 bg-accent/30 transition-all duration-300 group-hover/skill:w-9 group-hover/skill:bg-accent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100" />
      </span>
      <span className="min-w-0 text-sm text-gray-300 transition-colors duration-300 group-hover/skill:text-white sm:text-base">
        {skill.title}
      </span>
    </motion.div>
  </motion.li>
);

/* ------------------------------------------------------------------ */
/* One category (a technical discipline)                               */
/* ------------------------------------------------------------------ */
interface SkillCategoryProps {
  group: SkillGroup;
  index: number;
  single: boolean;
  reduceMotion: boolean;
}

const SkillCategory = ({ group, index, single, reduceMotion }: SkillCategoryProps) => {
  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: reduceMotion ? 0 : 0.06 },
    },
  };
  const ruleVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 0.9, ease: 'easeOut' } },
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.article
      variants={categoryVariants}
      aria-labelledby={`skill-group-${index}`}
      className={`group relative min-w-0 ${single ? 'md:col-span-2' : ''}`}
    >
      {/* Top rule: draws in once, brightens on hover */}
      <div aria-hidden="true" className="relative h-px">
        <motion.div variants={ruleVariants} style={{ originX: 1 }} className="h-px bg-accent/25" />
        <span className="absolute right-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span dir="ltr" className="font-mono text-sm tabular-nums text-accent/70">
          {pad(index + 1)}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-accent/15" />
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rotate-45 border border-accent bg-dark-bg transition-colors duration-300 group-hover:bg-accent"
        />
      </div>

      <h3 id={`skill-group-${index}`} className="mt-4 text-xl font-bold text-gray-100 md:text-2xl">
        {group.category}
      </h3>

      <ol className="mt-6">
        {group.skills.map((skill, i) => (
          <SkillItem
            key={skill.id}
            skill={skill}
            index={i}
            variants={rowVariants}
            reduceMotion={reduceMotion}
          />
        ))}
      </ol>
    </motion.article>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export const Skills = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };
  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 } },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-charcoal to-dark-bg py-20 md:py-28"
    >
      {/* Blueprint grid, same language as the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 space-y-6 md:mb-20"
        >
          <div className="flex items-center gap-4">
            <span dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-accent/80">
              04 / SKILLS
            </span>
            <motion.div
              variants={lineVariants}
              style={{ originX: 1 }}
              aria-hidden="true"
              className="relative h-px flex-1 bg-accent/25"
            >
              <span
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(212,132,79,.35) 0 1px, transparent 1px 12px)',
                }}
              />
              <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-accent" />
            </motion.div>
            <span aria-hidden="true" dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-gray-500">
              GROUPS {pad(groupedSkills.length)} / ITEMS {pad(skills.length)}
            </span>
          </div>
          <h2 className="heading-2">مهارت‌ها</h2>
        </motion.header>

        {/* Categories */}
        <div className="relative">
          {/* Structural axis between the two desktop columns */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden border-l border-dashed border-accent/10 md:block"
          />
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 lg:gap-x-24"
          >
            {groupedSkills.map((group, index) => (
              <SkillCategory
                key={group.category}
                group={group}
                index={index}
                single={groupedSkills.length === 1}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};