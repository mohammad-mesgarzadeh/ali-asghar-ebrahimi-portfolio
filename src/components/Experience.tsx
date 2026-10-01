import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

type Experience = (typeof experiences)[number];

/**
 * The data has no explicit "current" flag, so a position is treated as current
 * only when its end date reads like "now" (اکنون / تاکنون / حال حاضر / present).
 * Adjust this one pattern if your data uses different wording.
 */
const CURRENT_PATTERN = /کنون|حال[\s\u200c]*حاضر|present|current/i;
const isCurrent = (exp: Experience) => CURRENT_PATTERN.test(String(exp.endDate));

/* ------------------------------------------------------------------ */
/* Timeline marker: square node with a thin outer ring                 */
/* ------------------------------------------------------------------ */
const TimelineMarker = ({ current }: { current: boolean }) => (
  <span
    aria-hidden="true"
    className={`flex h-5 w-5 items-center justify-center border border-accent/40 bg-dark-bg transition-colors duration-300 group-hover:border-accent ${
      current ? 'outline outline-1 outline-offset-[3px] outline-accent/40' : ''
    }`}
  >
    <span
      className={`h-1.5 w-1.5 transition-transform duration-300 group-hover:scale-125 ${
        current ? 'bg-accent' : 'border border-accent bg-dark-bg'
      }`}
    />
  </span>
);

/* ------------------------------------------------------------------ */
/* Single experience entry                                             */
/* ------------------------------------------------------------------ */
interface ExperienceItemProps {
  exp: Experience;
  index: number;
  reduceMotion: boolean;
}

const ExperienceItem = ({ exp, index, reduceMotion }: ExperienceItemProps) => {
  const current = isCurrent(exp);
  // Desktop: alternate sides. In RTL, grid column 1 is the right-hand side.
  const placement =
    index % 2 === 0
      ? 'md:col-start-1 md:pr-0 md:pl-8 lg:pl-12'
      : 'md:col-start-3 md:pr-8 lg:pr-12';

  const itemVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: Math.min(index, 2) * 0.08 },
    },
  };
  const markerVariants: Variants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative md:grid md:grid-cols-[1fr_2.5rem_1fr]"
    >
      {/* Marker: right edge on mobile, centre column on desktop */}
      <motion.div
        variants={markerVariants}
        className="absolute right-0 top-[-10px] z-10 md:static md:col-start-2 md:row-start-1 md:-mt-2.5 md:justify-self-center"
      >
        <TimelineMarker current={current} />
      </motion.div>

      <motion.article
        variants={contentVariants}
        className={`relative min-w-0 border-t border-accent/15 pr-10 pt-6 md:row-start-1 ${placement}`}
      >
        {/* Hover rule draws in from the start edge */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-[-1px] h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
        />

        <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: 0.3 }}>
          {/* Technical index + current status */}
          <div className="flex items-center justify-between gap-4">
            <span dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-accent/70">
              EXP / {String(index + 1).padStart(2, '0')}
            </span>
            {current && (
              <span className="flex items-center gap-2 text-xs font-medium text-accent">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
                فعلی
              </span>
            )}
          </div>

          {/* 1. Position  2. Company */}
          <h3 className="heading-3 mt-3 text-gray-100 transition-colors duration-300 group-hover:text-white">
            {exp.position}
          </h3>
          <p className="mt-1.5 text-base font-medium text-accent md:text-lg">{exp.company}</p>

          {/* 3. Location / date / duration */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin aria-hidden="true" size={15} strokeWidth={1.5} className="shrink-0 text-accent" />
              {exp.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar aria-hidden="true" size={15} strokeWidth={1.5} className="shrink-0 text-accent" />
              {exp.startDate} - {exp.endDate}
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-px w-4 bg-accent/40" />
              {exp.duration}
            </span>
          </div>

          {/* 4. Responsibilities */}
          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <ul
              aria-label="مسئولیت‌ها"
              className="mt-5 space-y-2.5 border-r border-accent/20 pr-4"
            >
              {exp.responsibilities.map((resp, idx) => (
                <li key={`${exp.id}-${idx}`} className="relative text-sm leading-7 text-gray-300">
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-3.5 h-px w-2.5 bg-accent/50 transition-colors duration-300 group-hover:bg-accent"
                  />
                  {resp}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </motion.article>
    </motion.li>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export const Experience = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };
  const spineVariants: Variants = {
    hidden: { scaleY: reduceMotion ? 1 : 0 },
    visible: { scaleY: 1, transition: { duration: 1.4, ease: 'easeOut' } },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-charcoal to-dark-bg py-20 md:py-28"
    >
      {/* Blueprint grid, same language as About and the Hero canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)',
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
              02 / EXPERIENCE
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
          </div>
          <h2 className="heading-2">تجربه کاری</h2>
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          {/* Spine: right edge on mobile, centre on desktop */}
          <motion.div
            aria-hidden="true"
            variants={spineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            style={{ originY: 0 }}
            className="absolute bottom-0 right-[9.5px] top-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:left-[calc(50%-0.5px)] md:right-auto"
          />
          {/* Measurement ticks along the desktop spine */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[calc(50%-6px)] hidden w-3 md:block"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(212,132,79,.2) 0 1px, transparent 1px 16px)',
            }}
          />

          <ol className="space-y-10 md:space-y-14">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} reduceMotion={reduceMotion} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};