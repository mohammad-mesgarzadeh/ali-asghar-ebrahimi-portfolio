import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick?: (sectionId: string) => void;
}

export const Navbar = ({ onNavClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'درباره من', id: 'about' },
    { label: 'تجربه کاری', id: 'experience' },
    { label: 'پروژه‌ها', id: 'projects' },
    { label: 'مهارت‌ها', id: 'skills' },
    { label: 'نرم‌افزارها', id: 'software' },
    { label: 'تحصیلات', id: 'education' },
    { label: 'تماس', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      onNavClick?.(id);
    }, 300);
  };

  const handleContactClick = () => {
    handleNavClick('contact');
  };

  return (
    <nav
      className={`
        fixed
        top-0
        right-0
        left-0
        z-50
        backdrop-blur-md
        transition-all
        duration-300
        ease-out
        ${isScrolled
          ? 'bg-white/[0.03] border-b border-white/10'
          : 'bg-white/[0.02] border-b border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 sm:h-24 flex items-center justify-between gap-6">

          {/* =====================================================
              LOGO
          ====================================================== */}

          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="
              group
              shrink-0
              flex
              items-center
              gap-3
              rounded-md
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              focus-visible:ring-offset-2
              focus-visible:ring-offset-charcoal
            "
            aria-label="بازگشت به صفحه اصلی"
          >
            {/* Logo Mark */}
            <span
              className="
                relative
                flex
                items-center
                justify-center
                w-10
                h-10
                border
                border-gray-700
                text-accent
                transition-all
                duration-300
                group-hover:border-accent/60
                group-hover:bg-accent/[0.04]
              "
            >
              <Building2
                size={21}
                strokeWidth={1.5}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              {/* Top Right Technical Corner */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -top-px
                  -right-px
                  w-2.5
                  h-2.5
                  border-t
                  border-r
                  border-accent
                "
              />

              {/* Bottom Left Technical Corner */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-px
                  -left-px
                  w-2.5
                  h-2.5
                  border-b
                  border-l
                  border-accent/50
                "
              />

              {/* Small Center Point */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-1
                  right-1
                  w-1
                  h-1
                  bg-accent/60
                "
              />
            </span>

            {/* Technical Label */}
            <span
              className="
                hidden
                sm:block
                text-[9px]
                font-mono
                tracking-[0.18em]
                text-gray-600
                group-hover:text-gray-400
                transition-colors
                duration-200
              "
            >
              AE / CIVIL
            </span>
          </button>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="
                  relative
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-300
                  hover:text-white
                  transition-colors
                  duration-200
                  group
                  rounded-md
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                "
              >
                {item.label}

                {/* Hover Underline */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    right-3
                    left-3
                    h-px
                    bg-accent
                    scale-x-0
                    origin-center
                    group-hover:scale-x-100
                    transition-transform
                    duration-300
                  "
                />
              </button>
            ))}
          </div>

          {/* =====================================================
              DESKTOP CONTACT
          ====================================================== */}

          <div className="hidden lg:flex items-center shrink-0">
            <button
              type="button"
              onClick={handleContactClick}
              className="
                btn-primary
                text-sm
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                focus-visible:ring-offset-2
                focus-visible:ring-offset-charcoal
              "
            >
              ارتباط با من
            </button>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-lg
              text-gray-300
              bg-white/5
              border
              border-white/10
              hover:text-accent
              hover:bg-white/10
              hover:border-accent/30
              transition-all
              duration-200
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
            "
            aria-label={
              isMobileMenuOpen
                ? 'بستن منو'
                : 'باز کردن منو'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X
                size={23}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={23}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-white/10
              "
            >
              <motion.div
                initial={{
                  y: -10,
                }}
                animate={{
                  y: 0,
                }}
                exit={{
                  y: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  py-4
                  space-y-1
                "
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleNavClick(item.id)
                    }
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.03,
                    }}
                    className="
                      block
                      w-full
                      text-right
                      px-4
                      py-3
                      rounded-lg
                      text-sm
                      font-medium
                      text-gray-300
                      hover:text-white
                      hover:bg-white/5
                      transition-all
                      duration-200
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-accent
                    "
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile Contact */}
                <motion.button
                  type="button"
                  onClick={handleContactClick}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: navItems.length * 0.03,
                  }}
                  className="
                    w-full
                    mt-3
                    btn-primary
                    text-sm
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                  "
                >
                  ارتباط با من
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};