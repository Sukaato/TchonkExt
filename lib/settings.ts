import { storage } from 'wxt/utils/storage';

export interface Settings {
  /** Detect Twitch HLS streams, popup with quality list and built-in player. */
  hlsCatcher: boolean;
  /** Picture-in-Picture automatically when the player tab goes to background. */
  autoPip: boolean;
  /** Show the stream preview in place of the Twitch ad. */
  adPreview: boolean;
  /** Hide the Premium upsells on YouTube and YouTube Music. */
  noPremiumPopups: boolean;
  /** Show a map next to Google search results. */
  searchMap: boolean;
  /** 'local' = only for place-like queries, 'all' = every search. */
  searchMapMode: 'local' | 'all';
}

export const DEFAULTS: Settings = {
  hlsCatcher: true,
  autoPip: true,
  adPreview: true,
  noPremiumPopups: true,
  searchMap: true,
  searchMapMode: 'local',
};

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
