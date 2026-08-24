import { motion } from 'framer-motion';
import { Flame, Sprout, HandHeart } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Fait maison',
    description:
      'Chaque pain et chaque pâtisserie sont préparés entièrement à la main, chaque matin, dans notre atelier. Rien d\'industriel, rien de surgelé.',
  },
  {
    icon: Sprout,
    title: 'Ingrédients locaux',
    description:
      'Nos farines proviennent de moulles régionaux, nos fruits du marché de plein air. Nous privilégions les filières courtes et les producteurs de confiance.',
  },
  {
    icon: HandHeart,
    title: 'Tradition & savoir-faire',
    description:
      'Le levain naturel, le feu de bois, les longues fermentations : nous perpétuons les gestes de la boulangerie artisanale française.',
  },
];

export default function KnowHow() {
  return (
    <section id="savoir-faire" className="relative overflow-hidden bg-brown-800 py-20 sm:py-28">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl font-bold text-gold-300">Notre savoir-faire</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-cream-50 sm:text-5xl">
            Trois engagements, chaque jour
          </h2>
          <p className="mt-4 text-lg text-cream-200">
            Ce qui guide nos mains du pétrin à la sortie du four.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-3xl bg-brown-700/50 p-8 text-center ring-1 ring-gold-300/10 backdrop-blur-sm transition-all duration-300 hover:bg-brown-700/80 hover:ring-gold-300/30"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 text-brown-800 shadow-lg shadow-gold-500/20"
              >
                <feature.icon className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-cream-50">{feature.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-cream-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
