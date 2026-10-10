import type { FeatureMeta } from '../types';

export interface SearchMapSettings {
  searchMap: boolean;
  searchMapMode: 'local' | 'all';
}

export const searchMapMeta = {
  key: 'searchMap',
  group: 'Google',
  title: 'Carte dans les recherches',
  description: 'Ajoute une carte Google Maps aux résultats de recherche, retirée en Europe.',
  select: {
    key: 'searchMapMode',
    label: 'Afficher pour',
    options: [
      { value: 'local', label: 'les recherches de lieux' },
      { value: 'all', label: 'toutes les recherches' },
    ],
  },
  defaults: { searchMap: true, searchMapMode: 'local' } satisfies SearchMapSettings,
} satisfies FeatureMeta;
