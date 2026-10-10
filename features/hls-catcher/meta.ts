import type { FeatureMeta } from '../types';

export interface HlsCatcherSettings {
  hlsCatcher: boolean;
}

export const hlsCatcherMeta = {
  key: 'hlsCatcher',
  group: 'Twitch',
  title: 'Détection des streams',
  description:
    'Détecte le flux HLS des chaînes, le liste dans la popup avec le choix de la qualité, et l’ouvre dans un lecteur à part.',
  defaults: { hlsCatcher: true } satisfies HlsCatcherSettings,
} satisfies FeatureMeta;
