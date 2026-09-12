import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { MapPin, Briefcase } from 'lucide-react';

export const Projects = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-dark-bg border-b border-gray-800">
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
            <h2 className="heading-2">پروژه‌ها</h2>
            <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
          </motion.div>

          {/* Empty State with Instructions */}
          {projects.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="py-16 text-center border-2 border-dashed border-gray-700 rounded-lg"
            >
              <div className="space-y-4">
                <Briefcase
                  size={48}
                  className="mx-auto text-accent/50"
                />
                <p className="text-gray-400">
                  اطلاعات پروژه‌ها به زودی به روز خواهد شد
                </p>
                <p className="text-sm text-gray-500">
                  برای افزودن پروژه‌ها، فایل{' '}
                  <code className="bg-charcoal px-2 py-1 rounded text-accent">
                    src/data/projects.ts
                  </code>{' '}
                  را ویرایش کنید
                </p>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Projects Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group h-full"
                  >
                    <div className="h-full p-6 border border-gray-700 rounded-lg hover:border-accent/50 bg-charcoal/30 hover:bg-charcoal/60 transition-all duration-300 flex flex-col"
                    >
                      {/* Image Placeholder */}
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                      ) : (
                        <div className="w-full h-40 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-gray-500">
                            Image Placeholder
                          </span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="heading-3 text-accent group-hover:text-accent-light transition-colors">
                        {project.name}
                      </h3>

                      {/* Category Badge */}
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                          {project.category}
                        </span>
                      </div>

                      {/* Type */}
                      <p className="text-gray-400 text-sm mt-3">
                        {project.type}
                      </p>

                      {/* Location */}
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                        <MapPin size={14} className="text-accent flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>

                      {/* Role */}
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          نقش مهندس
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          {project.role}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mt-3 flex-grow">
                        {project.description}
                      </p>

                      {/* Year */}
                      {project.year && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <span className="text-xs text-accent font-semibold">
                            سال: {project.year}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
