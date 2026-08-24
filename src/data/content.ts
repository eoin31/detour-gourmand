// ============================================================================
//  CONTENU DU SITE — tous les placeholders à remplir avec les infos du client
//  Aucune information factuelle n'est inventée : tout est entre crochets.
// ============================================================================

export interface Review {
  name: string;
  initials: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: '[NOM CLIENT 1]',
    initials: 'NC',
    rating: 5,
    text: '[AVIS CLIENT RÉEL — à remplacer par le témoignage d\'un client]',
  },
  {
    name: '[NOM CLIENT 2]',
    initials: 'NC',
    rating: 5,
    text: '[AVIS CLIENT RÉEL — à remplacer par le témoignage d\'un client]',
  },
  {
    name: '[NOM CLIENT 3]',
    initials: 'NC',
    rating: 5,
    text: '[AVIS CLIENT RÉEL — à remplacer par le témoignage d\'un client]',
  },
];

export interface HoursDay {
  day: string;
  hours: string;
}

export const hours: HoursDay[] = [
  { day: 'Lundi', hours: '[HH:HH – HH:HH]' },
  { day: 'Mardi', hours: '[HH:HH – HH:HH]' },
  { day: 'Mercredi', hours: '[HH:HH – HH:HH]' },
  { day: 'Jeudi', hours: '[HH:HH – HH:HH]' },
  { day: 'Vendredi', hours: '[HH:HH – HH:HH]' },
  { day: 'Samedi', hours: '[HH:HH – HH:HH]' },
  { day: 'Dimanche', hours: '[HH:HH – HH:HH]' },
];

export const contactInfo = {
  bakeryName: '[NOM DE LA BOULANGERIE]',
  address: '[ADRESSE POSTALE COMPLÈTE — N°, rue, code postal, ville]',
  phone: '[TÉLÉPHONE]',
  email: '[EMAIL DE CONTACT]',
  social: {
    instagram: '#',
    facebook: '#',
  },
  // Remplacez par les coordonnées réelles pour centrer la carte
  mapQuery: 'boulangerie+patisserie',
  mapEmbed:
    'https://www.openstreetmap.org/export/embed.html?bbox=2.330%2C48.860%2C2.370%2C48.875&layer=mapnik&marker=48.8675,2.3628',
};

// ============================================================================
//  MENTIONS LÉGALES — conformes aux obligations françaises
// ============================================================================

export const legalInfo = {
  editorName: '[NOM DU DIRECTEUR DE LA PUBLICATION]',
  editorRole: '[FONCTION — ex : Gérant de la société]',
  companyName: '[RAISON SOCIALE — ex : SARL [NOM DE LA BOULANGERIE]]',
  legalForm: '[FORME JURIDIQUE — ex : SARL / SAS / EI]',
  siret: '[SIRET — 14 chiffres]',
  rcs: '[VILLE DU RCS] RCS [NUMÉRO RCS]',
  vatNumber: '[NUMÉRO DE TVA INTRACOMMUNAUTAIRE]',
  registeredOffice: '[ADRESSE DU SIÈGE SOCIAL]',
  shareCapital: '[MONTANT DU CAPITAL SOCIAL]',
  hostName: '[NOM DE L\'HÉBERGEUR — ex : Bolt / OVH / Hostinger]',
  hostAddress: '[ADRESSE DE L\'HÉBERGEUR]',
  hostPhone: '[TÉLÉPHONE DE L\'HÉBERGEUR]',
};
