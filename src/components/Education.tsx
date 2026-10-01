import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';

/* Source of truth: exactly the facts from the original component. */
const EDUCATION = {
  degree: 'کارشناسی مهندسی عمران',
  university: 'دانشگاه آزاد اسلامی، واحد یادگار امام خمینی',
  startYear: '۱۳۹۸',
  endYear: '۱۴۰۳',
  duration: '۵ سال',
} as const;

const CornerBrackets = () => (
  <>
    <span aria-hidden="true" className="absolute right-0 top-0 h-3 w-3 border-r border-t border-accent/60" />
    <span aria-hidden="true" className="absolute left-0 top-0 h-3 w-3 border-l border-t border-accent/60" />
    <span aria-hidden="true" className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/60" />
    <span aria-hidden="true" className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/60" />
  </>
);

const TimelineEndMarker = ({ side }: { side: 'start' | 'end' }) => (
  <span
    aria-hidden="true"
    className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 border border-accent bg-dark-bg transition-colors duration-300 group-hover:bg-accent ${
      side === 'start' ? 'right-0' : 'left-0'
    }`}
  />
);

export const Education = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };
  const recordVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 },
    },
  };
  const timelineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1.1, ease: 'easeOut', delay: 0.4 } },
  };

  return (
    <section
      id="education"
      className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-charcoal to-dark-bg py-20 md:py-28"
    >
      {/* Blueprint grid, same language as the other sections */}
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
              06 / EDUCATION
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
          <h2 className="heading-2">تحصیلات</h2>
        </motion.header>

        {/* Academic record */}
        <motion.article
          variants={recordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          aria-labelledby="education-degree"
          className="group relative"
        >
          <CornerBrackets />
          {/* Hover rule draws in from the start edge */}
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
          />

          <motion.div
            whileHover={reduceMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-10 px-6 py-10 md:px-10 lg:grid-cols-12 lg:gap-0 lg:py-14"
          >
            {/* Degree + university */}
            <div className="min-w-0 space-y-8 lg:col-span-7 lg:pl-12">
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-xs text-gray-400">
                  <GraduationCap aria-hidden="true" size={16} strokeWidth={1.5} className="text-accent" />
                  مدرک تحصیلی
                </p>
                <h3
                  id="education-degree"
                  className="text-3xl font-bold leading-tight text-gray-100 transition-colors duration-300 group-hover:text-white md:text-4xl"
                >
                  {EDUCATION.degree}
                </h3>
              </div>

              <div className="space-y-3 border-t border-accent/15 pt-6">
                <p className="flex items-center gap-2 text-xs text-gray-400">
                  <Building2 aria-hidden="true" size={16} strokeWidth={1.5} className="text-accent" />
                  دانشگاه
                </p>
                <p className="text-lg font-medium leading-8 text-gray-300 md:text-xl">
                  {EDUCATION.university}
                </p>
              </div>
            </div>

            {/* Period + duration */}
            <div className="min-w-0 border-t border-accent/15 pt-8 lg:col-span-5 lg:border-r lg:border-t-0 lg:pr-12 lg:pt-0">
              <p className="text-xs text-gray-400">دوره تحصیلی</p>
              {/* Screen readers get the original string; the split version is visual only */}
              <span className="sr-only">
                {EDUCATION.startYear} — {EDUCATION.endYear}
              </span>

              <div aria-hidden="true" className="mt-4 flex items-center gap-4">
                <span className="text-xl font-semibold tabular-nums text-gray-100 md:text-2xl">
                  {EDUCATION.startYear}
                </span>
                <div className="relative h-2 flex-1">
                  <motion.span
                    variants={timelineVariants}
                    style={{ originX: 1 }}
                    className="absolute inset-x-0 top-1/2 h-px bg-accent/40"
                  />
                  <TimelineEndMarker side="start" />
                  <TimelineEndMarker side="end" />
                </div>
                <span className="text-xl font-semibold tabular-nums text-gray-100 md:text-2xl">
                  {EDUCATION.endYear}
                </span>
              </div>

              <div className="mt-3 flex flex-col items-center">
                <span aria-hidden="true" className="h-3 w-px bg-accent/40" />
                <p className="mt-1.5 text-sm text-gray-400">
                  <span className="text-xs">مدت دوره: </span>
                  <span className="font-medium text-gray-200">{EDUCATION.duration}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
};