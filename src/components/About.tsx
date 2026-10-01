import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Building2, ClipboardCheck, Construction, Ruler, Shovel, Trees } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Content (all text comes from the existing About section)            */
/* ------------------------------------------------------------------ */
const BIO =
  'من علی‌اصغر ابراهیمی، مهندس عمران با حدود ۵ سال تجربه حرفه‌ای در حوزه‌های ساختمانی و صنعتی هستم. در زمینه مدیریت پروژه، سرپرستی و اجرای عملیات سیویل، مدیریت و تجهیز کارگاه‌های ساختمانی و صنعتی و نظارت بر فرآیندهای اجرایی فعالیت داشته‌ام. همچنین تجربه در حوزه‌های خرید، تأمین و امور مالی، دیدگاه جامع‌تری از فرآیندهای مدیریت و اجرای پروژه در اختیارم قرار داده است.';

const SPEC_FACTS: { label: string; value: string }[] = [
  { label: 'سابقه فعالیت', value: 'حدود ۵ سال' },
  { label: 'حوزه فعالیت', value: 'ساختمانی و صنعتی' },
];

const SPEC_DISCIPLINES = ['مدیریت پروژه', 'اجرای سیویل', 'مدیریت کارگاه', 'نظارت اجرایی'];

const EXPERTISE: { title: string; icon: LucideIcon }[] = [
  { title: 'عملیات خاکی', icon: Shovel },
  { title: 'ساختمان‌های مسکونی و صنعتی', icon: Building2 },
  { title: 'سازه‌های فلزی', icon: Construction },
  { title: 'محوطه‌سازی', icon: Trees },
  { title: 'متره و برآورد', icon: Ruler },
  { title: 'نظارت بر پروژه‌های اجرایی', icon: ClipboardCheck },
];

const STRENGTHS = [
  'تجربه و تخصص',
  'مدیریت موثر',
  'توجه به جزئیات',
  'اجرای حرفه‌ای',
  'تعاون و همکاری',
  'حل مسئله',
];

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */
const TechLabel = ({ children }: { children: ReactNode }) => (
  <span dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-accent/80">
    {children}
  </span>
);

interface SubSectionProps {
  label: string;
  title: string;
  titleId: string;
  variants: Variants;
  children: ReactNode;
}

/** Editorial row: title on one side, content on the other (stacks on mobile). */
const SubSection = ({ label, title, titleId, variants, children }: SubSectionProps) => (
  <motion.section
    variants={variants}
    aria-labelledby={titleId}
    className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12"
  >
    <div className="space-y-3 lg:col-span-4">
      <TechLabel>{label}</TechLabel>
      <h3 id={titleId} className="heading-3">
        {title}
      </h3>
    </div>
    <div className="min-w-0 lg:col-span-8">{children}</div>
  </motion.section>
);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export const About = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.14, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-dark-bg py-20 md:py-28">
      {/* Blueprint grid (same language as the Hero canvas) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.035) 1px, transparent 1px), linear-gradient(0deg, rgba(212,132,79,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.06) 1px, transparent 1px)`,
            backgroundSize: '24px 24px, 24px 24px, 120px 120px, 120px 120px',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 25%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 25%, transparent 75%)',
          }}
        />
        {/* Structural axis line, wide screens only so it never touches content */}
        <div className="absolute inset-y-0 right-6 hidden border-r border-dashed border-accent/15 xl:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-16 md:space-y-24"
        >
          {/* ---------- Header ---------- */}
          <motion.header variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <TechLabel>01 / ABOUT</TechLabel>
              <motion.div
                variants={lineVariants}
                style={{ originX: 1 }}
                aria-hidden="true"
                className="relative h-px flex-1 bg-accent/25"
              >
                {/* measurement ticks */}
                <span
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(212,132,79,.35) 0 1px, transparent 1px 12px)',
                  }}
                />
                {/* end node */}
                <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-accent" />
              </motion.div>
            </div>
            <h2 className="heading-2">درباره من</h2>
          </motion.header>

          {/* ---------- Introduction + specification ---------- */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-7">
              <p className="body-text text-right !leading-[2.1] md:text-lg">{BIO}</p>
            </div>

            <aside aria-labelledby="about-spec" className="relative lg:col-span-5">
              {/* corner brackets */}
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 h-3 w-3 border-r border-t border-accent/60"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-3 w-3 border-l border-t border-accent/60"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/60"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/60"
              />

              <div className="px-6 py-7 md:px-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 id="about-spec" className="text-sm font-semibold text-gray-200">
                    مشخصات حرفه‌ای
                  </h3>
                  <TechLabel>SPEC</TechLabel>
                </div>

                <dl className="mt-5 divide-y divide-accent/15 border-t border-accent/25">
                  {SPEC_FACTS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-4 py-3.5 transition-colors duration-300 hover:bg-accent/[0.04]"
                    >
                      <dt className="text-sm text-gray-400">{label}</dt>
                      <dd className="text-sm font-medium text-gray-100">{value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="divide-y divide-accent/15 border-y border-accent/25">
                  {SPEC_DISCIPLINES.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-3.5 text-gray-200 transition-colors duration-300 hover:bg-accent/[0.04]"
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </motion.div>

          {/* ---------- Areas of expertise ---------- */}
          <SubSection
            label="EXPERTISE"
            title="حوزه‌های تخصصی"
            titleId="about-expertise"
            variants={itemVariants}
          >
            <motion.ul
              variants={listVariants}
              className="grid grid-cols-1 gap-x-10 border-b border-accent/15 sm:grid-cols-2"
            >
              {EXPERTISE.map(({ title, icon: Icon }, index) => (
                <motion.li
                  key={title}
                  variants={itemVariants}
                  className="group relative flex items-center gap-4 border-t border-accent/15 py-5"
                >
                  {/* hover rule draws in from the start edge */}
                  <span
                    aria-hidden="true"
                    className="absolute right-0 -top-px h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  />
                  <span
                    dir="ltr"
                    className="font-mono text-xs tabular-nums text-accent/70 transition-colors duration-300 group-hover:text-accent"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-5 w-5 shrink-0 text-accent/80 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-gray-200 transition-colors duration-300 group-hover:text-white">
                    {title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </SubSection>

          {/* ---------- Key strengths ---------- */}
          <SubSection
            label="STRENGTHS"
            title="نقاط قوت"
            titleId="about-strengths"
            variants={itemVariants}
          >
            <motion.ul
              variants={listVariants}
              className="grid grid-cols-2 gap-x-8 border-b border-accent/15 md:grid-cols-3"
            >
              {STRENGTHS.map((strength) => (
                <motion.li
                  key={strength}
                  variants={itemVariants}
                  className="group flex items-center gap-3 border-t border-accent/15 py-4 text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent/70 transition-colors duration-300 group-hover:bg-accent"
                  />
                  <span className="text-sm md:text-base">{strength}</span>
                </motion.li>
              ))}
            </motion.ul>
          </SubSection>
        </motion.div>
      </div>
    </section>
  );
};  