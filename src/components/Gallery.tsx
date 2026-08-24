import { motion } from 'framer-motion';
import { galleryImages } from '@/data/catalog';

export default function Gallery() {
  return (
    <section id="galerie" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl font-bold text-ember-500">L'atelier & la boutique</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-stone-900 sm:text-5xl">
            Dans notre cuisine
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4) }}
              className={`group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-stone-900/5 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2' : 'aspect-square'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-900/70 via-stone-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="p-4 text-sm font-medium text-cream-50">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
