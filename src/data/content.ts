// ============================================================================
//  CONTENU DU SITE — Détour gourmand
// ============================================================================

export interface Review {
  name: string;
  initials: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: 'L. Maury',
    initials: 'LM',
    rating: 5,
    text: "Une vraie boulangerie d'artisan, et non une chaîne comme partout. Le pain est bon mais je viens principalement pour le petit épeautre qui est excellent. Les pâtisseries sont franchement bonnes et hyper accessibles en terme de prix. Très facile de se garer. Petit bonus avec les huîtres direct producteur le dimanche matin.",
  },
  {
    name: 'Kris Minier',
    initials: 'KM',
    rating: 5,
    text: "L'accueil, les produits pour nous la bûche pomme caramel une tuerie, les pains seigle, petit épeautre aux graines et pain aux figues tout simplement délicieux ! Nous recommandons vivement cette boulangerie artisanale.",
  },
  {
    name: 'Leila Krishpulls',
    initials: 'LK',
    rating: 5,
    text: "Personnel très accueillant et souriant. Le pain est délicieux, le café aussi. Il y a une petite terrasse sympa et on peut manger à l'intérieur s'il fait froid.",
  },
];

export interface HoursDay {
  day: string;
  hours: string;
  closed?: boolean;
}

export const hours: HoursDay[] = [
  { day: 'Lundi', hours: 'Fermé', closed: true },
  { day: 'Mardi', hours: '6h45 – 13h30  ·  17h – 19h' },
  { day: 'Mercredi', hours: '6h45 – 13h30  ·  17h – 19h' },
  { day: 'Jeudi', hours: '6h45 – 13h30  ·  17h – 19h' },
  { day: 'Vendredi', hours: '6h45 – 13h30  ·  17h – 19h' },
  { day: 'Samedi', hours: '7h – 13h' },
  { day: 'Dimanche', hours: '7h – 13h' },
];

export const contactInfo = {
  bakeryName: 'Détour gourmand',
  address: '80 Bd Deltour, 31500 Toulouse',
  phone: '05 61 80 92 38',
  email: 'dgourmand31@gmail.com',
  // Carte Google Maps centrée sur 80 Bd Deltour, 31500 Toulouse
  mapEmbed:
    'https://www.google.com/maps?q=80+Boulevard+Deltour,+31500+Toulouse&output=embed',
  mapLink:
    'https://www.google.com/maps/dir/?api=1&destination=80+Boulevard+Deltour,+31500+Toulouse',
};
