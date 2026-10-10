import type { FeatureMeta } from '../types';

export interface NoPremiumSettings {
  noPremiumPopups: boolean;
}

export const noPremiumPopupsMeta = {
  key: 'noPremiumPopups',
  group: 'YouTube',
  title: 'Retirer les popups Premium',
  description: 'Masque les bandeaux et dialogues qui vendent Premium sur YouTube et YouTube Music.',
  defaults: { noPremiumPopups: true } satisfies NoPremiumSettings,
} satisfies FeatureMeta;
