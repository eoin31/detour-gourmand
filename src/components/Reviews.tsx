import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/content';

export default function Reviews() {
  return (
    <section id="avis" className="bg-cream-200 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl font-bold text-ember-500">Ils nous font confiance</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-stone-900 sm:text-5xl">
            Avis de nos clients
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-3xl bg-cream-50 p-8 shadow-md ring-1 ring-stone-900/5"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-cream-300" />
              <div className="flex items-center gap-1 text-gold-400">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-stone-700">
                « {review.text} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-600 text-sm font-bold text-cream-50">
                  {review.initials}
                </span>
                <span className="font-heading text-lg font-semibold text-stone-900">{review.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
