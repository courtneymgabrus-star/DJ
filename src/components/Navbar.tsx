import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Events', href: '#events' },
    { name: 'Connect', href: '#connect' },
  ];

  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          isScrolled || !isHome ? 'bg-cream/95 shadow-sm backdrop-blur-md py-3' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="font-serif italic text-2xl text-wine tracking-tight">
          Divine Juls
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={getHref(link.href)}
                className="text-[0.7rem] uppercase tracking-widest text-slate font-medium hover:text-wine transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={getHref('#connect')}
              className="text-[0.7rem] uppercase tracking-widest font-medium text-wine border border-wine px-5 py-2.5 rounded-full hover:bg-wine hover:text-white transition-all"
            >
              Book a Session
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-wine transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-wine transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-wine transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getHref(link.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest text-wine font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={getHref('#connect')}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest font-medium text-wine border border-wine px-8 py-3 rounded-full"
            >
              Book a Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
