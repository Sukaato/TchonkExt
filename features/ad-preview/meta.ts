import type { FeatureMeta } from '../types';

export interface AdPreviewSettings {
  adPreview: boolean;
}

export const adPreviewMeta = {
  key: 'adPreview',
  group: 'Twitch',
  title: 'Preview à la place des pubs',
  description:
    'Pendant une pub, affiche le stream du petit lecteur de preview (avec son son) à la place de la pub.',
  defaults: { adPreview: true } satisfies AdPreviewSettings,
} satisfies FeatureMeta;
