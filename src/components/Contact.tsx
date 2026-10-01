import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowUpLeft, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* Source of truth: exactly the contact details from the original component. */
const PHONE_HREF = 'tel:09212622676';

interface ContactEntry {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  /** Latin-script value that should render left-to-right inside the RTL layout */
  ltr?: boolean;
}

const CONTACTS: ContactEntry[] = [
  { id: 'phone', icon: Phone, label: 'تلفن', value: '۰۹۲۱۲۶۲۲۶۷۶', href: PHONE_HREF },
  {
    id: 'email',
    icon: Mail,
    label: 'ایمیل',
    value: 'alirodabiyan@gmail.com',
    href: 'mailto:alirodabiyan@gmail.com',
    ltr: true,
  },
  { id: 'city', icon: MapPin, label: 'شهر', value: 'تهران' },
];

const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent';

/* ------------------------------------------------------------------ */
/* One contact row: link when actionable, plain text otherwise         */
/* ------------------------------------------------------------------ */
interface ContactRowProps {
  entry: ContactEntry;
  variants: Variants;
  reduceMotion: boolean;
}

const ContactRow = ({ entry, variants, reduceMotion }: ContactRowProps) => {
  const { icon: Icon, label, value, href, ltr } = entry;
  const interactive = Boolean(href);

  const content = (
    <motion.div
      // RTL: content starts on the right, so hover nudges it inward (left)
      whileHover={interactive && !reduceMotion ? { x: -4 } : undefined}
      transition={{ duration: 0.25 }}
      className="relative flex items-center gap-5 py-6"
    >
      <Icon
        aria-hidden="true"
        size={20}
        strokeWidth={1.5}
        className={`shrink-0 text-accent/80 transition-colors duration-300 ${
          interactive ? 'group-hover/c:text-accent group-focus-visible/c:text-accent' : ''
        }`}
      />
      <div className="min-w-0 flex-1">
        <span className="block text-xs text-gray-400">{label}</span>
        <span
          dir={ltr ? 'ltr' : undefined}
          className={`mt-1.5 block break-all text-xl font-semibold tabular-nums text-gray-100 md:text-2xl ${
            ltr ? 'text-right' : ''
          } ${interactive ? 'transition-colors duration-300 group-hover/c:text-white' : ''}`}
        >
          {value}
        </span>
      </div>
      {interactive && (
        <ArrowUpLeft
          aria-hidden="true"
          size={18}
          strokeWidth={1.5}
          className="shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover/c:opacity-100 group-focus-visible/c:opacity-100"
        />
      )}
      {/* Accent rule draws in on hover / focus */}
      {interactive && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-px w-0 bg-accent transition-all duration-500 group-hover/c:w-full group-focus-visible/c:w-full"
        />
      )}
    </motion.div>
  );

  return (
    <motion.li variants={variants} className="border-t border-accent/15 last:border-b">
      {interactive ? (
        <a href={href} className={`group/c block ${FOCUS_RING}`}>
          {content}
        </a>
      ) : (
        content
      )}
    </motion.li>
  );
};

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export const Contact = () => {
  const reduceMotion = useReducedMotion() ?? false;

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.14, delayChildren: 0.05 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: 'easeOut' } },
  };
  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-dark-bg py-20 md:py-28">
      {/* Blueprint grid, same language as the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(212,132,79,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,79,.04) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-14 md:space-y-20"
        >
          {/* Header */}
          <motion.header variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <span dir="ltr" className="font-mono text-[11px] tracking-[0.25em] text-accent/80">
                07 / CONTACT
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
            <h2 className="heading-2">برای همکاری در ارتباط باشید</h2>
          </motion.header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Supporting text + CTA */}
            <motion.div variants={itemVariants} className="space-y-8 lg:col-span-5">
              <p className="text-base leading-8 text-gray-300 md:text-lg md:leading-9">
                برای همکاری در پروژه‌های ساختمانی، صنعتی و عمرانی می‌توانید با من در ارتباط باشید.
              </p>
              <motion.a
                href={PHONE_HREF}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.25 }}
                className={`btn-primary inline-flex items-center gap-2 ${FOCUS_RING}`}
              >
                <Phone aria-hidden="true" size={18} strokeWidth={1.75} />
                تماس مستقیم
              </motion.a>
            </motion.div>

            {/* Contact information */}
            <motion.div variants={itemVariants} className="relative lg:col-span-7">
              <span aria-hidden="true" className="absolute right-0 top-0 h-3 w-3 border-r border-t border-accent/60" />
              <span aria-hidden="true" className="absolute left-0 top-0 h-3 w-3 border-l border-t border-accent/60" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/60" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/60" />

              <div className="px-5 py-6 md:px-10 md:py-8">
                <motion.ul variants={listVariants}>
                  {CONTACTS.map((entry) => (
                    <ContactRow
                      key={entry.id}
                      entry={entry}
                      variants={itemVariants}
                      reduceMotion={reduceMotion}
                    />
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};