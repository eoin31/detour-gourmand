import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wheat,
  Croissant,
  CakeSlice,
  Sandwich,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { products, categories, type CategoryId, type Product } from '@/data/catalog';

const iconMap: Record<string, LucideIcon> = {
  Wheat,
  Croissant,
  CakeSlice,
  Sandwich,
};

export default function ProductCatalog() {
  const [active, setActive] = useState<CategoryId | 'all'>('all');

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="produits" className="relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl font-bold text-ember-500">Notre catalogue</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-stone-900 sm:text-5xl">
            Des produits faits avec passion
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Chaque produit est préparé chaque jour dans notre atelier.
            Les prix sont indicatifs et peuvent varier selon la saison.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <FilterButton
            label="Tout"
            active={active === 'all'}
            onClick={() => setActive('all')}
          />
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Wheat;
            return (
              <FilterButton
                key={cat.id}
                label={cat.label}
                icon={<Icon className="h-4 w-4" />}
                active={active === cat.id}
                onClick={() => setActive(cat.id)}
              />
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FilterButton({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon?: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
        active
          ? 'bg-brown-600 text-cream-50 shadow-lg shadow-brown-600/25'
          : 'bg-cream-200 text-stone-600 hover:bg-cream-300 hover:text-brown-600'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl bg-cream-50 shadow-md shadow-stone-900/5 ring-1 ring-stone-900/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-brown-900/15"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-ember-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            {product.badge}
          </span>
        )}
        {/* Price overlay on hover */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="p-4 text-lg font-bold text-cream-50">{product.price}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-bold text-stone-900">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-cream-200 px-3 py-1 text-sm font-semibold text-brown-600">
            {product.price}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{product.description}</p>
        <div className="mt-3 flex items-center gap-1 text-gold-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
