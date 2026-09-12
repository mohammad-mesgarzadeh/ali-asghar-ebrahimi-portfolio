import { motion } from 'framer-motion';

export const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-28 bg-dark-bg">
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
            <h2 className="heading-2">درباره من</h2>
            <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
          </motion.div>

          {/* Main Bio */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <p className="body-text text-justify">
              علی اصغر ابراهیمی، مهندس عمران با حدود ۵ سال سابقه فعالیت حرفه‌ای در
              حوزه‌های ساختمانی و صنعتی است. تجربه او شامل مدیریت پروژه، سرپرستی
              اجرای عملیات سیویل، مدیریت کارگاه، تجهیز کارگاه‌های صنعتی و
              ساختمانی، نظارت بر عملیات اجرایی و فعالیت‌های مرتبط با خرید و امور
              مالی است.
            </p>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="heading-3">حوزه‌های تخصصی</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'عملیات خاکی',
                'ساختمان‌های مسکونی و صنعتی',
                'سازه‌های فلزی',
                'محوطه‌سازی',
                'متره و برآورد',
                'نظارت بر پروژه‌های اجرایی',
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 border-r-2 border-accent/50"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">{expertise}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="heading-3">نقاط قوت</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'کارآزموده و متخصص',
                'مدیریت موثر',
                'توجه به جزئیات',
                'اجرای حرفه‌ای',
                'تعاون و همکاری',
                'حل مسئله',
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-3 border border-accent/30 rounded-lg text-center text-gray-300 hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  {strength}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
