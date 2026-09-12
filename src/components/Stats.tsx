import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

export const Stats = () => {
  const stats: Stat[] = [
    {
      value: '۵+',
      label: 'سابقه فعالیت حرفه‌ای',
    },
    {
      value: 'متعدد',
      label: 'مدیریت پروژه',
    },
    {
      value: 'گسترده',
      label: 'اجرای سیویل',
    },
    {
      value: 'متنوع',
      label: 'حوزه فعالیت',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-dark-bg via-charcoal to-dark-bg border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 md:p-8 text-center space-y-3 border border-gray-700 rounded-lg hover:border-accent/50 transition-colors duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
