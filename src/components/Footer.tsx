import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavClick?: (sectionId: string) => void;
}

export const Footer = ({ onNavClick }: FooterProps) => {
  const navItems = [
    { label: 'درباره من', id: 'about', number: '01' },
    { label: 'تجربه کاری', id: 'experience', number: '02' },
    { label: 'مهارت‌ها', id: 'skills', number: '03' },
    { label: 'تماس', id: 'contact', number: '04' },
  ];

  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    onNavClick?.(sectionId);
  };

  return (
    <footer className="relative overflow-hidden bg-charcoal border-t border-gray-800">
      {/* Subtle engineering grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Technical corner markers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-20 h-20 border-r border-b border-accent/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-24 h-24 border-l border-t border-accent/10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        {/* Top technical label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-accent">
            08 / FOOTER
          </span>

          <div className="h-px flex-1 bg-gray-800" />

          <span className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-600">
            AE / CIVIL ENGINEERING
          </span>
        </motion.div>

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="max-w-md">
              <p className="text-[11px] font-mono tracking-widest text-accent mb-4">
                CIVIL ENGINEER
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                علی اصغر ابراهیمی
              </h2>

              <p className="mt-4 text-sm md:text-base text-gray-400 leading-7">
                مهندس عمران | مدیر پروژه | سرپرست اجرا
              </p>

              <p className="mt-5 text-sm text-gray-500 leading-7 max-w-sm">
                تجربه در مدیریت پروژه، اجرای عملیات سیویل، مدیریت کارگاه و
                پروژه‌های ساختمانی و صنعتی.
              </p>

              {/* Technical reference */}
              <div className="mt-8 flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-wider">
                <span className="w-2 h-2 border border-accent/60" />
                <span>TEHRAN / IRAN</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            aria-label="دسترسی سریع"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono text-accent">
                01
              </span>

              <h3 className="text-xs font-semibold text-white tracking-wide">
                دسترسی سریع
              </h3>
            </div>

            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      justify-between
                      py-2.5
                      text-right
                      text-sm
                      text-gray-500
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-1
                      focus-visible:ring-accent
                      transition-colors
                      duration-200
                    "
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-gray-700 group-hover:text-accent transition-colors">
                        {item.number}
                      </span>

                      <span>{item.label}</span>
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="
                        opacity-0
                        -translate-x-1
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        transition-all
                        duration-200
                        text-accent
                      "
                    />
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-mono text-accent">
                02
              </span>

              <h3 className="text-xs font-semibold text-white tracking-wide">
                اطلاعات تماس
              </h3>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:09212622676"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  py-2
                  focus-visible:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-accent
                "
              >
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="text-accent shrink-0"
                />

                <div>
                  <span className="block text-[10px] font-mono text-gray-600 mb-1">
                    PHONE
                  </span>

                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    ۰۹۲۱۲۶۲۲۶۷۶
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:alirodabiyan@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  py-2
                  focus-visible:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-accent
                "
              >
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="text-accent shrink-0"
                />

                <div className="min-w-0">
                  <span className="block text-[10px] font-mono text-gray-600 mb-1">
                    EMAIL
                  </span>

                  <span className="block text-sm text-gray-400 group-hover:text-white transition-colors break-all">
                    alirodabiyan@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 py-2">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="text-accent shrink-0"
                />

                <div>
                  <span className="block text-[10px] font-mono text-gray-600 mb-1">
                    LOCATION
                  </span>

                  <span className="text-sm text-gray-400">
                    تهران
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical divider */}
        <div className="relative my-10 md:my-12">
          <div className="h-px bg-gray-800" />

          <div
            aria-hidden="true"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              w-2
              h-2
              bg-charcoal
              border
              border-accent/50
            "
          />
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            flex
            flex-col
            sm:flex-row
            justify-between
            items-start
            sm:items-center
            gap-4
          "
        >
          <p className="text-[11px] text-gray-600">
            © {currentYear} علی اصغر ابراهیمی. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-700 tracking-wider">
            <span>PORTFOLIO</span>
            <span className="text-accent">/</span>
            <span>CIVIL ENGINEERING</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};  