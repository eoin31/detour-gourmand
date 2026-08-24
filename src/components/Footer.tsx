import { Croissant, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-brown-900">
                <Croissant className="h-5 w-5" />
              </span>
              <span className="font-heading text-xl font-bold text-cream-50">
                {contactInfo.bakeryName}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-300">
              Boulangerie et pâtisserie artisanale à Toulouse. Pains au levain, petit épeautre,
              viennoiseries au beurre, pâtisseries de saison et snacking — faits maison chaque jour.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cream-50">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cream-50 break-all">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-50">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#accueil" className="text-cream-300 transition-colors hover:text-cream-50">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#produits" className="text-cream-300 transition-colors hover:text-cream-50">
                  Nos produits
                </a>
              </li>
              <li>
                <a href="#savoir-faire" className="text-cream-300 transition-colors hover:text-cream-50">
                  Notre savoir-faire
                </a>
              </li>
              <li>
                <a href="#avis" className="text-cream-300 transition-colors hover:text-cream-50">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-300 transition-colors hover:text-cream-50">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brown-700/50 pt-8 text-center">
          <p className="text-xs text-cream-400">
            © {new Date().getFullYear()} {contactInfo.bakeryName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
