import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onCtaClick?: (type: 'portfolio' | 'contact') => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(212, 132, 79, .05) 25%, rgba(212, 132, 79, .05) 26%, transparent 27%, transparent 74%, rgba(212, 132, 79, .05) 75%, rgba(212, 132, 79, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(212, 132, 79, .05) 25%, rgba(212, 132, 79, .05) 26%, transparent 27%, transparent 74%, rgba(212, 132, 79, .05) 75%, rgba(212, 132, 79, .05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 md:space-y-8"
        >
          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="heading-1">
            علی اصغر ابراهیمی
          </motion.h1>

          {/* Professional Title */}
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent">
              مهندس عمران | مدیر پروژه | سرپرست اجرا
            </p>
            <p className="subheading max-w-3xl mx-auto">
              متخصص در مدیریت پروژه، اجرای عملیات سیویل، مدیریت کارگاه و نظارت بر
              پروژه‌های ساختمانی و صنعتی
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-10"
          >
            <button
              onClick={() => onCtaClick?.('portfolio')}
              className="btn-primary"
            >
              مشاهده سوابق
            </button>
            <button
              onClick={() => onCtaClick?.('contact')}
              className="btn-secondary"
            >
              تماس با من
            </button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12 md:pt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="mx-auto text-accent opacity-60" size={32} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl opacity-10" />
    </section>
  );
};
