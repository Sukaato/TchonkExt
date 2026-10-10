import { adPreviewMeta } from './ad-preview/meta';
import { autoPipMeta } from './auto-pip/meta';
import { hlsCatcherMeta } from './hls-catcher/meta';
import { searchMapMeta } from './search-map/meta';
import type { FeatureMeta } from './types';
import { noPremiumPopupsMeta } from './youtube-no-premium/meta';

export type { AdPreviewSettings } from './ad-preview/meta';
export type { AutoPipSettings } from './auto-pip/meta';
export type { HlsCatcherSettings } from './hls-catcher/meta';
export type { SearchMapSettings } from './search-map/meta';
export type { NoPremiumSettings } from './youtube-no-premium/meta';

/** Every feature, in the order shown on the options page. */
export const FEATURES: readonly FeatureMeta[] = [
  hlsCatcherMeta,
  autoPipMeta,
  adPreviewMeta,
  noPremiumPopupsMeta,
  searchMapMeta,
];

export interface FeatureGroup {
  title: string;
  features: FeatureMeta[];
}

export const GROUPS: FeatureGroup[] = FEATURES.reduce<FeatureGroup[]>((groups, f) => {
  const g = groups.find((x) => x.title === f.group);
  if (g) g.features.push(f);
  else groups.push({ title: f.group, features: [f] });
  return groups;
}, []);
