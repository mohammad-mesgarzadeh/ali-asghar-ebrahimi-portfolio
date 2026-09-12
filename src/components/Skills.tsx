import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const existing = acc.find((g) => g.category === skill.category);
    if (existing) {
      existing.skills.push(skill);
    } else {
      acc.push({ category: skill.category, skills: [skill] });
    }
    return acc;
  }, [] as Array<{ category: string; skills: typeof skills }>);

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-dark-bg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={headerVariants}>
            <h2 className="heading-2">مهارت‌ها</h2>
            <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
          </motion.div>

          {/* Skills by Category */}
          <motion.div
            variants={containerVariants}
            className="space-y-10"
          >
            {groupedSkills.map((group) => (
              <motion.div key={group.category} variants={headerVariants} className="space-y-4">
                <h3 className="heading-3 text-accent">{group.category}</h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 sm:px-5 py-2.5 sm:py-3 bg-charcoal border border-gray-700 rounded-lg text-gray-300 text-sm sm:text-base font-medium hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {skill.title}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.div
            variants={headerVariants}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="body-text text-center">
              مجموع مهارت‌های تخصصی و حرفه‌ای من شامل {skills.length} حوزه مختلف است که از طریق سال‌های تجربه عملی کسب شده‌اند.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
