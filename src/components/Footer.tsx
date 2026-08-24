import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Croissant, Instagram, Facebook, Phone, Mail, MapPin, X, ScrollText } from 'lucide-react';
import { contactInfo, legalInfo } from '@/data/content';

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <>
      <footer className="bg-brown-900 text-cream-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-brown-900">
                  <Croissant className="h-5 w-5" />
                </span>
                <span className="font-heading text-xl font-bold text-cream-50">
                  {contactInfo.bakeryName}
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-300">
                Boulangerie et pâtisserie artisanale. Pains au levain, viennoiseries au beurre,
                pâtisseries de saison et snacking — faits maison chaque jour.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={contactInfo.social.instagram}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brown-700 text-cream-200 transition-all duration-300 hover:bg-gold-400 hover:text-brown-900"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={contactInfo.social.facebook}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brown-700 text-cream-200 transition-all duration-300 hover:bg-gold-400 hover:text-brown-900"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
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
                  <a href="#contact" className="text-cream-300 transition-colors hover:text-cream-50">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brown-700/50 pt-8 sm:flex-row">
            <p className="text-xs text-cream-400">
              © {new Date().getFullYear()} {contactInfo.bakeryName}. Tous droits réservés.
            </p>
            <button
              onClick={() => setLegalOpen(true)}
              className="inline-flex items-center gap-2 text-xs text-cream-400 transition-colors hover:text-gold-300"
            >
              <ScrollText className="h-4 w-4" />
              Mentions légales
            </button>
          </div>
        </div>
      </footer>

      {/* Mentions légales modal */}
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
    </>
  );
}

function LegalModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-stone-900/60 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="my-auto w-full max-w-3xl rounded-3xl bg-cream-50 shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-stone-900/10 bg-cream-50/95 px-6 py-5 backdrop-blur sm:px-8">
              <h2 className="font-heading text-2xl font-bold text-stone-900">Mentions légales</h2>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-cream-200 hover:text-stone-900"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 px-6 py-6 text-sm leading-relaxed text-stone-700 sm:px-8 sm:py-8">
              <LegalSection title="1. Éditeur du site">
                <p>
                  Le présent site est édité par{' '}
                  <strong>{legalInfo.companyName}</strong>, {legalInfo.legalForm}, au capital de{' '}
                  <strong>{legalInfo.shareCapital}</strong>, dont le siège social est situé au{' '}
                  <strong>{legalInfo.registeredOffice}</strong>.
                </p>
                <p>
                  Immatriculée au {legalInfo.rcs}.
                </p>
                <p>
                  SIRET : <strong>{legalInfo.siret}</strong>
                </p>
                <p>
                  Numéro de TVA intracommunautaire : <strong>{legalInfo.vatNumber}</strong>
                </p>
                <p>
                  Directeur de la publication : <strong>{legalInfo.editorName}</strong>,{' '}
                  {legalInfo.editorRole}.
                </p>
                <p>
                  Pour toute question concernant le site :{' '}
                  <a href={`mailto:${contactInfo.email}`} className="font-medium text-brown-600 underline">
                    {contactInfo.email}
                  </a>
                  .
                </p>
              </LegalSection>

              <LegalSection title="2. Hébergement">
                <p>
                  Le site est hébergé par <strong>{legalInfo.hostName}</strong>, domicilié au{' '}
                  <strong>{legalInfo.hostAddress}</strong>.
                </p>
                <p>
                  Téléphone de l'hébergeur : <strong>{legalInfo.hostPhone}</strong>.
                </p>
              </LegalSection>

              <LegalSection title="3. Propriété intellectuelle">
                <p>
                  L'ensemble des éléments du site (textes, images, logos, mise en page, structure)
                  est la propriété exclusive de {legalInfo.companyName}, sauf mention contraire.
                  Toute reproduction, représentation, modification ou diffusion, totale ou partielle,
                  sans autorisation écrite préalable, est interdite et constitue une contrefaçon
                  sanctionnée par le Code de la propriété intellectuelle.
                </p>
              </LegalSection>

              <LegalSection title="4. Données personnelles & RGPD">
                <p>
                  Le site ne collecte aucune donnée personnelle à caractère sensible.
                  Les informations fournies via les formulaires de contact ou les emails envoyés à
                  l'adresse {contactInfo.email} sont utilisées uniquement pour répondre à vos demandes.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                  « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d'un droit
                  d'accès, de rectification, d'effacement, de limitation et de portabilité de vos données.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez adresser une demande à{' '}
                  <a href={`mailto:${contactInfo.email}`} className="font-medium text-brown-600 underline">
                    {contactInfo.email}
                  </a>
                  .
                </p>
                <p>
                  Vous pouvez également introduire une réclamation auprès de la CNIL
                  (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.
                </p>
              </LegalSection>

              <LegalSection title="5. Cookies">
                <p>
                  Le site ne dépose pas de cookies de tracking publicitaire. Des cookies techniques
                  strictement nécessaires au fonctionnement du site peuvent être utilisés.
                </p>
              </LegalSection>

              <LegalSection title="6. Responsabilité">
                <p>
                  Les informations publiées sur ce site (notamment les prix et la disponibilité des
                  produits) sont données à titre indicatif et peuvent être modifiées à tout moment
                  sans préavis. {legalInfo.companyName} ne saurait être tenue responsable des
                  éventuelles erreurs ou omissions.
                </p>
              </LegalSection>

              <LegalSection title="7. Crédits photographiques">
                <p>
                  Les photographies utilisées sur ce site sont des photos d'illustration
                  sous licence libre (Pexels), destinées à être remplacées par les photos
                  réelles de {legalInfo.companyName}.
                </p>
              </LegalSection>

              <p className="border-t border-stone-900/10 pt-4 text-xs text-stone-400">
                Les informations entre crochets [ ] sont des placeholders à remplacer par les
                informations légales réelles de l'entreprise.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-stone-900">{title}</h3>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}
