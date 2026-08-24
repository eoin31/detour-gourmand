import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { heroImage, heroSecondaryImage } from '@/data/catalog';

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Pain artisanal frais"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-gold-300/10 px-4 py-2 text-sm font-medium text-gold-300 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4" />
          Boulangerie & Pâtisserie artisanale
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl font-bold leading-tight text-cream-50 text-balance sm:text-6xl md:text-7xl"
        >
          Le goût du vrai,
          <br />
          <span className="font-script font-bold text-gold-300">fait main chaque matin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-cream-200 sm:text-xl"
        >
          Pains au levain, viennoiseries au beurre et pâtisseries de saison —
          préparés chaque jour dans notre atelier avec des ingrédients soigneusement sélectionnés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#produits"
            className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-ember-600/30 transition-all duration-300 hover:bg-ember-600 hover:shadow-2xl hover:shadow-ember-600/40"
          >
            Découvrir le catalogue
            <ChevronDown className="h-5 w-5" />
          </a>
          <a
            href="#savoir-faire"
            className="inline-flex items-center gap-2 rounded-full border border-cream-200/30 bg-cream-50/10 px-8 py-4 text-base font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:bg-cream-50/20"
          >
            Notre savoir-faire
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-cream-200/60"
        >
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {/* Decorative floating image (desktop) */}
      <motion.img
        src={heroSecondaryImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-20 hidden h-48 w-48 rounded-3xl object-cover shadow-2xl shadow-stone-900/50 ring-4 ring-cream-50/10 lg:block xl:h-64 xl:w-64"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.05, rotate: -3 }}
      />
    </section>
  );
}
