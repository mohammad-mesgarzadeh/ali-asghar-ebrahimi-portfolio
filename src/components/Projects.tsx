import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { projects } from '../data/projects';

type Project = (typeof projects)[number];

const pad = (n: number) => String(n).padStart(2, '0');

/* Desktop alternation. In RTL, grid column 1 is the right-hand side,
   so even rows put the text on the right and the visual on the left. */
const LAYOUT = {
  textFirst: { text: 'lg:col-start-1', visual: 'lg:col-start-8' },
  visualFirst: { text: 'lg:col-start-6', visual: 'lg:col-start-1' },
} as const;

/* ------------------------------------------------------------------ */
/* Small drawing pieces                                                */
/* ------------------------------------------------------------------ */
const CornerBrackets = () => (
  <>
    <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r border-t border-accent/50" />
    <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l border-t border-accent/50" />
    <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-accent/50" />
    <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-accent/50" />
  </>
);

const GRID_STYLE = {
  backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.06) 1px, transparent 1px)`,
  backgroundSize: '20px 20px',
} as const;

/** Structural-frame line drawing used for image-less projects and the empty state. */
const BlueprintArt = () => (
  <>
    <div aria-hidden="true" className="absolute inset-0" style={GRID_STYLE} />
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full text-accent/30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M70 232H330" />
      <path d="M100 232V104M200 232V104M300 232V104" />
      <path d="M100 104H300M100 168H300" />
      <path d="M100 168L200 104M300 168L200 104M100 232L200 168M300 232L200 168" />
      <path d="M100 254H300M100 249V259M300 249V259" />
      <rect x="97" y="101" width="6" height="6" />
      <rect x="197" y="101" width="6" height="6" />
      <rect x="297" y="101" width="6" height="6" />
    </svg>
  </>
);

/* ------------------------------------------------------------------ */
/* Project visual: image if present, engineering placeholder otherwise */
/* ------------------------------------------------------------------ */
const ProjectVisual = ({ project, number }: { project: Project; number: string }) => (
  <div className="relative aspect-[4/3] overflow-hidden border border-accent/20 bg-charcoal/40 transition-colors duration-300 group-hover:border-accent/50">
    {project.image ? (
      <>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={GRID_STYLE} />
      </>
    ) : (
      <>
        <BlueprintArt />
        <span
          aria-hidden="true"
          dir="ltr"
          className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.25em] text-accent/50"
        >
          NO IMAGE
        </span>
      </>
    )}
    <CornerBrackets />
    <span
      aria-hidden="true"
      dir="ltr"
      className="absolute right-4 top-4 bg-dark-bg/80 px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-accent/80"
    >
      PROJECT {number}
    </span>
  </div>
);

/* ------------------------------------------------------------------ */
/* One project entry                                                   */
/* ------------------------------------------------------------------ */
const MetaCell = ({
  label,
  children,
  className = '',
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={`border-t border-accent/15 pt-3 ${className}`}>
    <dt className="text-xs text-gray-400">{label}</dt>
    <dd className="mt-1.5 text-sm text-gray-100">{children}</dd>
  </div>
);

interface ProjectItemProps {
  project: Project;
  index: number;
  reduceMotion: boolean;
}

const ProjectItem = ({ project, index, reduceMotion }: ProjectItemProps) => {
  const number = pad(index + 1);
  const layout = index % 2 === 0 ? LAYOUT.textFirst : LAYOUT.visualFirst;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.li
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative border-t border-accent/15 pt-6"
    >
      {/* Hover rule draws in from the start edge */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-[-1px] h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
      />

      <motion.div
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-8"
      >
        {/* Identity: number, year, name, category */}
        <div className={`min-w-0 lg:col-span-7 lg:row-start-1 ${layout.text}`}>
          <div className="flex items-center gap-4">
            <span
              dir="ltr"
              className="font-mono text-sm tabular-nums text-accent/60 transition-colors duration-300 group-hover:text-accent"
            >
              {number}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-accent/20" />
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 border border-accent bg-dark-bg transition-colors duration-300 group-hover:bg-accent"
            />
            {project.year && (
              <span className="text-xs tabular-nums text-gray-400">سال: {project.year}</span>
            )}
          </div>

          <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-100 md:text-3xl lg:text-4xl">
            {project.name}
          </h3>

          <p className="mt-3 flex items-center gap-3 text-sm font-medium uppercase text-accent">
            <span aria-hidden="true" className="h-px w-6 bg-accent" />
            {project.category}
          </p>
        </div>

        {/* Visual */}
        <div className={`min-w-0 lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:self-start ${layout.visual}`}>
          <ProjectVisual project={project} number={number} />
        </div>

        {/* Technical metadata + description */}
        <div className={`min-w-0 lg:col-span-7 lg:row-start-2 ${layout.text}`}>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            <MetaCell label="نوع پروژه">{project.type}</MetaCell>
            <MetaCell label="موقعیت">
              <span className="flex items-center gap-2">
                <MapPin aria-hidden="true" size={15} strokeWidth={1.5} className="shrink-0 text-accent" />
                {project.location}
              </span>
            </MetaCell>
            <MetaCell label="نقش در پروژه" className="sm:col-span-2">
              {project.role}
            </MetaCell>
          </dl>

          <p className="mt-6 text-base leading-8 text-gray-300">{project.description}</p>
        </div>
      </motion.div>
    </motion.li>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export const Projects = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-gray-800 bg-dark-bg py-20 md:py-28"
    >
      {/* Blueprint grid, same language as the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.035) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at 50% 35%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 20%, transparent 75%)',
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
              03 / PROJECTS
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
            {projects.length > 0 && (
              <span aria-hidden="true" dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-gray-500">
                TOTAL {pad(projects.length)}
              </span>
            )}
          </div>
          <h2 className="heading-2">پروژه‌ها</h2>
        </motion.header>

        {projects.length === 0 ? (
          /* Public-facing empty state */
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden border border-accent/20 bg-charcoal/30 px-6 py-20 text-center md:py-28"
          >
            <BlueprintArt />
            <CornerBrackets />
            <div className="relative space-y-3">
              <p dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-accent/70">
                00 / ARCHIVE
              </p>
              <h3 className="text-2xl font-bold text-gray-100 md:text-3xl">در حال به‌روزرسانی</h3>
              <p className="text-gray-400">اطلاعات پروژه‌ها به زودی به روز خواهد شد</p>
            </div>
          </motion.div>
        ) : (
          <ol className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};