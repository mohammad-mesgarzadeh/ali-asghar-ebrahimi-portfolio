import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  Building2,
  Compass,
  Ruler,
} from 'lucide-react';
import EngineeringCanvasBackground from './EngineeringCanvasBackground';

interface HeroProps {
  onCtaClick?: (type: 'portfolio' | 'contact') => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-dark-bg
        border-b
        border-gray-800
      "
    >
      {/* Engineering Canvas Background */}
      <EngineeringCanvasBackground />

      {/* Subtle Technical Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Technical Corner Marker — Top Left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-24
          left-6
          md:left-10
          w-16
          h-16
          border-l
          border-t
          border-accent/20
        "
      />

      {/* Technical Corner Marker — Bottom Right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-8
          right-6
          md:right-10
          w-20
          h-20
          border-r
          border-b
          border-accent/20
        "
      />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-28
          pb-16
          md:pt-32
          md:pb-20
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* =====================================================
              LEFT — MAIN INTRO
          ====================================================== */}

          <div className="lg:col-span-8">
            {/* Section Label */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="
                    text-[10px]
                    sm:text-xs
                    font-mono
                    tracking-[0.25em]
                    text-accent
                  "
                >
                  00 / CIVIL ENGINEERING
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-16 bg-accent/40"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                مهندس عمران
              </p>

              <h1
                className="
                  max-w-4xl
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  tracking-tight
                  leading-[1.15]
                  text-white
                "
              >
                علی اصغر ابراهیمی
              </h1>
            </motion.div>

            {/* Professional Position */}
            <motion.div
              variants={itemVariants}
              className="mt-7 md:mt-9 max-w-3xl"
            >
              <p
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-medium
                  text-gray-200
                  leading-relaxed
                "
              >
                مدیر پروژه
                <span
                  aria-hidden="true"
                  className="text-accent mx-2"
                >
                  |
                </span>
                سرپرست اجرا
                <span
                  aria-hidden="true"
                  className="text-accent mx-2"
                >
                  |
                </span>
                اجرای سیویل
              </p>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  md:text-base
                  text-gray-400
                  leading-8
                "
              >
                تجربه در مدیریت پروژه، اجرای عملیات سیویل، مدیریت کارگاه و
                نظارت بر فرآیندهای اجرایی پروژه‌های ساختمانی و صنعتی.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-3
                mt-9
              "
            >
              <button
                type="button"
                onClick={() => onCtaClick?.('portfolio')}
                className="
                  btn-primary
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  focus-visible:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-accent
                "
              >
                <span>مشاهده سوابق</span>

                <ArrowLeft
                  size={17}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-x-1
                  "
                />
              </button>

              <button
                type="button"
                onClick={() => onCtaClick?.('contact')}
                className="
                  btn-secondary
                  focus-visible:outline-none
                  focus-visible:ring-1
                  focus-visible:ring-accent
                "
              >
                تماس با من
              </button>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — ENGINEERING PROFILE
          ====================================================== */}

          <motion.div
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <div
              className="
                relative
                overflow-hidden
                border
                border-gray-800
                bg-charcoal/40
                backdrop-blur-sm
                p-5
                md:p-7
              "
            >
              {/* Decorative Technical Line */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  top-0
                  left-0
                  h-px
                  w-24
                  bg-accent/60
                "
              />

              {/* Panel Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-5
                  border-b
                  border-gray-800
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      w-1.5
                      h-1.5
                      bg-accent
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-mono
                      tracking-[0.2em]
                      text-gray-500
                    "
                  >
                    ENGINEERING PROFILE
                  </span>
                </div>

                <span
                  className="
                    text-[10px]
                    font-mono
                    text-accent
                  "
                >
                  01
                </span>
              </div>

              {/* Technical Information */}
              <div className="divide-y divide-gray-800">
                {/* Field */}
                <div className="flex items-center gap-4 py-5">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      border
                      border-gray-800
                      shrink-0
                    "
                  >
                    <Building2
                      size={19}
                      strokeWidth={1.3}
                      aria-hidden="true"
                      className="text-accent"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-mono
                        tracking-[0.16em]
                        text-gray-600
                        mb-1
                      "
                    >
                      FIELD
                    </p>

                    <p className="text-sm text-gray-300">
                      مهندسی عمران
                    </p>
                  </div>
                </div>

                {/* Specialization */}
                <div className="flex items-center gap-4 py-5">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      border
                      border-gray-800
                      shrink-0
                    "
                  >
                    <Compass
                      size={19}
                      strokeWidth={1.3}
                      aria-hidden="true"
                      className="text-accent"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-mono
                        tracking-[0.16em]
                        text-gray-600
                        mb-1
                      "
                    >
                      SPECIALIZATION
                    </p>

                    <p className="text-sm text-gray-300">
                      مدیریت و اجرای پروژه
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-4 py-5">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      border
                      border-gray-800
                      shrink-0
                    "
                  >
                    <Ruler
                      size={19}
                      strokeWidth={1.3}
                      aria-hidden="true"
                      className="text-accent"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-mono
                        tracking-[0.16em]
                        text-gray-600
                        mb-1
                      "
                    >
                      EXPERIENCE
                    </p>

                    <p className="text-sm text-gray-300">
                      حدود ۵ سال تجربه حرفه‌ای
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Footer */}
              <div className="pt-5 border-t border-gray-800">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    text-[9px]
                    font-mono
                    tracking-[0.12em]
                    text-gray-700
                  "
                >
                  <span>TEHRAN</span>

                  <span>IRAN</span>

                  <span>AE-01</span>
                </div>
              </div>

              {/* Corner Detail */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -top-px
                  -right-px
                  w-8
                  h-8
                  border-t
                  border-r
                  border-accent/60
                "
              />

              {/* Bottom Corner Detail */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-px
                  -left-px
                  w-5
                  h-5
                  border-b
                  border-l
                  border-gray-700
                "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <motion.div
          variants={itemVariants}
          className="
            flex
            items-center
            justify-between
            mt-14
            md:mt-20
            pt-5
            border-t
            border-gray-800
          "
        >
          {/* Technical Label */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="w-2 h-2 bg-accent"
            />

            <span
              className="
                text-[9px]
                sm:text-[10px]
                font-mono
                tracking-[0.18em]
                text-gray-600
              "
            >
              PROJECT / EXECUTION / MANAGEMENT
            </span>
          </div>

          {/* Scroll Button */}
          <motion.button
            type="button"
            onClick={() => onCtaClick?.('portfolio')}
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-label="مشاهده ادامه صفحه"
            className="
              hidden
              sm:flex
              items-center
              justify-center
              w-10
              h-10
              border
              border-gray-800
              text-accent
              hover:border-accent/50
              hover:bg-accent/[0.03]
              transition-colors
              duration-200
              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-accent
            "
          >
            <ArrowDown
              size={17}
              aria-hidden="true"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};