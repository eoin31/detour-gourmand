// ============================================================================
//  CATALOGUE PRODUITS — centralisé ici pour édition facile
//  Modifiez les noms, prix, descriptions et images sans toucher au design.
// ============================================================================

export type CategoryId = 'pains' | 'viennoiseries' | 'patisseries' | 'snacking';

export interface Category {
  id: CategoryId;
  label: string;
  icon: string; // lucide-react icon name
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: CategoryId;
  badge?: string; // ex: "Nouveau", "Best-seller"
}

export const categories: Category[] = [
  { id: 'pains', label: 'Pains', icon: 'Wheat' },
  { id: 'viennoiseries', label: 'Viennoiseries', icon: 'Croissant' },
  { id: 'patisseries', label: 'Pâtisseries', icon: 'CakeSlice' },
  { id: 'snacking', label: 'Snacking', icon: 'Sandwich' },
];

export const products: Product[] = [
  // --- PAINS ---
  {
    id: 'pain-campagne',
    name: 'Pain de campagne',
    price: '4,20 €',
    description: 'Levain naturel, croûte épaisse et mie aérée. Cuit au feu de bois.',
    image: 'https://images.pexels.com/photos/8633662/pexels-photo-8633662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pains',
    badge: 'Signature',
  },
  {
    id: 'baguette-tradition',
    name: 'Baguette Tradition',
    price: '1,40 €',
    description: 'Farine T65, fermentation longue, mie crémeuse et goût intense.',
    image: 'https://images.pexels.com/photos/1387075/pexels-photo-1387075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pains',
    badge: 'Best-seller',
  },
  {
    id: 'tourte-seigle',
    name: 'Tourte de seigle',
    price: '5,80 €',
    description: 'Seigle entier, mie humide, parfait avec fromages et saumon.',
    image: 'https://images.pexels.com/photos/35993723/pexels-photo-35993723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pains',
  },
  {
    id: 'petit-epeautre',
    name: 'Petit épeautre',
    price: '5,90 €',
    description: 'Cultivé en agriculture raisonnée, mie moelleuse et saveur douce. Le préféré de nos habitués.',
    image: 'https://images.pexels.com/photos/30666735/pexels-photo-30666735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pains',
    badge: 'Signature',
  },
  {
    id: 'pain-figues',
    name: 'Pain aux figues',
    price: '6,20 €',
    description: 'Figues moelleuses et pâte à pain au levain. Délicieux avec fromage de brebis.',
    image: 'https://images.pexels.com/photos/221442/pexels-photo-221442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pains',
  },
  {
    id: 'pain-seigle-graines',
    name: 'Seigle aux graines',
    price: '5,80 €',
    description: 'Seigle complet et mélange de graines (tournesol, sésame, pavot).',
    image: 'https://images.pexels.com/photos/35993723/pexels-photo-35993723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'pains',
  },

  // --- VIENNOISERIES ---
  {
    id: 'croissant-beurre',
    name: 'Croissant au beurre',
    price: '1,20 €',
    description: 'Beurre AOP Charentes-Poitou, feuilletage à 81 % de beurre.',
    image: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'viennoiseries',
    badge: 'Best-seller',
  },
  {
    id: 'pain-chocolat',
    name: 'Pain au chocolat',
    price: '1,30 €',
    description: 'Deux barres de chocolat noir dans une pâte feuilletée au beurre.',
    image: 'https://images.pexels.com/photos/32422489/pexels-photo-32422489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'viennoiseries',
  },
  {
    id: 'chausson-pommes',
    name: 'Chausson aux pommes',
    price: '2,20 €',
    description: 'Pommes du verger, sucre roux et cannelle, pâte feuilletée maison.',
    image: 'https://images.pexels.com/photos/2245293/pexels-photo-2245293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'viennoiseries',
  },
  {
    id: 'brioche-feuilletee',
    name: 'Brioche feuilletée',
    price: '3,80 €',
    description: 'Brioche et feuilletage réunis, nappée de sucre perlé.',
    image: 'https://images.pexels.com/photos/37020184/pexels-photo-37020184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'viennoiseries',
    badge: 'Nouveau',
  },

  // --- PÂTISSERIES ---
  {
    id: 'tarte-citron',
    name: 'Tarte au citron meringuée',
    price: '3,90 €',
    description: 'Crémeux citron de Sicile, meringue italienne flambée au chalumeau.',
    image: 'https://images.pexels.com/photos/8250338/pexels-photo-8250338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'patisseries',
    badge: 'Signature',
  },
  {
    id: 'eclair-cafe',
    name: 'Éclair au café',
    price: '3,50 €',
    description: 'Pâte à choux, crème pâtissière au café, fondant maison.',
    image: 'https://images.pexels.com/photos/31101247/pexels-photo-31101247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'patisseries',
  },
  {
    id: 'tarte-fruits',
    name: 'Tarte aux fruits de saison',
    price: '4,50 €',
    description: 'Crème d\'amandes et fruits frais selon l\'arrivage du marché.',
    image: 'https://images.pexels.com/photos/8250717/pexels-photo-8250717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'patisseries',
  },
  {
    id: 'buche-pomme-caramel',
    name: 'Bûche pomme caramel',
    price: '18,00 €',
    description: 'Pommes confites, caramel au beurre salé et biscuit moelleux. Une tuerie selon nos clients !',
    image: 'https://images.pexels.com/photos/21811098/pexels-photo-21811098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'patisseries',
    badge: 'Coup de cœur',
  },
  {
    id: 'macarons',
    name: 'Coffret macarons (x6)',
    price: '12,00 €',
    description: 'Six macarons assortis : vanille, framboise, pistache, chocolat.',
    image: 'https://images.pexels.com/photos/31717736/pexels-photo-31717736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'patisseries',
    badge: 'Nouveau',
  },

  // --- SNACKING ---
  {
    id: 'sandwich-veggie',
    name: 'Sandwich veggie',
    price: '6,50 €',
    description: 'Pain aux céréales, légumes croquants, houmous et graines germées.',
    image: 'https://images.pexels.com/photos/4637491/pexels-photo-4637491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacking',
  },
  {
    id: 'club-poulet',
    name: 'Club poulet & bacon',
    price: '7,80 €',
    description: 'Pain de mie grillé, poulet fermier, bacon croustillant, sauce maison.',
    image: 'https://images.pexels.com/photos/34644323/pexels-photo-34644323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacking',
    badge: 'Best-seller',
  },
  {
    id: 'quiche-lorraine',
    name: 'Quiche lorraine (part)',
    price: '4,80 €',
    description: 'Pâte brisée, lardons fumés, crème fraîche et gruyère de Comté.',
    image: 'https://images.pexels.com/photos/5112594/pexels-photo-5112594.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacking',
  },
  {
    id: 'salade-cesar',
    name: 'Salade César',
    price: '8,50 €',
    description: 'Romaine croquante, poulet grillé, parmesan, croûtons à l\'ail.',
    image: 'https://images.pexels.com/photos/28396784/pexels-photo-28396784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'snacking',
  },
];

// ============================================================================
//  GALERIE PHOTOS — atelier & boutique
// ============================================================================

export const galleryImages: { src: string; alt: string }[] = [
  { src: 'https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Intérieur de la boutique' },
  { src: 'https://images.pexels.com/photos/29380155/pexels-photo-29380155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Présentation des pains et viennoiseries' },
  { src: 'https://images.pexels.com/photos/7447284/pexels-photo-7447284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Sortie du four' },
  { src: 'https://images.pexels.com/photos/38456849/pexels-photo-38456849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Étalage du matin' },
  { src: 'https://images.pexels.com/photos/221442/pexels-photo-221442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Pains sur l\'étal' },
  { src: 'https://images.pexels.com/photos/18656839/pexels-photo-18656839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vitrine de la boulangerie' },
];

// ============================================================================
//  HERO IMAGE
// ============================================================================

export const heroImage =
  'https://images.pexels.com/photos/30918875/pexels-photo-30918875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const heroSecondaryImage =
  'https://images.pexels.com/photos/36445141/pexels-photo-36445141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
