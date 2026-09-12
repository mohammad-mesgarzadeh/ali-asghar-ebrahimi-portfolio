import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

export const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-dark-bg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-2">تحصیلات</h2>
            <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group"
          >
            <div className="relative p-8 md:p-10 border border-gray-700 rounded-lg hover:border-accent/50 bg-charcoal/50 hover:bg-charcoal/70 transition-all duration-300 overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300" />

              <div className="relative z-10 space-y-6">
                {/* Degree Icon */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Award size={28} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      مدرک تحصیلی
                    </p>
                    <h3 className="heading-3 text-white group-hover:text-accent transition-colors">
                      کارشناسی مهندسی عمران
                    </h3>
                  </div>
                </div>

                {/* University */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <BookOpen size={28} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      دانشگاه
                    </p>
                    <p className="text-lg font-semibold text-gray-300 mt-1">
                      دانشگاه آزاد اسلامی، واحد یادگار امام خمینی
                    </p>
                  </div>
                </div>

                {/* Period */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    <span className="text-accent font-semibold">دوره تحصیلی: </span>
                    ۱۳۹۸ — ۱۴۰۳
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    <span className="text-accent font-semibold">مدت دوره: </span>
                    ۵ سال
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 border-r-4 border-accent bg-accent/5 rounded-lg"
          >
            <p className="text-gray-300">
              تحصیلات من در رشته مهندسی عمران به من ابزارهای نظری و عملی لازم برای
              مدیریت پروژه‌های ساختمانی و صنعتی و نظارت بر عملیات اجرایی را فراهم
              کرده‌اند. ترکیب تحصیلات دانشگاهی و تجربه عملی میدانی، باعث تخصص
              جامع‌تری در این حوزه شده‌است.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
