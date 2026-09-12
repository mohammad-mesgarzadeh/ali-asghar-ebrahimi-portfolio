import { motion } from 'framer-motion';

interface FooterProps {
  onNavClick?: (sectionId: string) => void;
}

export const Footer = ({ onNavClick }: FooterProps) => {
  const navItems = [
    { label: 'درباره من', id: 'about' },
    { label: 'تجربه کاری', id: 'experience' },
    { label: 'مهارت‌ها', id: 'skills' },
    { label: 'تماس', id: 'contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-bold text-white">
              علی اصغر ابراهیمی
            </h3>
            <p className="text-sm text-gray-400">
              مهندس عمران | مدیر پروژه و سرپرست اجرا
            </p>
            <p className="text-sm text-gray-500 mt-2">
              متخصص در اجرای پروژه‌های ساختمانی و صنعتی
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              دسترسی سریع
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavClick?.(item.id)}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              تماس
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:09212622676"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  ۰۹۲۱۲۶۲۲۶۷۶
                </a>
              </li>
              <li>
                <a
                  href="mailto:alirodabiyan@gmail.com"
                  className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 break-all"
                >
                  alirodabiyan@gmail.com
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-400">تهران</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>
            © {currentYear} علی اصغر ابراهیمی. تمام حقوق محفوظ است.
          </p>
          <p>
            طراحی و توسعه با <span className="text-accent">❤</span> شده است
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
