import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { MapPin, Calendar } from 'lucide-react';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="experience" className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-dark-bg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="heading-2">تجربه کاری</h2>
            <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-8 md:space-y-6">
            {/* Vertical Line */}
            <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            {/* Experience Items */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute right-2 md:right-1/2 md:translate-x-1/2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:text-right'} pr-16 md:pr-0`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 border border-gray-700 rounded-lg hover:border-accent/50 bg-charcoal/50 hover:bg-charcoal/70 transition-all duration-300 group"
                    >
                      {/* Position */}
                      <h3 className="heading-3 text-accent group-hover:text-accent-light transition-colors">
                        {exp.position}
                      </h3>

                      {/* Company */}
                      <p className="text-lg font-semibold text-gray-300 mt-2">
                        {exp.company}
                      </p>

                      {/* Location & Duration */}
                      <div className="flex flex-col gap-2 mt-3 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-accent flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-accent flex-shrink-0" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        <p className="text-accent font-medium mt-2">
                          {exp.duration}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-600">
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-gray-400">
                                <span className="text-accent flex-shrink-0">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
