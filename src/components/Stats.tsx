import { motion, type Variants } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

export const Stats = () => {
  const stats: Stat[] = [
    {
      value: '۵+',
      label: 'سال تجربه کاری',
    },
    {
      value: '۶',
      label: 'سابقه شغلی',
    },
    {
      value: '۳',
      label: 'حوزه تخصصی',
    },
    {
      value: '۱',
      label: 'مدرک کارشناسی',
    },
  ];

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-16 md:py-20 bg-dark-bg overflow-hidden">
      {/* Subtle engineering lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`
                relative px-5 py-6 md:px-8 md:py-8 text-center
                group
                ${index !== stats.length - 1 ? 'md:border-l border-gray-800' : ''}
                ${index < 2 ? 'border-b md:border-b-0 border-gray-800' : ''}
              `}
            >
              {/* Accent line */}
              <div
                className="
                  absolute top-0 left-1/2 -translate-x-1/2
                  w-0 h-px bg-accent
                  group-hover:w-12
                  transition-all duration-500
                "
              />

              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent tracking-tight">
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