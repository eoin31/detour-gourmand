import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { contactInfo, hours } from '@/data/content';

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-script text-2xl font-bold text-ember-500">Venez nous rendre visite</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-stone-900 sm:text-5xl">
            Nous trouver
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address card */}
            <div className="rounded-3xl bg-cream-100 p-7 shadow-sm ring-1 ring-stone-900/5">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ember-500/10 text-ember-500">
                  <MapPin className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-stone-900">Adresse</h3>
                  <p className="mt-1 text-stone-600">{contactInfo.address}</p>
                  <a
                    href={contactInfo.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-ember-500 hover:text-ember-600"
                  >
                    <Navigation className="h-4 w-4" />
                    Obtenir l'itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-start gap-4 rounded-3xl bg-cream-100 p-6 shadow-sm ring-1 ring-stone-900/5 transition-all duration-300 hover:shadow-md hover:ring-ember-500/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brown-600/10 text-brown-600">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-stone-900">Téléphone</h3>
                  <p className="mt-0.5 text-sm text-stone-600">{contactInfo.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-4 rounded-3xl bg-cream-100 p-6 shadow-sm ring-1 ring-stone-900/5 transition-all duration-300 hover:shadow-md hover:ring-ember-500/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brown-600/10 text-brown-600">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-stone-900">Email</h3>
                  <p className="mt-0.5 text-sm text-stone-600 break-all">{contactInfo.email}</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-3xl bg-cream-100 p-7 shadow-sm ring-1 ring-stone-900/5">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-600">
                  <Clock className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-xl font-bold text-stone-900">Horaires d'ouverture</h3>
              </div>
              <ul className="mt-4 divide-y divide-stone-900/5">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2.5">
                    <span className="text-sm font-medium text-stone-700">{h.day}</span>
                    <span
                      className={`text-sm ${
                        h.closed ? 'font-medium text-ember-500' : 'text-stone-500'
                      }`}
                    >
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-stone-900/10 lg:min-h-[500px]"
          >
            <iframe
              title="Carte — Détour gourmand"
              src={contactInfo.mapEmbed}
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
