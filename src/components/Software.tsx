import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { software } from '../data/software';

type SoftwareEntry = (typeof software)[number];

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * The three qualitative levels from the data, differentiated by text weight and
 * tone only. The level word itself is always shown, so nothing relies on colour,
 * and no numeric value or bar is implied.
 */
const levelClass = (level: string) => {
  switch (level) {
    case 'پیشرفته':
      return 'font-semibold text-accent';
    case 'مقدماتی':
      return 'font-medium text-gray-400';
    default: // متوسط and any other value
      return 'font-medium text-accent/80';
  }
};

/* ------------------------------------------------------------------ */
/* One directory row                                                   */
/* ------------------------------------------------------------------ */
interface SoftwareItemProps {
  app: SoftwareEntry;
  index: number;
  variants: Variants;
  reduceMotion: boolean;
}

const SoftwareItem = ({ app, index, variants, reduceMotion }: SoftwareItemProps) => (
  <motion.li variants={variants} className="group/soft border-t border-accent/15">
    {/* RTL: content starts on the right, so hover nudges it inward (left) */}
    <motion.div
      whileHover={reduceMotion ? undefined : { x: -4 }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-3 py-5 sm:gap-4"
    >
      <span dir="ltr" className="w-6 shrink-0 font-mono text-xs tabular-nums text-accent/70">
        {pad(index + 1)}
      </span>

      <span aria-hidden="true" className="hidden w-12 shrink-0 items-center gap-1.5 sm:flex">
        <span className="h-px w-5 bg-accent/30 transition-all duration-300 group-hover/soft:w-9 group-hover/soft:bg-accent" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent opacity-0 transition-opacity duration-300 group-hover/soft:opacity-100" />
      </span>

      <h3 className="min-w-0 flex-1 text-base font-medium text-gray-200 transition-colors duration-300 group-hover/soft:text-white sm:text-lg">
        {app.name}
      </h3>

      <p className="flex shrink-0 items-baseline gap-2 text-sm">
        <span className="text-xs text-gray-400">سطح</span>
        <span className={`transition-opacity duration-300 group-hover/soft:opacity-100 ${levelClass(app.level)}`}>
          {app.level}
        </span>
      </p>
    </motion.div>
  </motion.li>
);

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export const Software = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };
  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: 0.1 } },
  };
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section
      id="software"
      className="relative overflow-hidden border-b border-gray-800 bg-dark-bg py-20 md:py-28"
    >
      {/* Blueprint grid, same language as the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.035) 1px, transparent 1px)`,
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
              05 / SOFTWARE
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
              ITEMS {pad(software.length)}
            </span>
          </div>
          <h2 className="heading-2">نرم‌افزارها</h2>
        </motion.header>

        {/* Directory */}
        <div className="relative">
          {/* Structural axis between the two desktop columns */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden border-l border-dashed border-accent/10 md:block"
          />
          <motion.ol
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid grid-cols-1 gap-x-16 border-b border-accent/15 md:grid-cols-2 lg:gap-x-24"
          >
            {software.map((app, index) => (
              <SoftwareItem
                key={app.id}
                app={app}
                index={index}
                variants={rowVariants}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};