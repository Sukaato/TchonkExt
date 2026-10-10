import type { Settings } from './settings';

type Toggle = Exclude<
  {
    [K in keyof Settings]: Settings[K] extends boolean ? K : never;
  }[keyof Settings],
  undefined
>;

export interface Feature {
  key: Toggle;
  title: string;
  description: string;
}

export interface FeatureGroup {
  title: string;
  features: Feature[];
}

export const GROUPS: FeatureGroup[] = [
  {
    title: 'Twitch',
    features: [
      {
        key: 'hlsCatcher',
        title: 'Détection des streams',
        description:
          'Détecte le flux HLS des chaînes, le liste dans la popup avec le choix de la qualité, et l’ouvre dans un lecteur à part.',
      },
      {
        key: 'autoPip',
        title: 'Picture-in-Picture automatique',
        description: 'Dans le lecteur intégré, passe en PiP quand tu changes d’onglet.',
      },
      {
        key: 'adPreview',
        title: 'Preview à la place des pubs',
        description:
          'Pendant une pub, affiche le stream du petit lecteur de preview (avec son son) à la place de la pub.',
      },
    ],
  },
  {
    title: 'YouTube',
    features: [
      {
        key: 'noPremiumPopups',
        title: 'Retirer les popups Premium',
        description:
          'Masque les bandeaux et dialogues qui vendent Premium sur YouTube et YouTube Music.',
      },
    ],
  },
  {
    title: 'Google',
    features: [
      {
        key: 'searchMap',
        title: 'Carte dans les recherches',
        description: 'Ajoute une carte Google Maps aux résultats de recherche, retirée en Europe.',
      },
    ],
  },
];
