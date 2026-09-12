import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'تلفن',
      value: '۰۹۲۱۲۶۲۲۶۷۶',
      href: 'tel:09212622676',
    },
    {
      icon: Mail,
      label: 'ایمیل',
      value: 'alirodabiyan@gmail.com',
      href: 'mailto:alirodabiyan@gmail.com',
    },
    {
      icon: MapPin,
      label: 'شهر',
      value: 'تهران',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="heading-2">برای همکاری آماده‌ام</h2>
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-accent rounded-full" />
            </div>
            <p className="subheading max-w-2xl mx-auto">
              برای همکاری در پروژه‌های ساختمانی، صنعتی و عمرانی می‌توانید با من در
              ارتباط باشید.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <motion.a
                    href={info.href || undefined}
                    target={info.href?.startsWith('mailto') ? undefined : '_blank'}
                    rel={info.href?.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="block p-6 border border-gray-700 rounded-lg hover:border-accent/50 bg-charcoal/50 hover:bg-charcoal/70 transition-all duration-300 cursor-pointer"
                    whileHover={info.href ? { scale: 1.02 } : {}}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                        <Icon size={28} className="text-accent" />
                      </div>
                      <div className="text-right flex-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-gray-300 font-semibold mt-1 group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center pt-6">
            <motion.a
              href="tel:09212622676"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              تماس با من
            </motion.a>
          </motion.div>

          {/* Additional Message */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-800 text-center"
          >
            <p className="body-text">
              پاسخ دادن به تماس‌ها و درخواست‌های همکاری برای من اولویت است. لطفاً
              انتظار پاسخی سریع و حرفه‌ای را داشته باشید.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
