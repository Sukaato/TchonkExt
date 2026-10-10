import type { FeatureMeta } from '../types';

export interface AutoPipSettings {
  autoPip: boolean;
}

export const autoPipMeta = {
  key: 'autoPip',
  group: 'Twitch',
  title: 'Picture-in-Picture automatique',
  description: 'Dans le lecteur intégré, passe en PiP quand tu changes d’onglet.',
  defaults: { autoPip: true } satisfies AutoPipSettings,
} satisfies FeatureMeta;
