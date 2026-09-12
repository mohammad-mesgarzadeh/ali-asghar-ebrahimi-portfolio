import { motion } from 'framer-motion';
import { software } from '../data/software';

export const Software = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'پیشرفته':
        return 'from-accent to-accent-light';
      case 'متوسط':
        return 'from-accent/80 to-accent-light/70';
      case 'مقدماتی':
        return 'from-accent/50 to-accent-light/40';
      default:
        return 'from-accent to-accent-light';
    }
  };

  return (
    <section id="software" className="relative py-20 md:py-28 bg-dark-bg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={headerVariants}>
            <h2 className="heading-2">نرم‌افزارها</h2>
            <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
          </motion.div>

          {/* Software Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {software.map((app) => (
              <motion.div
                key={app.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="p-6 border border-gray-700 rounded-lg hover:border-accent/50 bg-charcoal/50 hover:bg-charcoal/70 transition-all duration-300 h-full flex flex-col">
                  {/* Software Name */}
                  <h3 className="heading-3 text-white group-hover:text-accent transition-colors">
                    {app.name}
                  </h3>

                  {/* Level Badge */}
                  <div className="mt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                      سطح مهارت
                    </p>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getLevelColor(
                          app.level
                        )} text-white`}
                      >
                        {app.level}
                      </span>
                    </div>
                  </div>

                  {/* Skill Indicator Bar */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: getProgressWidth(app.level) }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${getLevelColor(
                          app.level
                        )}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div variants={headerVariants} className="mt-12 pt-8 border-t border-gray-800">
            <p className="body-text text-center">
              من از جدیدترین نسخه‌های این نرم‌افزارها استفاده می‌کنم و به طور مستمر مهارت‌های خود را ارتقا می‌دهم.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to get progress width based on level
function getProgressWidth(level: string): string {
  switch (level) {
    case 'پیشرفته':
      return '90%';
    case 'متوسط':
      return '70%';
    case 'مقدماتی':
      return '45%';
    default:
      return '70%';
  }
}
