import {
  type AdPreviewSettings,
  type AutoPipSettings,
  FEATURES,
  type HlsCatcherSettings,
  type NoPremiumSettings,
  type SearchMapSettings,
} from '@/features';
import { storage } from 'wxt/utils/storage';

export type Settings = HlsCatcherSettings &
  AutoPipSettings &
  AdPreviewSettings &
  NoPremiumSettings &
  SearchMapSettings;

export const DEFAULTS = Object.assign({}, ...FEATURES.map((f) => f.defaults)) as Settings;

const item = storage.defineItem<Settings>('sync:settings', { fallback: DEFAULTS });

export async function getSettings(): Promise<Settings> {
  return { ...DEFAULTS, ...(await item.getValue()) };
}

export async function patchSettings(patch: Partial<Settings>): Promise<void> {
  await item.setValue({ ...(await getSettings()), ...patch });
}

/** Calls `fn` with the current settings, then again on every change. */
export function watchSettings(fn: (s: Settings) => void): void {
  void getSettings().then(fn);
  item.watch((v) => fn({ ...DEFAULTS, ...v }));
}
