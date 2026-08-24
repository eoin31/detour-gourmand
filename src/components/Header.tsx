import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Croissant } from 'lucide-react';
import { contactInfo } from '@/data/content';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#produits', label: 'Nos produits' },
  { href: '#savoir-faire', label: 'À propos' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(60,40,20,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2.5 group">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                scrolled ? 'bg-brown-600 text-cream-50' : 'bg-cream-50/90 text-brown-600'
              }`}
            >
              <Croissant className="h-5 w-5" />
            </span>
            <span
              className={`font-heading text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-stone-900' : 'text-cream-50'
              }`}
            >
              {contactInfo.bakeryName}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-stone-600 hover:text-brown-600'
                    : 'text-cream-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ember-500/30 transition-all duration-300 hover:bg-ember-600 hover:shadow-xl hover:shadow-ember-500/40"
            >
              <MapPin className="h-4 w-4" />
              Nous trouver
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
              scrolled ? 'text-stone-800' : 'text-cream-50'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-cream-50 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="rounded-lg px-4 py-3 text-base font-medium text-stone-700 hover:bg-cream-100 hover:text-brown-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-5 py-3 text-base font-semibold text-white"
              >
                <MapPin className="h-4 w-4" />
                Nous trouver
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
