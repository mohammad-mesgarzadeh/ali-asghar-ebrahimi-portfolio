import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick?: (sectionId: string) => void;
}

export const Navbar = ({ onNavClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    onNavClick?.(id);
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    handleNavClick('contact');
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md border-b border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-lg sm:text-xl font-bold text-white">
            علی اصغر ابراهیمی
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleContactClick}
              className="btn-primary text-sm"
            >
              ارتباط با من
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-gray-700 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-right px-4 py-2 text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="w-full mt-4 btn-primary text-sm"
            >
              ارتباط با من
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
